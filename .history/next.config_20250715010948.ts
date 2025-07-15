import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      protocol:'https'
    ]
  }
};

export default nextConfig;
