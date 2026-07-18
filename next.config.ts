import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    /* Legacy routes from the previous site (alivio-platform SPA) so
       inbound links and indexed URLs survive the domain move. */
    return [
      { source: "/pricing", destination: "/product", permanent: true },
      { source: "/careers", destination: "/positions", permanent: true },
      { source: "/services", destination: "/", permanent: true },
      { source: "/team", destination: "/about", permanent: true },
      { source: "/case-studies", destination: "/", permanent: true },
      { source: "/industries", destination: "/", permanent: true },
      { source: "/resources", destination: "/insights", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:slug", destination: "/insights", permanent: true },
    ];
  },
};

export default nextConfig;
