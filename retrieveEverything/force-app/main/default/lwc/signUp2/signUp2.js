import { LightningElement, track } from 'lwc';
import EmployeeObj from '@salesforce/schema/Employee__c';
import NAME from '@salesforce/schema/Employee__c.Name';

export default class SignUp2 extends LightningElement {

    EmployeeObj = EmployeeObj;
    @track EmployeeObjnameField = NAME;

    EmployeeObj = {
        Name : this.EmployeeObjnameField
    }
    
    empNameChange(event){
        this.EmployeeObj.Name = event.target.value;
        console.log('inside name ****************'+NAME);
    }
}