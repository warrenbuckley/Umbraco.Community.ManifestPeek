import { ManifestEntityAction } from "@umbraco-cms/backoffice/extension-registry";

export const manifest: Array<ManifestEntityAction> = [
	{
		type: 'entityAction',
        kind: 'default',
		alias: 'Umb.Community.ManifestPeek.EntityAction',
		name: 'Umbraco Community ManifestPeek EntityAction',
		api: () => import('./manifestpeek.entityaction'),
		forEntityTypes: ['extension'],
        weight: 1000,
		meta: {
			label: 'View Manifest',
            icon: 'icon-code'
		},
	},
];