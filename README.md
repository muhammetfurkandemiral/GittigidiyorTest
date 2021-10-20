# Gittigidiyor Test
> Codeceptjs kullanılmıştır.
> 
> Page object pattern prensiplerine bağlı, kolay güncellenebilir kod denemesi.
>
>Çalışma videosu: 


https://user-images.githubusercontent.com/37184598/138091061-37e5482f-dd84-460d-aad4-b30c26e1e3ba.mp4


## Test Senaryosu

-Gittigidiyor anasayfasına giriş yap.

-Laptop araması yap.

-İkinci sayfaya git.

-İkinci sayfada olduğunu kontrol et.

-Rastgele bir ürünü sepete ekle.

-Sepete git.

-Ürün adetini iki yap.

-Ürün adetinin iki olduğunu kontrol et.

-Ürünü sepetten sil.

-Gittigidiyor anasayfasına dön.


## Sayfalar

**Login Page**

-*homePage* : Anasayfaya giriş

-*backToHomePage* : Sepetten anaysayfaya dönüş

-*closeCookies* : Çerezler uyarısı kapatma


**Search Page**

-*searchProduct* : Laptop araması yapma

-*selectPage* : İkinci sayfayı seçme

-*selectProduct* : Rastgele ürün seçme


**Cart Page**

-*addCart* : Ürünü sepete ekleme

-*myCart* : Sepete gitme

-*addAmount* : Sepetteki ürün adeti artırma

-*deleteProduct* : Sepetteki ürünleri silme

