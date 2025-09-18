import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    transpilePackages: [],
    experimental: {},

    webpack: (config, { dev, isServer }) => {
        if (dev && !isServer) {
            // Force polling for file watching in Docker
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300,
                ignored: /node_modules/,
            };
        }

        return config;
    },

    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },
};

export default nextConfig;