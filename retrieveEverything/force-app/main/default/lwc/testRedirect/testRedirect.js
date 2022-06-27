import { LightningElement } from 'lwc';
import {fetchURLBasedOnKey} from 'c/commonUtils';

export default class TestRedirect extends LightningElement {
    handleSearch(){
        let myurl = fetchURLBasedOnKey('youtube');
        window.location.href=myurl;
       // window.location.href= 'https://www.youtube.com/';
        console.log('**********url *****' +see);
    }

}