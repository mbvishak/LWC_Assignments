import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    handleButtonClick(event) {
        var resourceUrl = '';
        if(event.target.label === 'Absyz'){
            resourceUrl='absyz.com';
        }
        else if(event.target.label === 'Trailhead' ){
            resourceUrl='trailhead.com';

        } // Get the URL from the button's data attribute
        
        // Create a custom event with the resource URL
        const resourceUrlEvent = new CustomEvent('resourceurlchange', {
            detail: { url: resourceUrl }
        });
        
        // Dispatch the event to the parent component
        this.dispatchEvent(resourceUrlEvent);
    }
}
