import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'dist', 'public');
const routes = ['/sms-privacy', '/privacy-policy', '/terms-of-service', '/sms-terms-of-service', '/faq', '/book-an-appointment'];

routes.forEach(route => {
  const routeDir = path.join(publicDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.copyFileSync(path.join(publicDir, 'index.html'), path.join(routeDir, 'index.html'));
});
