var customerName = "Alliance";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {
  let companyMainHeader = document.getElementById("tm-header");
  companyMainHeader.textContent = customerName;
}

function toggleColors() {
let navArr = document.querySelectorAll(".tm-white-rect");
navArr.forEach(function(element){
//console.log(element)
element.classList.add("tm-blue-rect");
element.classList.remove("tm-white-rect");
})}

//<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
function hideElement() {
let socialLinksContainer = document.querySelector("#social-links");
socialLinksContainer.style.display = "none";
}

function addText() {
  //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text-->
}

/*

Dream Pulse Template Customer Customizations
<h1 id=“tm-header” class=“tm-brand text-uppercase”></h1>
Add Customer Name to h1

<span class=“d-inline-block tm-white-rect”></span>
Change all class names ‘tm-white-rect’ to ‘tm-blue-rect’
<ul class=“nav flex-row tm-social-links”>
Hide social links
<h2 id=“introheader” class=“tm-section-title mb-5 text-uppercase tm-color-primary”></h2>
Add the text ‘Alliance’ to h2
<p id=“intropara1” class=“tm-color-gray”>
Add the text ‘Alliance was founded in 1931 by Albert Daniels.’
<p id=“intropara2” class=“tm-color-gray”>
Add the text ‘The company is a leader in P.C. Manufacturing’
<p id=“aboutpara1”>
Add the text ‘We deliver the best service this side of creation’
<p id=“aboutpara2">
Add the text ‘Our motto is satisfaction guaranteed’
<p id=“addresspara”>
Add the text ‘1-800-565-5656’

*/
