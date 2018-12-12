const { ClientFunction, Selector } = require('testcafe');

function select(selector) {
  return Selector(selector).with({ boundTestRun: testController });
}

let itemText;

exports.orderItem = {
  clickOnItem: async () => {
    itemText = await select('.text-color--link').nth(0).innerText
    await testController
      .click(select('.text-color--link').nth(0));
  },

  headerText: async () => {
    await testController.expect(select('.js-product-name').withText(itemText)).ok();
  },

  drowpMenu: async function () {
    await testController.expect(Selector('.collapsible-panel--content').with({ boundTestRun: testController })).ok();
  },

  shoppingCart: async () => {
    await testController.click(select('.js-shopping-cart').nth(1))
  },

  orderDialog: async () => {
    await testController.expect(select('.js-modal-box-container')).ok();
  },

  navToCart: async () => {
    await testController.navigateTo('https://www.coolblue.nl/en/shopping-cart')
  },

  removeOrders: async () => {
    await testController.click(select('a').withText('Remove'))
  }
};


