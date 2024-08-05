import { LightningElement, wire, track } from 'lwc';
import searchContacts from '@salesforce/apex/ContactController.searchContacts';

export default class LwcAssD6T2 extends LightningElement {
    @track searchKey = '';
    @track contacts; // To hold the contact records
    columns = [
        { label: 'First Name', fieldName: 'FirstName', type: 'text' },
        { label: 'Last Name', fieldName: 'LastName', type: 'text' },
        { label: 'Email', fieldName: 'Email', type: 'email' }
    ];

    // Wire the searchContacts method to get contact records based on the searchKey
    @wire(searchContacts, { searchKey: '$searchKey' })
    wiredContacts(contacts) {
        this.contacts = contacts; // Store the wired data
    }

    // Handle changes in the search input
    handleSearchKeyChange(event) {
        this.searchKey = event.target.value; // Update searchKey based on input
    }
}
