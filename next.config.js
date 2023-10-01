import WithPWA from "next-pwa"

const nextConfig = {
    output: process.env.NODE_ENV === "development" ? "standalone" : "export",
    ...WithPWA({
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development"
    }),
    basePath: "/constructive-cost-mode",
}

export default nextConfig