import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class AccountList extends LightningElement {
    @track accounts = [];
    @track isModalOpen = false;
    @track selectedAccount = {};

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
        } else if (error) {
            console.error('Error fetching accounts:', error);
        }
    }

    handleShowClick(event) {
        const accountId = event.target.dataset.id;
        this.selectedAccount = this.accounts.find(account => account.Id === accountId);
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }
}
