import type { NextConfig } from "next";

//const path = require('path');

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;
