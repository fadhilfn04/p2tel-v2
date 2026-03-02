module.exports = [
"[project]/app/(main)/page.tsx [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/_c0890812._.js",
  "server/chunks/ssr/node_modules_motion-dom_dist_es_145e166a._.js",
  "server/chunks/ssr/node_modules_framer-motion_dist_es_3da70229._.js",
  "server/chunks/ssr/node_modules_next_dist_2ae41284._.js",
  "server/chunks/ssr/node_modules_4ba0e306._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/app/(main)/page.tsx [app-ssr] (ecmascript)");
    });
});
}),
];