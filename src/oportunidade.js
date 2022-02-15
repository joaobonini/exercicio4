import { LightningElement,api } from "lwc";

export default class Oportunidade extends LightningElement {
    @api nome;
    @api nconta;
    @api valor;
    @api dfecha;
}