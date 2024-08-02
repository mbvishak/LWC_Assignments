import { LightningElement, api } from 'lwc';

export default class lwcAssDay5Child extends LightningElement {
    message;

    @api
    childMethod(message) {
        this.message = message;
    }
}
