import { UmbEntityActionBase as n } from "@umbraco-cms/backoffice/entity-action";
import { umbExtensionsRegistry as i } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_MODAL_MANAGER_CONTEXT as o, UMB_CODE_EDITOR_MODAL as a } from "@umbraco-cms/backoffice/modal";
class c extends n {
  constructor(t, e) {
    super(t, e), this._extensionRegistry = i, this.consumeContext(o, (s) => {
      this._modalManagerContext = s;
    });
  }
  async execute() {
    var e;
    console.log("args", this.args);
    const t = this._extensionRegistry.getByAlias(this.args.unique ?? "");
    console.log("extension", t), (e = this._modalManagerContext) == null || e.open(this, a, {
      modal: {
        size: "medium",
        type: "sidebar"
      },
      data: {
        content: JSON.stringify(t, null, 4),
        headline: "View Extension Manifest",
        language: "json"
      }
    });
  }
}
export {
  c as ManifestPeekEntityAction,
  c as api
};
//# sourceMappingURL=manifestpeek.entityaction-D2rPmazt.js.map
