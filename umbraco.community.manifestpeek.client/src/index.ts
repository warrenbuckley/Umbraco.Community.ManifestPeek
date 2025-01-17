import { UmbEntryPointOnInit } from '@umbraco-cms/backoffice/extension-api';
import { manifest as entityActionManifests } from './EntityAction/manifest';
import { manifest as modalManifests } from './Modal/manifest';

export const onInit: UmbEntryPointOnInit = (_host, _extensionRegistry) => {

    console.log('Hello from Umbraco.Community.ManifestPeek');

    // We can register many manifests at once via code 
    // as opposed to a long umbraco-package.json file
    _extensionRegistry.registerMany([
        ...entityActionManifests,
        ...modalManifests
    ]);
};
