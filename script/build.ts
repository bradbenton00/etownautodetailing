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
  
  // Create specific route folders and index.html fallbacks
  const routes = [
    "/sms-privacy", 
    "/privacy-policy", 
    "/privacy",
    "/terms-of-service", 
    "/sms-terms-of-service", 
    "/terms",
    "/faq", 
    "/book-an-appointment",
    "/services/interior-detail",
    "/services/exterior-detail",
    "/services/complete-detail",
    "/services/aircraft-detailing",
    "/services/fleet-maintenance"
  ];
  
  for (const route of routes) {
    const routeDir = path.join(publicDir, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    // Using index.html as the fallback allows the client-side router (wouter)
    // to pick up the route and render the correct React component while returning a 200 OK.
    fs.copyFileSync(path.join(publicDir, "index.html"), path.join(routeDir, "index.html"));
    
    // Also copy to route.html for Replit's static deployment specific behavior
    fs.copyFileSync(path.join(publicDir, "index.html"), path.join(publicDir, `${route.substring(1)}.html`));
  }

  // Generate true static HTML for SEO/crawlers
  console.log("generating true static HTML files...");
  try {
    const { execSync } = await import("child_process");
    execSync("node generate-static.js", { stdio: "inherit" });
  } catch (err) {
    console.error("Failed to generate static files:", err);
  }
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
