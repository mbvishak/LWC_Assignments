import { LightningElement, api } from 'lwc';

export default class AccountModal extends LightningElement {
    @api accountDetails;

    closeModal() {
        this.dispatchEvent(new CustomEvent('close'));
    }
}
