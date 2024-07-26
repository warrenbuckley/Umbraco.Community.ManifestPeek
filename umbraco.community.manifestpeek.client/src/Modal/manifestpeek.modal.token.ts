import { UmbModalToken } from "@umbraco-cms/backoffice/modal";
export interface ManifestPeekModalData {
    manifestJson: any;
}

export interface ManifestPeekModalValue {
}

export const MANIFEST_PEEK_MODAL = new UmbModalToken<ManifestPeekModalData, ManifestPeekModalValue>('Umb.Community.ManifestPeek.Modal', {
    modal: {
        type: "sidebar",
        size: "medium" // full, large, medium, small
    }
});