import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@mui/x-data-grid', '@mui/x-data-grid-generator'],

    experimental: {
        optimizePackageImports: ['@mui/material', '@mui/icons-material'],
    },

    turbo: {
        root: __dirname,
        rules: {},
    },
};

export default nextConfig;