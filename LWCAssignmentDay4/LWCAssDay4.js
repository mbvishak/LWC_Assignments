import { LightningElement, wire, api } from 'lwc';
import getContactsByAccountId from '@salesforce/apex/ContactController.getContactsByAccountId';

export default class ContactList extends LightningElement {
    @api recordId; // This will hold the Account ID
    contacts; // To hold the fetched contacts
    error; // To handle any errors

    @wire(getContactsByAccountId, { accountId: '$recordId' })
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }

    // Define columns for the lightning datatable
    columns = [
        { label: 'Contact Name', fieldName: 'Name', type: 'text' },
        { label: 'Title', fieldName: 'Title', type: 'text' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        { label: 'Contact Owner', fieldName: 'Owner.Name', type: 'text' },
    ];
}
