import { LightningElement , wire } from 'lwc';
import { getRecord,  createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class IcciBankRegistrationPage extends LightningElement 
{
         employeeId;
        // get the newly created records
        @wire(getRecord, { recordId: '$employeeId', fields: [ 'Employee__c.Name','Employee__c.Email__c','Employee__c.Phone_Number__c','Employee__c.UserName__c','Employee__c.Password__c']})
         getemploeeDetails ({error, data}) {
             if (error) {
                console.log('error'+error);
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Toast Error',
                    message: 'Some unexpected error:'+error,
                    variant: 'Error'
                }));
             } else if (data) {
                   console.log(JSON.stringify(data));
             }
         }      

        // using @wireFunction to get the Records
        onInput(event)
            {
                    const labelname = event.target.label;
                     if(labelname=="Name")
                     {
                            this.Name = event.target.value;
                     }
                     else if (labelname=="Email")
                     {
                                this.Email = event.target.value;
                     }
                     else if (labelname=="Phone")
                     {
                                this.phone = event.target.value;
                     }
                     else if (labelname=="UserName")
                     {
                                this.UserName = event.target.value;
                     }
                     else if (labelname=="Password")
                     {
                                this.password = event.target.value;
                     }
            }

            submitAction()
            {    
                   //Storing all the field value in  field object and key should be  Field Api Name
                   const  fields=
                        {
                             Name: this.Name ,
                             Email__c : this.Email,
                             Phone_Number__c:this.phone,
                             UserName__c:this.UserName,
                             Password__c:this.password
                        }
                    //enchanced object literals
                    const recordInput =
                    {
                         apiName :'Employee__c',
                         fields
                    }

                    createRecord(recordInput)
                    .then(result=>
                        {   
                              this.employeeId = result.id;
                              // Display Successfull message
                              this.dispatchEvent(new ShowToastEvent({
                                title: 'Toast Success',
                                message: 'Record Successfully Created  Name :'+result.Name,
                                variant: 'success'
                            }));
                               console.log(JSON.stringify(result));
                               console.log('@ employeeId '+this.employeeId ); 
                        })
                    .catch(error=>
                        {
                                this.dispatchEvent(new ShowToastEvent({
                                    title: 'Toast Error',
                                    message: 'Some unexpected error:'+error,
                                    variant: 'Error'
                                }));
                        })       
            }
}