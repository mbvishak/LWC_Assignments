import { LightningElement, api, wire, track } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

export default class GetAccountAPI extends LightningElement {
    @api recordId; // Exposed property to accept recordId

    @track account;
    @track error;

    fields = [NAME_FIELD, INDUSTRY_FIELD, RATING_FIELD];

    @wire(getRecord, { recordId: '$recordId', fields: '$fields' })
    wiredRecord({ error, data }) {
        if (data) {
            this.account = data;
            this.error = undefined;
        } else if (error) {
            this.account = undefined;
            this.error = error.body.message;
        }
    }
}
