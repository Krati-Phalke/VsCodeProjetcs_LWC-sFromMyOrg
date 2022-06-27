import { LightningElement } from 'lwc';
import {fetchURLBasedOnKey} from 'c/commonUtils';

export default class OtherLWC extends LightningElement {

    handleSearch(){
        let myurl = fetchURLBasedOnKey('youtube');
        //window.location.href=myurl;
        window.location.href= myurl;
        console.log('**********url *****' +see);
    }
}