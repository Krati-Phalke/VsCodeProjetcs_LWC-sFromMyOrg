import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountController.fetchAccounts';
export default class FetchAccount extends LightningElement {

gettingacc;
error;

  //wire to function example
    @wire(getAccount)
    wiredAccount({error, data}) {

        if(data){
            this.gettingacc= data;
            this.error= undefined;
        } else if(error){
            this.error= error;
            this.gettingacc= undefined;
        }

    }

}