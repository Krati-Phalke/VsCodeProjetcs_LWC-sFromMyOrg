import { LightningElement, api } from 'lwc';
//import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class FileUpload extends LightningElement {
    @api recordId;
    get acceptedFormats() {
        return ['.pdf', '.png','.jpg','.jpeg'];
    }
    handleUploadFinished(event) {
        // Get the list of uploaded files
        const uploadedFiles = event.detail.files;
        alert("No. of files uploaded : " + uploadedFiles.length);
        
    }
}