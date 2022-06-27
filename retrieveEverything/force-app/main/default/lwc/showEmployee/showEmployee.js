import { LightningElement } from 'lwc';
import showEmp from '@salesforce/apex/EmployeeController.fetchEmployee';
import { NavigationMixin } from 'lightning/navigation';
export default class ShowEmployee extends NavigationMixin(LightningElement) {

    searchKey;
    findEmp;
    error;
    recordPageUrl;

    handleKeySearch(event){
        this.searchKey= event.target.value;
    }

    handleSearch(){
        showEmp({key : this.searchKey})
        .then((result) => {
            console.log('Result****************'+result);
            this.findEmp = result;
            this.error = undefined;
        })
        .catch((error) =>{
            this.error = error;
            this.findEmp= undefined;
        })
    }
    connectedCallback() {
        //1. Generate a URL to a User record page
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '005B0000001ptf1IAE',
                actionName: 'view',
            },
        }).then(url => {
                //2. Assign it to the prop
            this.recordPageUrl = "https://www.google.co.in/" ;
        });
    }
}