import { LightningElement, track,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import Account_ID from '@salesforce/schema/Account.Id';
import {FlowAttributeChangeEvent,FlowNavigationNextEvent} from 'lightning/flowSupport';


export default class ContactCreation extends NavigationMixin(LightningElement) {
    @api accountId;

    handleSave(event) {
        event.preventDefault(); // Prevent default form submission
        this.template.querySelector('lightning-record-edit-form').submit(); // Submit the form

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Contact created successfully',
                variant: 'success'
            })
        );
        const gotoNext = new FlowNavigationNextEvent();
        this.dispatchEvent(gotoNext);

    }
        

}
