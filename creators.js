const params = new URL(window.location.href).searchParams;

const creatorName = params.get("utm_content");

const creatorCode = params.get("utm_term");

if (creatorCode === "CC-TI") {
    document.getElementById("creatorPromoText").innerText = "GET $150 TOWARDS YOUR FIRST CLEANING!";
    document.getElementById("creatorPromoText").style.fontFamily = "'Montserrat', sans-serif";
document.getElementById("creatorPromoText").style.color = "#fff";
document.getElementById("creatorPromoText").style.textAlign = "center";
document.getElementById("creatorPromoText").style.lineHeight = "0.9";
document.getElementById("creatorPromoText").style.letterSpacing = "-1.6px";
document.getElementById("creatorPromoText").style.margin = "0 20px 10px 20px";
document.getElementById("creatorPromoText").style.fontSize = "42px";

document.getElementById("promoText").innerText = "ENJOY $150 TOWARDS YOUR FIRST CLEANING WITH US!";
    document.getElementById("promoText").style.fontFamily = "'Montserrat', sans-serif";
document.getElementById("promoText").style.color = "#fff";
document.getElementById("promoText").style.textAlign = "center";
document.getElementById("promoText").style.lineHeight = "0.9";
document.getElementById("promoText").style.letterSpacing = "-1.2px";
document.getElementById("promoText").style.margin = "0 20px 10px 20px";
document.getElementById("promoText").style.fontSize = "26px";

}


if (creatorName) {
    const element = document.getElementById("creatorHeroText");
    const promoElement = document.getElementById("creatorPromoText");
    const leadForm = document.forms['hsForm_6b024fea-ea28-4eff-b75a-16f82c0a5c57'];
    const promoField = leadForm.elements.promo_code__coconut_;
    
    element.innerText = creatorName.toUpperCase() + "-APPROVED CLEANING:";
    
    element.style.fontFamily = "'Mont-Heavy-Full', sans-serif";
    element.style.color = "#fff";
    element.style.textAlign = "center";
    element.style.lineHeight = "0.9";
    element.style.letterSpacing = "-1px";
    element.style.marginBottom = "0";
    element.style.fontSize = "60px";
    
    promoField.value = creatorCode;
    


} else {
    document.getElementById("creatorHeroText").innerText = "INFLUENCER-APPROVED CLEANING:";
    console.log('no tracking link found');
}
