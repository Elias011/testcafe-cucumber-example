const {Selector} = require('testcafe');


function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.navigationMenu = {
    url: async function() {
        await testController.navigateTo('https://www.coolblue.nl/en');
    },
    hoverTitle: async function(title_number) {
        console.log(title_number)
        await testController.hover(select('.collapsible-panel--header-text1').nth(Number(title_number)))
    },
    drowpMenu: async function() {
        await testController.expect(Selector('.collapsible-panel--content').with({boundTestRun: testController})).ok();
    },
};


