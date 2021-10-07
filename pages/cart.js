const { I } = inject();

module.exports = {
  fields: {
    isAmountTwo:"//select[@class='amount'][@value='2']",
    isCartEmpty:'Sepetinizde ürün bulunmamaktadır.',
  },
  selects: {},
  buttons: {
    addCartButton:"//button[@id='add-to-basket']",
    myCartButton:"//div[@class='gg-d-10 pl0']",
    addAmountButton:"//select[@class='amount']",
    deleteProductButton:"//div[@class='gg-d-24 hidden-m update-buttons-container']//a[@class='btn-delete btn-update-item']",
  },

  addCart: function () {
    //sepete ekleme
    I.waitForClickable(this.buttons.addCartButton);
    I.click(this.buttons.addCartButton);
  },
  myCart: function () {
    //sepete gitme
    I.waitForClickable(this.buttons.myCartButton);
    I.click(this.buttons.myCartButton);
  },
  addAmount: function () {
    //ürün adedini 2 yapma    
    I.selectOption(this.buttons.addAmountButton, '2');
    //2 ürün olduğunu kontrol etme
    I.seeElement(this.fields.isAmountTwo);
  },
  deleteProduct: function () {
    //sepetten ürünü silme
    I.waitForClickable(this.buttons.deleteProductButton);
    I.click(this.buttons.deleteProductButton);
    //sepetin boş olduğunu kontrol etme
    I.wait(3);
    I.see(this.fields.isCartEmpty);
  },
  // insert your locators and methods here
}
