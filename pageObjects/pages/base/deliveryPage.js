import { config } from '../../../wdio.conf';

const deliveryPage = {
  // page elements
  availableSlots: '.available-slot--button',
  slotContextCard: '.slot-context-card--details',

  // methods
  open: () => {
    return browser.url('/slots/delivery');
  }
};

deliveryPage.bookFirstAvailableSlot = () => {
  //console.log(deliveryPage.availableSlots);
  var selectedSlot =  browser.elements(deliveryPage.availableSlots);
  return browser.elementIdClick(selectedSlot.value[0].ELEMENT);
};


export default deliveryPage;
