import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // 다른 experimental 설정이 있으면 여기에 추가
  },
  /**
   * Turbopack 설정 (Next.js 15 이상)
   * Next.js 16에서는 "turbo" 키 아래에 root를 명시해야 함.
   */
  turbo: {
    root: __dirname,
  },
};

export default nextConfig;
