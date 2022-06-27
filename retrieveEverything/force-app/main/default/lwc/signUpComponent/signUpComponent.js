import { LightningElement, track } from 'lwc';
import {NavigationMixin } from 'lightning/navigation';
import EmployeeObj from '@salesforce/schema/Employee__c';
import NAME from '@salesforce/schema/Employee__c.Name';
import EMAIL from '@salesforce/schema/Employee__c.Email__c';
import PHONE from '@salesforce/schema/Employee__c.Phone_Number__c';
import USERNAME from '@salesforce/schema/Employee__c.UserName__c';
import PASSWORD from '@salesforce/schema/Employee__c.Password__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import insertEmployee from '@salesforce/apex/EmployeeController.insertEmployee';

export default class SignUpComponent extends NavigationMixin(LightningElement) {

    EmployeeObj = EmployeeObj;

    @track EmployeeObjnameField = NAME;
    @track EmployeeObjemailField= EMAIL;
    @track EmployeeObjphoneField= PHONE;
    @track EmployeeObjusernameField= USERNAME;
    @track EmployeeObjpasswordField= PASSWORD;
    //confirmPassword;

    EmployeeObj = {
        Name : this.EmployeeObjnameField,
        Email__c : this.EmployeeObjemailField,
        Phone_Number__c : this.EmployeeObjphoneField,
        UserName__c : this.EmployeeObjusernameField,
        Password__c : this.EmployeeObjpasswordField
    }

    empNameChange(event){
        this.EmployeeObj.Name = event.target.value;
        //console.log('inside name ****************'+NAME);
    }

    empEmailChange(event){
        this.EmployeeObj.Email__c = event.target.value;
        console.log('inside Email__c ****************'+EMAIL);
    }

    empPhoneChange(event){
        this.EmployeeObj.Phone_Number__c = event.target.value;
        console.log('inside Phone_Number__c ****************'+PHONE);
    }

    empUserNameChange(event){
        this.EmployeeObj.UserName__c = event.target.value;
        console.log('inside username ****************'+USERNAME);
    }

    empPasswordChange(event){
        this.EmployeeObj.Password__c = event.target.value; 
        console.log('inside password ****************'+PASSWORD); 
    }

    submitAction(){
        if(!this.NAME){
            this.dispatchEvent(
                new ShowToastEvent({
                    title:'Error',
                    message:'Please enter name',
                    variant: 'error',
                }),
            );
            return false;
        }

        insertEmployee({emp : this.EmployeeObj})
        .then(result => {
            this.message = result;
            this.error = undefined;
            if(this.message != undefined){
                this.EmployeeObj.Name = '';
                this.EmployeeObj.Email__c='';
                this.EmployeeObj.Phone_Number__c='';
                this.EmployeeObj.UserName__c='';
                this.EmployeeObj.Password__c='';
                 this.dispatchEvent(
                     new ShowToastEvent({
                        title:'Success',
                        message:'Record created',
                        variant: 'success',  
                     }),
                 );
            }
            console.log(JSON.stringify(result));
          console.log("result", this.message);
        })
        .catch(error=> {
            this.message = undefined;
            this.error = error;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
            console.log("error", JSON.stringify(this.error));
        });
    }
}

    /*Password matching & confirmation */
    //matchPassword(event){
       // this.confirmPassword = event.target.value;
        // if (confirmPassword.value != this.EmployeeObj.Password__c) { 
        //     window.alert("Your password and confirmation password do not match.");
        //     Password__c.focus();
        //     return false; 
        //  }
        /*if(this.confirmPassword != this.EmployeeObj.Password__c){
            this.dispatchEvent(
                new ShowToastEvent({
                    title:'Error',
                    message:'Password doesnt match',
                    variant: 'error',
                }),
            ); 
        }
        else{
            window.alert("Your password and confirmation password do not match.");
        }*/
    //}

//     submitAction(){
//         if(!this.Name == ''){
//             this.dispatchEvent(
//                 new ShowToastEvent({
//                     title:'Error',
//                     message:'Name is empty',
//                     variant: 'error',
//                 }),
//             );
//             //return false;
//         }
//         else
//         {
//         insertEmployee({emp : this.EmployeeObj})
//         .then(result => {
//             this.message = result;
//             this.error = undefined;
//             console.log('inside insert method ****************'+emp);
//             if(this.message != undefined){
//                 this.EmployeeObj.Name = '';
//                 this.EmployeeObj.Email__c='';
//                 this.EmployeeObj.Phone_Number__c='';
//                 this.EmployeeObj.UserName__c='';
//                 this.EmployeeObj.Password__c='';
//                 //this.EmployeeObj.Password__c == this.confirmPassword;
//                  this.dispatchEvent(
//                      new ShowToastEvent({
//                         title:'Success',
//                         message:'Record created',
//                         variant: 'success',  
//                      }),
//                  );
//             }
//             console.log(JSON.stringify(result));
//           console.log("result", this.message);
//         })
//         .catch(error=> {
//             this.message = undefined;
//             this.error = error;
//             this.dispatchEvent(
//                 new ShowToastEvent({
//                     title: 'Error creating record',
//                     message: error.body.message,
//                     variant: 'error',
//                 }),
//             );
//             console.log('inside catch error****************'+this.message);
//             console.log("error", JSON.stringify(this.error));
//         });
//         this[NavigationMixin.Navigate]({
//             type: 'standard__navItemPage',
//             attributes: {
//                apiName: 'Login_Page'
//             }
//         });
//     }
// }