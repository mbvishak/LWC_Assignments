import { LightningElement } from 'lwc';

export default class C2pTask3Child extends LightningElement {
    inputMessage = '';

    handleInputChange(event) {
        this.inputMessage = event.target.value;
        const customEvent = new CustomEvent('messagechange', {
            detail: { message: this.inputMessage }
        });
        this.dispatchEvent(customEvent);
    }
}
