import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages static export için
  output: 'export',
  trailingSlash: true,
  
  // GitHub Pages için asset prefix (sadece production'da)
  basePath: process.env.NODE_ENV === 'production' ? '/sarjet-web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sarjet-web/' : '',
  
  // Image optimization (static hosting için kapatılmalı)
  images: {
    unoptimized: true,
  },
  
  // Production optimizasyonları
  experimental: {
    optimizeCss: true,
  }
};

export default nextConfig;
