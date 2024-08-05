import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class LwcAssD6T2 extends LightningElement {
    @wire(getContactList) contacts;
}
