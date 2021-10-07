const login = require("../pages/login");

Feature('sepetIslem');

Scenario('test something', async ({ I, loginPage,searchPage,cartPage }) => {
    
    loginPage.homePage();
    await loginPage.closeCookies();
    
    searchPage.searchProduct();
    searchPage.selectPage();
    searchPage.selectProduct();

    cartPage.addCart();
    cartPage.myCart();
    cartPage.addAmount();
    cartPage.deleteProduct();

    loginPage.backToHomePage();

});
