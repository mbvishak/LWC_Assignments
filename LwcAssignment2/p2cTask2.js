import { LightningElement, track } from 'lwc';


export default class ParentComponent extends LightningElement {
    @track inputMessage = '';

    handleInputChange(event) {
        this.inputMessage = event.target.value;
    }
}

