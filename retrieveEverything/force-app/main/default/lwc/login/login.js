import { LightningElement, wire } from 'lwc';
import getOpportunity from '@salesforce/apex/OpportunityController.fetchOpportunities';
export default class Login extends LightningElement {

displayOpp;
error;

@wire(getOpportunity)
wiredOpportunities({error, data}) {

    if(data){
        this.displayOpp= data;
        console.log("data");
        this.error= undefined;
        console.log("undefined");
    } else if(error){
        this.error= error;
        this.displayOpp= undefined;
    }
}

}