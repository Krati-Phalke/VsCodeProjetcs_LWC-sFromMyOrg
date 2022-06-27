import { LightningElement, track } from 'lwc';

export default class StudentFormChild extends LightningElement {

    name;
    //@track id;

    handleSubmit(event){
        this.name =event.target.value; 

    //create event
    const searchname = new CustomEvent("fetchName", {
        detail: this.name
      });
  
      //Dispatch the event
      this.dispatchEvent(searchname);
    }

    /*handleSubmit(){
        this.name = 'Krishna Murti';
        this.id = 101;
    }*/
}