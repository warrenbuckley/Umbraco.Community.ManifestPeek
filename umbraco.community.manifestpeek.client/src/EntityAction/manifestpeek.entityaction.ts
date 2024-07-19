import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { UmbEntityActionArgs, UmbEntityActionBase } from "@umbraco-cms/backoffice/entity-action";
import { UmbBackofficeExtensionRegistry, umbExtensionsRegistry } from '@umbraco-cms/backoffice/extension-registry';
import { UMB_CODE_EDITOR_MODAL, UMB_MODAL_MANAGER_CONTEXT, UmbModalManagerContext } from "@umbraco-cms/backoffice/modal";

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
        console.log('args', this.args);

        const extension = this._extensionRegistry.getByAlias(this.args.unique ?? '');
        console.log('extension', extension); 

        const modal = this._modalManagerContext?.open(this, UMB_CODE_EDITOR_MODAL, {
            data: {
               content: JSON.stringify(extension, null, 4),
               headline: 'view Extension Manifest',
               language: 'json'
            }
        });

        // This works as we don;t know what the manifest strongly typed object is we will need to pass this to a modal
        // And then for each property on the object list it out
        // Some could be objects so we would need to recurse

        // Could use JSON string and print that out in the modal in some <code> block or something
    }
}


export { ManifestPeekEntityAction as api };