import { LightningElement } from 'lwc';

export default class ConditionalRenderingIF extends LightningElement {

    showDiv = false;

    showDivHandler(event)
    {
      this.showDiv= event.target.checked;
    }
}