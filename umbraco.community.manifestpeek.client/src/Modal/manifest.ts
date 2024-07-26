import { ManifestModal } from "@umbraco-cms/backoffice/extension-registry";

export const manifest: Array<ManifestModal> = [
	{
		type: 'modal',
		alias: 'Umb.Community.ManifestPeek.Modal',
		name: 'Umbraco Community ManifestPeek Modal',
		js: () => import('./manifestpeek.modal.element')
	},
];