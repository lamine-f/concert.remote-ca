/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname:'**',
                // pathname: '/img/**',
                port: ''
            }
        ],
    },
};

export default nextConfig;
