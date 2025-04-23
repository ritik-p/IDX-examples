const params = new URL(window.location.href).searchParams; //grab UTM link

const creatorName = params.get("utm_content"); //grab and set name variable

const creatorCode = params.get("utm_term"); //grab and set promo code

if (creatorCode === "CC-TI") { //check for promo code CC-TI, this creator has exclusive promotion
    document.getElementById("creatorPromoText").innerText = "GET $150 TOWARDS YOUR FIRST CLEANING!"; //set exclusive promo copy
    document.getElementById("creatorPromoText").style.fontFamily = "'Montserrat', sans-serif";//add styling 
document.getElementById("creatorPromoText").style.color = "#fff";
document.getElementById("creatorPromoText").style.textAlign = "center";
document.getElementById("creatorPromoText").style.lineHeight = "0.9";
document.getElementById("creatorPromoText").style.letterSpacing = "-1.6px";
document.getElementById("creatorPromoText").style.margin = "0 20px 10px 20px";
document.getElementById("creatorPromoText").style.fontSize = "42px";

document.getElementById("promoText").innerText = "ENJOY $150 TOWARDS YOUR FIRST CLEANING WITH US!"; //change additional copy if needed
    document.getElementById("promoText").style.fontFamily = "'Montserrat', sans-serif";
document.getElementById("promoText").style.color = "#fff";
document.getElementById("promoText").style.textAlign = "center";
document.getElementById("promoText").style.lineHeight = "0.9";
document.getElementById("promoText").style.letterSpacing = "-1.2px";
document.getElementById("promoText").style.margin = "0 20px 10px 20px";
document.getElementById("promoText").style.fontSize = "26px";

}


if (creatorName) {//if UTM link contains a creator's name, change DOM content and autoapply promo code
    const element = document.getElementById("creatorHeroText"); //set variables for DOM elements
    const promoElement = document.getElementById("creatorPromoText");
    const leadForm = document.forms['hsForm_FULL_FORM_ID_XYZ'];//set variables to target promo code field in HubSpot form. full formID removed for confidentiality
    const promoField = leadForm.elements.promo_code__coconut_;
    
    element.innerText = creatorName.toUpperCase() + "-APPROVED CLEANING:"; //combine creator name and add to DOM element text
    
    element.style.fontFamily = "'Mont-Heavy-Full', sans-serif";//retain brand styles
    element.style.color = "#fff";
    element.style.textAlign = "center";
    element.style.lineHeight = "0.9";
    element.style.letterSpacing = "-1px";
    element.style.marginBottom = "0";
    element.style.fontSize = "60px";
    
    promoField.value = creatorCode; //set promo code from UTM link into form field
    


} else {
    document.getElementById("creatorHeroText").innerText = "INFLUENCER-APPROVED CLEANING:"; //fallback value
    console.log('no tracking link found');
}
