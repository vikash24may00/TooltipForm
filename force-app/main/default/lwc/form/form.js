import { LightningElement, track } from 'lwc';
import TOOLTIP_TEXT from '@salesforce/label/c.Tooltip_Text';

export default class Form extends LightningElement {
    @track showTooltipText = false;
    tooltipText = TOOLTIP_TEXT;

    showTooltip() {
        this.showTooltipText = true;
    }

    hideTooltip() {
        this.showTooltipText = false;
    }
}
