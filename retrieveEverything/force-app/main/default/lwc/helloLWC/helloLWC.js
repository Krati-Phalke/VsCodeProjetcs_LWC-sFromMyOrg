import { LightningElement } from 'lwc';

export default class HelloLWC extends LightningElement {

        dynamicGreeting= 'hi how are you';

    greetingChange()
    {
      //this.dynamicGreeting= event.target.value;
      this.getTextValue(event);
    }
    getTextValue(event)
      {
          this.dynamicGreeting= event.target.value;
      }
}