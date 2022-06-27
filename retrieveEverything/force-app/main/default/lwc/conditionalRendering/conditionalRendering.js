import { LightningElement } from 'lwc';
import CASE_OBJECT from '@salesforce/schema/Case';

export default class ConditionalRendering extends LightningElement {

    caseObject = CASE_OBJECT;
}