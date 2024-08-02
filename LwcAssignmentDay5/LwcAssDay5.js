import { LightningElement } from 'lwc';

export default class LwcAssDay5 extends LightningElement {
    messageToSend = 'Hello from parent component!';

    callChildMethod() {
        const childComponent = this.template.querySelector('c-lwc-ass-day5-child');
        if (childComponent) {
            const result = childComponent.childMethod(this.messageToSend);
            console.log(result); // Optional: Process the result from the child method
        }
    }
}
