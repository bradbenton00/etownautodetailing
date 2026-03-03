import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile } from "fs/promises";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });

  // Create fallback routing for static deployment
  console.log("creating static route fallbacks...");
  const fs = await import("fs");
  const path = await import("path");
  const publicDir = path.join(process.cwd(), "dist", "public");
  
  // Create 404 fallback
  fs.copyFileSync(path.join(publicDir, "index.html"), path.join(publicDir, "404.html"));
  
  // Create specific route folders
  const routes = [
    "/sms-privacy", 
    "/privacy-policy", 
    "/terms-of-service", 
    "/sms-terms-of-service", 
    "/faq", 
    "/book-an-appointment"
  ];
  
  for (const route of routes) {
    const routeDir = path.join(publicDir, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.copyFileSync(path.join(publicDir, "index.html"), path.join(routeDir, "index.html"));
  }
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
