import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/lens-and-frame",
        destination: "/work/customer-operations-automation",
        permanent: true,
      },
      {
        source: "/en/work/lens-and-frame",
        destination: "/en/work/customer-operations-automation",
        permanent: true,
      },
      ...["mybody-x", "marqon", "heliservice"].flatMap((slug) => [
        { source: `/work/${slug}`, destination: "/#work", permanent: true },
        {
          source: `/en/work/${slug}`,
          destination: "/en#work",
          permanent: true,
        },
      ]),
    ];
  },
};

export default nextConfig;
