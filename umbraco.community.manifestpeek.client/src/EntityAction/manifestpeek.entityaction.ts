import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { UmbEntityActionArgs, UmbEntityActionBase } from "@umbraco-cms/backoffice/entity-action";
import { UmbBackofficeExtensionRegistry, umbExtensionsRegistry } from '@umbraco-cms/backoffice/extension-registry';
import { UMB_MODAL_MANAGER_CONTEXT, UmbModalManagerContext } from "@umbraco-cms/backoffice/modal";
import { MANIFEST_PEEK_MODAL } from "../Modal/manifestpeek.modal.token";

export class ManifestPeekEntityAction extends UmbEntityActionBase<never> {

    private _extensionRegistry: UmbBackofficeExtensionRegistry;
    
    private _modalManagerContext?: UmbModalManagerContext;

    constructor(host: UmbControllerHost, args: UmbEntityActionArgs<never>) {
        super(host, args);
        this._extensionRegistry = umbExtensionsRegistry;
        
        // Fetch/consume the contexts & assign to the private fields
        this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (instance) => {
            this._modalManagerContext = instance;
        });
    }

    async execute() {
        const extension = this._extensionRegistry.getByAlias(this.args.unique ?? '');
        const extensionJsonString = JSON.stringify(extension, null, 4);
        this._modalManagerContext?.open(this, MANIFEST_PEEK_MODAL, { data: { manifestJson: extensionJsonString }});
    }
}


export { ManifestPeekEntityAction as api };