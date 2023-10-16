const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

let myClass = document.getElementsByTagName("a");

for (let i = 0; i < myClass.length; i++) {
  myClass[i].className = "italic";
}
const contentArr = [];
for (let content in siteContent.nav) {
  contentArr.push(siteContent.nav[content]);
}

for (let i = 0; i < myClass.length; i++) {
  myClass[i].textContent = contentArr[i];
}

const headerImg = document.getElementById("logo-img");
headerImg.src = siteContent.images["logo-img"];

let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;

let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent.images["cta-img"];

let textContentH4 = document.querySelectorAll(".text-content h4");

let h4Icerik = [];
for (let h4 in siteContent["ana-içerik"]) {
  if (h4.includes("h4")) {
    h4Icerik.push(siteContent["ana-içerik"][h4]);
  }
}
for (let i = 0; i < textContentH4.length; i++) {
  textContentH4[i].textContent = h4Icerik[i];
}

let textContentP = document.querySelectorAll(".text-content p");

let pIcerik = [];
for (let p in siteContent["ana-içerik"]) {
  if (p.includes("içeri")) {
    pIcerik.push(siteContent["ana-içerik"][p]);
  }
}
for (let i = 0; i < textContentH4.length; i++) {
  textContentP[i].textContent = pIcerik[i];
}

let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent.images["accent-img"];

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent.iletisim["iletişim-h4"];

const contactP = document.querySelectorAll(".contact p");

let pContact = [];
for (let p in siteContent.iletisim) {
  pContact.push(siteContent.iletisim[p]);
}
pContact.shift();
for (let i = 0; i < pContact.length; i++) {
  contactP[i].textContent = pContact[i];
}

const copyright = document.querySelector("footer a");
copyright.textContent = siteContent.footer.copyright;
copyright.className = "bold";
