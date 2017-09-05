import { config } from '../../../wdio.conf';

let deliveryPage = {
  // page elements
  availableSlots: '.available-slot--button',
  //slotContextCard: '.slot-context-card--details',

  // methods
  open: () => {
    return browser.url('/slots/delivery');
  }
};

deliveryPage.bookFirstAvailableSlot = () => {
  //console.log(deliveryPage.availableSlots);
  browser.scroll('#slot-matrix');
  var selectedSlot =  browser.elements(deliveryPage.availableSlots);
  return browser.elementIdClick(selectedSlot.value[0].ELEMENT);
};

// desktop viewport
if (process.env.VIEWPORT === 'desktop') {

deliveryPage = Object.assign({}, deliveryPage, {
    slotContextCard: '.slot-context-card--details'
});


}
else {
  //const deliveryPage = deliveryPageBase;
}

export default deliveryPage;
