const { I } = inject();

module.exports = {
  fields: {
    searchField: "//div[@class='sc-4995aq-4 dNPmGY']//input[@class='sc-4995aq-0 sc-14oyvky-0 gHqOYK']",
    isPageTwo: "//a[@title='2. sayfa'][@aria-current='true']"
  },
  selects: {},
  buttons: {
    searchButton: "//button[@class='qjixn8-0 sc-1bydi5r-0 gaMakD']",
    secondPageButton: "//a[@title='2. sayfa']",
    chooseProduct: "//a[@title='HP 245 G8 27J57EA ryzen 3-3250U 8GB 256GB ssd 14 Windows 10 FULL HD notebook DİZÜSTÜ laptop']"
  },

  searchProduct: function () {
    //laptop arama
    I.fillField(this.fields.searchField, "laptop");
    //arama butonu
    I.click(this.buttons.searchButton);
  },

  selectPage: function () {
    //2.sayfa
    I.waitForClickable(this.buttons.secondPageButton);
    I.click(this.buttons.secondPageButton);
    //2.sayfa kontrolü
    I.seeElement(this.fields.isPageTwo);
  },

  selectProduct: function () {
    //ürün seçme
    I.click(this.buttons.chooseProduct);
  },

  // insert your locators and methods here
}
