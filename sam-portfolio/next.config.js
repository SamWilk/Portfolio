/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

// module.exports = {
//   exportPathMap: async function (
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     return {
//       "/": { page: "/" },
//       "/about": { page: "/About-me" },
//       "/p/hello-nextjs": { page: "/post", query: { title: "hello-nextjs" } },
//       "/p/learn-nextjs": { page: "/post", query: { title: "learn-nextjs" } },
//       "/p/deploy-nextjs": { page: "/post", query: { title: "deploy-nextjs" } },
//     };
//   },
// };
