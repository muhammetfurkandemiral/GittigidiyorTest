const { I } = inject();

module.exports = {
  fields: {},
  selects: {},
  buttons: {
    closeCookieBtn: "//a[@class='tyj39b-5 lfsBU']",
    homePageLogo:"//a[@class='logo_gg imglink logo-small']"
  },

  homePage: function () {
    //siteye giriş
    I.amOnPage('https://www.gittigidiyor.com/');
  },
  backToHomePage: function () {
    //anasayfaya geri dönme
    I.waitForClickable(this.buttons.homePageLogo);
    I.click(this.buttons.homePageLogo);
  },

  closeCookies: async function () {
    //cookies popup sayısı alma
    let isCookiesEnabled = await I.grabNumberOfVisibleElements(this.buttons.closeCookieBtn);
    if (isCookiesEnabled != 0) {
      //çerezler popup kapatma
      I.click(this.buttons.closeCookieBtn);
    }

  }
  // insert your locators and methods here
}
