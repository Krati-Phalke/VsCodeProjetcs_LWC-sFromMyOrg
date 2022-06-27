import { LightningElement, api, wire, track} from 'lwc';
import CURRENTUSERID from '@salesforce/user/Id';
//import fetchURL from '@salesforce/apex/FetchCurrentURL.fetchURL';
import fetchBaseURL from '@salesforce/apex/FetchCurrentURL.fetchBaseURL';

export default class FetchRecordId extends LightningElement {

    @api recordId;
    @api objectApiName;
    @track link;
    

    @track hlink;

    @wire(fetchBaseURL) 
    wiredAccounts({ error, data }) {
         if (data) {
              //console.log(data);
              this.link = data;
              console.log(data);
          } else if (error) {
             console.log(error);
              this.error = error;
          }
        }

    handleString(evt){
        console.log('test***********************'+this.link);
        this.hlink = this.link +"/" +this.objectApiName+"/"+this.recordId;
        console.log('8888888888888888888888888'+this.hlink);
    }
    
}

    //@track link;
    //@track error;
    //@wire(fetchURL)
    //wiredAccounts({ error, data }) {
      //  if (data) {
        //    console.log(data);
        //    this.link = data;
        //    console.log(data);
       // } else if (error) {
        //    console.log(error);
        //    this.error = error;
       // }

    //userID = CURRENTUSERID;
    //let urlString = window.location.href;
    //let baseURL = urlString.substring(0, urlString.indexOf(“/s”));
    //Console.log(baseURL);

    
    //console.log('This is the URL'+urllist);