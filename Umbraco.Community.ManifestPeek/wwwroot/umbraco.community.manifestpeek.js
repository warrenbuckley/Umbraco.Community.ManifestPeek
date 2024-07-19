const e = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.Community.ManifestPeek.EntityAction",
    name: "Umbraco Community ManifestPeek EntityAction",
    api: () => import("./manifestpeek.entityaction-BZSO3dbV.js"),
    forEntityTypes: ["extension"],
    weight: 1e3,
    meta: {
      label: "View Manifest",
      icon: "icon-code"
    }
  }
], i = (n, t) => {
  console.log("Hello from Umbraco.Community.ManifestPeek"), t.registerMany([
    ...e
  ]);
};
export {
  i as onInit
};
//# sourceMappingURL=umbraco.community.manifestpeek.js.map
