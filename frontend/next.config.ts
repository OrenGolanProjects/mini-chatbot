import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@mui/x-data-grid', '@mui/x-data-grid-generator'],
    experimental: {
        optimizePackageImports: ['@mui/material', '@mui/icons-material'],
    },
    turbopack: {}, // Enable Turbopack with default settings
};

export default nextConfig;