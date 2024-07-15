import { ManifestEntityAction } from "@umbraco-cms/backoffice/extension-registry";

export const manifest: Array<ManifestEntityAction> = [
	{
		type: 'entityAction',
        kind: 'default',
		alias: 'warren',
		name: 'WARREN',
		api: () => import('./manifestpeek.entityaction.js'),
		forEntityTypes: ['extension'],
        weight: 1000,
		meta: {
			label: 'AB Manifest',
            icon: 'icon-code'
		},
	},
];