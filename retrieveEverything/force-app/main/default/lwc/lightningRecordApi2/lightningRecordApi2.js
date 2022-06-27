import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const FIELDS = ['Account.Name', 'Account.Phone', 'Account.Industry'];

export default class LightningRecordApi2 extends LightningElement {

    @api recordId;
    account;
    name;
    phone;
    industry;
    @wire(getRecord, { recordId: '$recordId', fields:FIELDS })
    wiredRecord({error, data}){
        if (error) {
            let message = 'Unknown error';
            if (Array.isArray(error.body)) {
                message = error.body.map(e => e.message).join(', ');
            } else if (typeof error.body.message === 'string') {
                message = error.body.message;
            }
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading account',
                    message,
                    variant: 'error',
                }),
            );
         } else if (data) {
            console.log('inside data************* '+JSON.stringify(data));
            this.account = data;
            this.name = this.account.fields.Name.value;
            this.phone = this.account.fields.Phone.value;
            this.industry = this.account.fields.Industry.value;
         }
    }
}