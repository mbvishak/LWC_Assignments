import { LightningElement, track,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import {FlowAttributeChangeEvent,FlowNavigationFinishEvent} from 'lightning/flowSupport';



export default class OpportunityCreation extends NavigationMixin(LightningElement) {
    @api accountId = '';

    handleSave(event) {
        event.preventDefault(); // Prevent default form submission
        this.template.querySelector('lightning-record-edit-form').submit(); // Submit the form
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Oppoetunity created successfully',
                variant: 'success'
            })
        );    
        const gotoNext = new FlowNavigationFinishEvent();

        this.dispatchEvent(gotoNext);      
    }
}
