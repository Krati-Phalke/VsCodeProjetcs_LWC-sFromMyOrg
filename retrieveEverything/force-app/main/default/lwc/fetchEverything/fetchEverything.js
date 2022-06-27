import { LightningElement, wire, track } from 'lwc';
import fetchAll from '@salesforce/apex/TestGeneratorCommonController.fetchAll';

export default class FetchEverything extends LightningElement {
 
 result;

@wire(fetchAll)
show({ error, data }) {

    if (data) {
        this.result = data;
        this.error = undefined;
    } else if (error) {
        this.error = error;
        this.result = undefined;
    }
}
 //@wire(fetchAll) result;

}