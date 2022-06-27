import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationMixinTask extends NavigationMixin(LightningElement) {

    @api recordId;

    navigateToList() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        });
    }

    //Navigate to web browser
    navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://www.google.com/"
            }
        });
    }
    
     // Navigation to Employee related list of Account
    navigateToEmployeeRelatedList() {
        console.log('****inside list view');
         this[NavigationMixin.Navigate]({
             type: 'standard__recordRelationshipPage',
              attributes: {
                 recordId: this.recordId,
                 objectApiName: 'Account',
                 relationshipApiName: 'Employees',
                 actionName: 'view'
                 },
             });
         }
}