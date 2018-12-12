const {Given, When, Then} = require('cucumber');
const navigationMenupage = require('../support/helpers/navigationMenu_helper');

Given(/^navigate to coolblue home page$/, async () => {
    await navigationMenupage.navigationMenu.url();
});

When(/^the user hover on (.*)$/, async (title_number) => {
    await navigationMenupage.navigationMenu.hoverTitle(title_number);
});

Then(/^the user can see a drowp menu$/, async () => {
    await navigationMenupage.navigationMenu.drowpMenu();
});
