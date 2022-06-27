import { LightningElement } from 'lwc';
import findOpp from '@salesforce/apex/OpportunityController.searchOpportunity';
export default class SearchOpportunities extends LightningElement {

    searchKey;
    fetchOpp;
    error;

    handleKeySearch(event){
        this.searchKey= event.target.value;
    }

    handleSearch(){
        findOpp({key : this.searchKey})
        .then((result) => {
            this.fetchOpp = result;
            this.error = undefined;
        })
        .catch((error) =>{
            this.error = error;
            this.fetchOpp= undefined;
        })
    }
}