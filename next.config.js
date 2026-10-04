// Optional env overrides for hosting under a subpath (e.g. Purdue homes mirror):
//   PAGES_BASE_PATH=/homes/sane0 TRAILING_SLASH=true yarn build
// Default (GitHub Pages + custom domain) needs neither.
const basePath = process.env.PAGES_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  ...(process.env.TRAILING_SLASH === 'true' ? { trailingSlash: true } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
