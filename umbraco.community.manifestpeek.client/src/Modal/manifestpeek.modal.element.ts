import { css, customElement, html } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement, UmbModalRejectReason } from "@umbraco-cms/backoffice/modal";
import { ManifestPeekModalData, ManifestPeekModalValue } from "./manifestpeek.modal.token";

@customElement('manifest-peek-modal')
export class ManifestPeekModalElement extends UmbModalBaseElement<ManifestPeekModalData, ManifestPeekModalValue>
{

    constructor() {
        super();
        
        console.log('data', this.data);
    }

    private handleClose() {
        this.modalContext?.reject({ type: "close" } as UmbModalRejectReason);
    }
    
    render() {
        return html`
            <umb-body-layout headline="View Manifest">
                <uui-box>
                    <umb-code-block language="JSON" copy>${this.data?.manifestJson}</umb-code-block>
                </uui-box>
                
                <div slot="actions">
                    <uui-button id="close" label="Close" @click="${this.handleClose}">Close</uui-button>
                </div>
            </umb-body-layout>
        `;
    }
    
    static styles = css`
        uui-box {
            height:100%;
        }
    `;
}

export default ManifestPeekModalElement;