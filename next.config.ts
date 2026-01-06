import type { NextConfig } from 'next';

const cspHeader = `
  default-src *;
  script-src * 'unsafe-inline' 'unsafe-eval' blob: data:;
  style-src * 'unsafe-inline';
  img-src * blob: data:;
  font-src *;
  object-src 'none';
  base-uri *;
  form-action *;
  frame-ancestors *;
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ").trim();

const nextConfig: NextConfig = {
  reactCompiler: true,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader
          }
        ]
      }
    ];
  }
};

export default nextConfig;
