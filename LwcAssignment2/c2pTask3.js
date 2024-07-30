import { LightningElement, track } from 'lwc';

export default class C2pTask3 extends LightningElement {

    @track childMessage = '';

    handleMessageChange(event) {
        this.childMessage = event.detail.message;
    }
}
