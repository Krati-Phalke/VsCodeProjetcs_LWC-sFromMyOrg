import { LightningElement, wire, track } from 'lwc';
import searchLeadsFxn from '@salesforce/apex/LeadSearchController.searchLeadsFxn';
export default class SearchLead extends LightningElement {
    @track searchKey= '';
    @track leads;
    @track columns=[
        {label: 'Id', fieldName:'Id', type: 'text'},
        {label: 'FirstName', fieldName:'FirstName', type: 'text'},
        {label: 'LastName', fieldName:'LastName', type: 'text'},
        { label: 'MobilePhone', fieldName:'MobilePhone', type: 'number' },
        {label: 'Last Modified', fieldName: 'Last_Modified_Status_Date__c', type:'Date'},
        {label: 'Email', fieldName:'Email', type: 'text'}
    ];
    handleKeySearch(event){
        this.searchKey = event.target.value;
    }
    getSearchResult() {  
        searchLeadsFxn({ searchKey: this.searchKey })
        .then((result) => {
            if(result.length === 0){
                this.error = '-----------No Record Found----------';
                this.leads = '';
            }else{
                this.leads = result;
                this.error = '';
            }     
        })
        .catch((error) => {
            console.log('error',error);
            this.error = error;
            this.leads = undefined;
        });
    }
}