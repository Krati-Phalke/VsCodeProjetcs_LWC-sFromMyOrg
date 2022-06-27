import { LightningElement, track } from 'lwc';
import EMPLOYEE_OBJECT from '@salesforce/schema/Employee__c';
import Father_name__c from '@salesforce/schema/Employee__c.Father_name__c';
import Marital_Status__c from '@salesforce/schema/Employee__c.Marital_Status__c';
import Permanent_Address__c from '@salesforce/schema/Employee__c.Permanent_Address__c';
export default class LwcAssignment1 extends LightningElement {

   /* employeeObject = EMPLOYEE_OBJECT;
    @track fatherName = Father_name__c;
    @track maritalStatus = Marital_Status__c;
    @track addressField = Permanent_Address__c;*/
    @track fatherName;
    @track maritalStatus;
    @track addressField;
    @track mothername;
    @track brother;

   /* myFields = [Father_name__c, Marital_Status__c, Permanent_Address__c, Higher_Secondary__c, High_School__c,
                Gender__c, Graduation__c, Graduation_Score__c, Post_Graduation__c];*/


    handleChange(event){
        //this.brother = event.target.value;
        this.fatherName = event.target.value;
    }
    handleChange1(event){
        //this.brother = event.target.value;
        this.maritalStatus = event.target.value;
    }
    handleChange2(event){
        //this.brother = event.target.value;
        this.addressField = event.target.value;
    }
    // handleSuccess(event){
    //     console.log('onsuccess event recordEditForm',event.detail.id);
    //     console.log('print father name******************',fatherName);

    //     this.fatherName = event.target.value;

    // }

    handleSubmit(event){
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
}