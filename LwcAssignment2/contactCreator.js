import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class contactCreator extends LightningElement {
    @track accounts = [];
    @track selectedAccountId;

    connectedCallback() {
        this.fetchAccounts();
    }

    fetchAccounts() {
        getAccounts()
            .then(result => {
                this.accounts = result.map(account => ({
                    label: account.Name,
                    value: account.Id
                }));
            })
            .catch(error => {
                this.showToast('Error', error.body.message, 'error');
            });
    }

    handleAccountChange(event) {
        this.selectedAccountId = event.detail.value;
    }

    handleSaveSuccess(event) {
        this.showToast('Success', 'Contact created', 'success');
        this.clearForm();
    }

    clearForm() {
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
        this.selectedAccountId = null;
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(event);
    }
}
