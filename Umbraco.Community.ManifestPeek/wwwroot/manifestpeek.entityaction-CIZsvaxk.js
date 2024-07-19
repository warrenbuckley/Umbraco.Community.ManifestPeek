import { UmbEntityActionBase as s } from "@umbraco-cms/backoffice/entity-action";
import { umbExtensionsRegistry as i } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_MODAL_MANAGER_CONTEXT as o, UMB_CODE_EDITOR_MODAL as a } from "@umbraco-cms/backoffice/modal";
class x extends s {
  constructor(t, e) {
    super(t, e), this._extensionRegistry = i, this.consumeContext(o, (n) => {
      this._modalManagerContext = n;
    });
  }
  async execute() {
    var e;
    console.log("args", this.args);
    const t = this._extensionRegistry.getByAlias(this.args.unique ?? "");
    console.log("extension", t), (e = this._modalManagerContext) == null || e.open(this, a, {
      data: {
        content: JSON.stringify(t, null, 4),
        headline: "view Extension Manifest",
        language: "json"
      }
    });
  }
}
export {
  x as ManifestPeekEntityAction,
  x as api
};
//# sourceMappingURL=manifestpeek.entityaction-CIZsvaxk.js.map
