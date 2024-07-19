import { UmbEntityActionBase as s } from "@umbraco-cms/backoffice/entity-action";
import { umbExtensionsRegistry as i } from "@umbraco-cms/backoffice/extension-registry";
class a extends s {
  constructor(t, e) {
    super(t, e), this._extensionRegistry = i;
  }
  async execute() {
    console.log("BOB", this.args);
    const t = this._extensionRegistry.getByAlias("Umb.Store.PartialView.Detail");
    console.log(t);
  }
}
export {
  a as ManifestPeekEntityAction,
  a as api
};
//# sourceMappingURL=manifestpeek.entityaction-BZSO3dbV.js.map
