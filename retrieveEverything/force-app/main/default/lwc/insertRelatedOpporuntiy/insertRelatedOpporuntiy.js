import { LightningElement, track, wire } from 'lwc';
import fetchAccountsWithID from '@salesforce/apex/AccountController.fetchAccountsWithID';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import NAME from '@salesforce/schema/Opportunity.Name';
import ACCOUNTID from '@salesforce/schema/Opportunity.AccountId';
import CLOSE_DATE from '@salesforce/schema/Opportunity.CloseDate';
import STAGE from '@salesforce/schema/Opportunity.StageName';

export default class InsertRelatedOpporuntiy extends LightningElement {

   /** @track findAcc = [];
    @track l_All_Types = [];
    searchKey;*/

    /**
 * Creates Account records.
 */
    opportunityObject = OPPORTUNITY_OBJECT;
    showfeilds = [NAME, ACCOUNTID, CLOSE_DATE, STAGE];

    @wire(fetchAccountsWithID, {})
    show({ error, data }) {
  
        if (data) {
            try {
                this.l_All_Types = data; 
                let options = [];
                 
                for (var key in data) {
                    options.push({ label: data[key].Name, value: data[key].Id  });  
                }
                this.findAcc = options;
                 
            } catch (error) {
                console.error('check error here', error);
            }
        } else if (error) {
            console.error('check error here', error);
        }
    }

    handleTypeChange(event){
        this.searchKey = event.target.value; 
        console.log('seearchkey**************'+this.searchKey);
          // Do Something.
      }

      handleSearch(){

      }

      /**andleLoad() {
        fetchAccountsWithID()
            .then(result => {
                this.findAcc = result;
            })
            .catch(error => {
                this.error = error;
            });
    }*/
}