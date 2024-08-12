import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

export default class CreateAccountAPI extends LightningElement {
    @track accountName = '';
    @track accountRating = '';
    @track successMessage = '';
    @track errorMessage = '';

    // Options for the Rating combobox
    get ratingOptions() {
        return [
            { label: 'Hot', value: 'Hot' },
            { label: 'Warm', value: 'Warm' },
            { label: 'Cold', value: 'Cold' },
        ];
    }

    handleNameChange(event) {
        this.accountName = event.target.value;
    }

    handleRatingChange(event) {
        this.accountRating = event.target.value;
    }

    createAccount() {
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.accountName;
        fields[RATING_FIELD.fieldApiName] = this.accountRating;

        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };

        createRecord(recordInput)
            .then((account) => {
                this.successMessage = `Account created successfully: ${account.id}`;
                this.errorMessage = '';
                // Clear the input fields
                this.accountName = '';
                this.accountRating = '';
            })
            .catch((error) => {
                this.errorMessage = error.body.message;
                this.successMessage = '';
            });
    }
}
