import { LightningElement, api ,track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import {FlowAttributeChangeEvent,FlowNavigationNextEvent} from 'lightning/flowSupport';

export default class AccountUpdate extends NavigationMixin(LightningElement) {
    @api accountId;
    handleSave(event) {
        event.preventDefault(); // Prevent default form submission
        this.template.querySelector('lightning-record-edit-form').submit(); // Submit the form

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Account information updated successfully',
                variant: 'success'
            })
        );
        const gotoNext = new FlowNavigationNextEvent();

        this.dispatchEvent(gotoNext);
       /* // Navigate to Contact Record Creation screen
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                //componentName: 'c__contactCreationFlow'
                url: '/flow/Test_Flow'
            }
        });*/
    }
}
