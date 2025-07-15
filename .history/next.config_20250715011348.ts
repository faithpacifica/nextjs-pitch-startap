import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {danger
		remotePatterns: [{ protocol: 'https', hostname: '*' }],
	},
};

export default nextConfig;
