import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    @track resourceUrl; // Track the resource URL

    handleResourceUrlChange(event) {
        this.resourceUrl = event.detail.url; // Update the resource URL based on the event detail
    }
}
