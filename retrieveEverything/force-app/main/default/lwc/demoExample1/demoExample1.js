import { LightningElement, track } from 'lwc';
import fetchContact from '@salesforce/apex/TestGeneratorCommonController.fetchContact';
export default class DemoExample1 extends LightningElement {

    @track responseData;
    @track error;

handleClick() { 
    fetchContact()
    .then((result) => {
         console.log('response from apex.......',result);
          this.responseData = result;
          console.log('response after assigning into other variable from apex.......',this.responseData); 
          })
          .catch((error) => {
               console.log('error response from apex.......',error);
             this.error = error;
         });
     }

}