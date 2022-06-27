import { api, LightningElement } from 'lwc';

export default class ChildCmp extends LightningElement {

    //@api student
    @api getValueFromParent;
}