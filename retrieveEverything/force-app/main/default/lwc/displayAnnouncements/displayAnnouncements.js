import { LightningElement,track,wire } from 'lwc';
import getAnnos from '@salesforce/apex/ShowAnnouncements.getAnnos';
export default class DisplayAnnouncements extends LightningElement {
    @track columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Created Date', fieldName: 'Created_Date__c'},
        { label: 'Description', fieldName: 'Description__c'},
        { label: 'URL', fieldName: 'URL_Link__c', type:'url'}
    ];
    @track announcementList;

    @wire (getAnnos) wiredAccounts({data,error}){
        if (data) {
             this.announcementList = data;
        console.log(data); 
        } else if (error) {
        console.log(error);
        }
   }

}