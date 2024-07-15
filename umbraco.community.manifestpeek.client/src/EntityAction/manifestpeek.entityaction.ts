import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { UmbEntityActionArgs, UmbEntityActionBase } from "@umbraco-cms/backoffice/entity-action";
import { UmbBackofficeExtensionRegistry, umbExtensionsRegistry } from '@umbraco-cms/backoffice/extension-registry';

export class ManifestPeekEntityAction extends UmbEntityActionBase<never> {

    private _extensionRegistry: UmbBackofficeExtensionRegistry;

    constructor(host: UmbControllerHost, args: UmbEntityActionArgs<never>) {
        super(host, args);
        this._extensionRegistry = umbExtensionsRegistry;
    }

    async execute() {
        console.log('BOB', this.args);

        const extension = this._extensionRegistry.getByAlias('Umb.Store.PartialView.Detail');
        console.log(extension); 
        // This works as we don;t know what the manifest strongly typed object is we will need to pass this to a modal
        // And then for each property on the object list it out
        // Some could be objects so we would need to recurse

        // Could use JSON string and print that out in the modal in some <code> block or something
    }
}


export { ManifestPeekEntityAction as api };