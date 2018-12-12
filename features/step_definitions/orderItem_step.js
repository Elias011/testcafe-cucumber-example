const {Given, When, Then, T} = require('cucumber');
const orderItemPage = require('../support/helpers/orderItem_helper');

When(/^the user click on item$/, async ()=>{
  await orderItemPage.orderItem.clickOnItem();
});

When(/^the user add item in the cart$/, async () => {
  await orderItemPage.orderItem.clickOnItem();
  await orderItemPage.orderItem.shoppingCart();
})

Then(/^the user should navigate to item page$/, async ()=>{
  await orderItemPage.orderItem.headerText();
})

Then(/^the user add the item to the shopping cart$/, async ()=> {
  await orderItemPage.orderItem.shoppingCart();
})

Then(/^the user should see a modle dialog$/, async () => {
  await orderItemPage.orderItem.orderDialog();
})

Then(/^the user navigate to the shopping cart page$/, async () => {
  await orderItemPage.orderItem.navToCart()
})

Then (/^the user should be able to remove the item from the cart$/, async () => {
  await orderItemPage.orderItem.removeOrders()
})