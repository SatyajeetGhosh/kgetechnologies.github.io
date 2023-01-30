//....................For Hamburger Menu....................

const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('nav-links');
toggleButton.addEventListener('click', function() {
    for(var i=0; i<navbarLinks.length; i++)
    navbarLinks[i].classList.toggle('active');
});

//.....................For Forms.....................

const nxtBtn = document.querySelector('#submit_button');
const form1 = document.querySelector('#form-1');
const form2 = document.querySelector('#form-2');
const form3 = document.querySelector('#form-3');
const form4 = document.querySelector('#form-4');
const form5 = document.querySelector('#form-5');
const form6 = document.querySelector('#form-6');

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");

var viewId = 1;
function nextForm(){
    viewId=viewId+1;
    progressBar();
    displayForms();
}

function prevForm(){
    viewId=viewId-1;
    progressBar1();
    displayForms();
}

function progressBar(){
    // e.preventDefault(); 

    if(viewId===2){
        one.classList.add('active');
    }
    if(viewId===3){
        two.classList.add('active');
    }
    if(viewId===4){
        three.classList.add('active');
    }
    if(viewId===5){
        four.classList.add('active');
    }
    if(viewId===6){
        five.classList.add('active');
    }
    if(viewId===7){
        six.classList.add('active');
    }
    if(viewId>7){
        one.classList.remove('active');
        two.classList.remove('active');
        three.classList.remove('active');
        four.classList.remove('active');
        five.classList.remove('active');
        six.classList.remove('active');
    }
}

function progressBar1(){
    // e.preventDefault();

    if(viewId===1){
        two.classList.add('active__form');

        one.classList.remove("active");
        two.classList.remove("active");
        three.classList.remove("active");
        four.classList.remove("active");
        five.classList.remove("active");
        six.classList.remove("active");
    }
    if(viewId===2){
        two.classList.remove("active");
        three.classList.remove("active");
        four.classList.remove("active");
        five.classList.remove("active");
        six.classList.remove("active");
    }
    if(viewId===3){
        three.classList.remove("active");
        four.classList.remove("active");
        five.classList.remove("active");
        six.classList.remove("active");
    }
    if(viewId===4){
        four.classList.remove("active");
        five.classList.remove("active");
        six.classList.remove("active");
    }
    if(viewId===5){
        five.classList.remove("active");
        six.classList.remove("active");
    }
    if(viewId===6){
        six.classList.remove("active");
    }
    if(viewId>7){
        one.classList.remove('active');
        two.classList.remove('active');
        three.classList.remove('active');
        four.classList.remove('active');
        five.classList.remove('active');
        six.classList.remove('active');
    }
}

function displayForms(){
    
    if(viewId>7){
        viewId=1;
    }

    if(viewId === 1){
        form1.style.display = 'block';
        form2.style.display = 'none';
        form3.style.display = 'none';
        form4.style.display = 'none';
        form5.style.display = 'none';
        form6.style.display = 'none';
    }else if(viewId === 2){
        form1.style.display = 'none';
        form2.style.display = 'block';
        form3.style.display = 'none';
        form4.style.display = 'none';
        form5.style.display = 'none';
        form6.style.display = 'none';
    }else if(viewId === 3){
        form1.style.display = 'none';
        form2.style.display = 'none';
        form3.style.display = 'block';
        form4.style.display = 'none';
        form5.style.display = 'none';
        form6.style.display = 'none';
    }else if(viewId === 4){
        form1.style.display = 'none';
        form2.style.display = 'none';
        form3.style.display = 'none';
        form4.style.display = 'block';
        form5.style.display = 'none';
        form6.style.display = 'none';
    }else if(viewId === 5){
        form1.style.display = 'none';
        form2.style.display = 'none';
        form3.style.display = 'none';
        form4.style.display = 'none';
        form5.style.display = 'block';
        form6.style.display = 'none';
    }else if(viewId === 6){
        form1.style.display = 'none';
        form2.style.display = 'none';
        form3.style.display = 'none';
        form4.style.display = 'none';
        form5.style.display = 'none';
        form6.style.display = 'block';
    }
}

//.................Form 1 Validations Using JQuery............................

// const firstName = document.getElementById("fname");
// const lastName = document.getElementById("lname");
// const contactNumber = document.getElementById("contact-number");
// const email = document.getElementById("email");
// const whatsappNumber = document.getElementById("whatsapp");

//..............To start next page from form heading...............

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function showTextbox(){
    const other = document.getElementById("other");
    const otherTextbox = document.getElementById("other-textbox");

    const netMvc = document.getElementById(".net-mvc");
    const angular = document.getElementById("angular");
    const bbaMba = document.getElementById("bba/mba");
    const businessDevelopment = document.getElementById("business-development");
    const digitalMarketing = document.getElementById("digital-marketing");
    const finance = document.getElementById("finance");
    const flutterAndroidIos = document.getElementById("flutter/android/ios");
    const hr = document.getElementById("hr");
    const hardware = document.getElementById("hardware");
    const htmlUi = document.getElementById("html-ui");
    const iot = document.getElementById("iot");
    const java = document.getElementById("java");
    const laravel = document.getElementById("laravel");
    const marketing = document.getElementById("marketing");
    const networking = document.getElementById("networking");
    const photoshop = document.getElementById("photoshop");
    const php = document.getElementById("php");
    const projectManager = document.getElementById("project-manager");
    const python = document.getElementById("python");
    const react = document.getElementById("react");
    const sales = document.getElementById("sales");
    const softwareDevelopment = document.getElementById("software-development");
    const testing = document.getElementById("testing");
    const uiDesigner = document.getElementById("ui-designer");
    const webDevelopment = document.getElementById("web-development");

    if(other.checked){
        otherTextbox.style.display = 'block';
        otherTextbox.value = '';
    }
    else if(netMvc.checked){
        otherTextbox.style.display = 'none';
    }
    else if(angular.checked){
        otherTextbox.style.display = 'none';
    }
    else if(bbaMba.checked){
        otherTextbox.style.display = 'none';
    }
    else if(businessDevelopment.checked){
        otherTextbox.style.display = 'none';
    }
    else if(digitalMarketing.checked){
        otherTextbox.style.display = 'none';
    }
    else if(finance.checked){
        otherTextbox.style.display = 'none';
    }
    else if(flutterAndroidIos.checked){
        otherTextbox.style.display = 'none';
    }
    else if(hr.checked){
        otherTextbox.style.display = 'none';
    }
    else if(hardware.checked){
        otherTextbox.style.display = 'none';
    }
    else if(htmlUi.checked){
        otherTextbox.style.display = 'none';
    }
    else if(iot.checked){
        otherTextbox.style.display = 'none';
    }
    else if(java.checked){
        otherTextbox.style.display = 'none';
    }
    else if(laravel.checked){
        otherTextbox.style.display = 'none';
    }
    else if(marketing.checked){
        otherTextbox.style.display = 'none';
    }
    else if(networking.checked){
        otherTextbox.style.display = 'none';
    }
    else if(photoshop.checked){
        otherTextbox.style.display = 'none';
    }
    else if(php.checked){
        otherTextbox.style.display = 'none';
    }
    else if(projectManager.checked){
        otherTextbox.style.display = 'none';
    }
    else if(python.checked){
        otherTextbox.style.display = 'none';
    }
    else if(react.checked){
        otherTextbox.style.display = 'none';
    }
    else if(sales.checked){
        otherTextbox.style.display = 'none';
    }
    else if(softwareDevelopment.checked){
        otherTextbox.style.display = 'none';
    }
    else if(testing.checked){
        otherTextbox.style.display = 'none';
    }
    else if(uiDesigner.checked){
        otherTextbox.style.display = 'none';
    }
    else if(webDevelopment.checked){
        otherTextbox.style.display = 'none';
    }
}

//......................Start Date.................................

var startDate = new Date();
var year = startDate.getFullYear();
var month = startDate.getMonth() + 1;
var day = startDate.getDate() + 5;

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + '-' + month + '-' + day;
document.getElementById("start-date").value = today;

//.................For Adding/Removing Textboxes.................

var counter = 1;
var textBox = "";
var refer = document.getElementById("refer-box");
function addBox(){
    var div = document.createElement("div");
    div.setAttribute("class","form5-refer");
    div.setAttribute("id","box_"+counter);

    textBox = "<input type='text' name='refer[]' id='person_"+counter+"'><input type='button' value='+' class='add-btn' onclick='addBox(this)'><input type='button' value='-' class='add-btn' onclick='removeBox(this)'>";

    div.innerHTML = textBox;
    form5-refer.appendChild(div);
    counter++;
}

function removeBox(ele){
    ele.parentNode.remove();
}

//......................Internship Option..........................

function enable1(){
    const check1 = document.getElementById("option2");
    const option2Checkbox = document.getElementById("form4-checkbox");
    if(check1.checked){
        option2Checkbox.style.display = 'block';
    }
    else{
        option2Checkbox.style.display = 'none';
    }
}

//......................Terms & Condition..........................

function enable(){
    const check2 = document.getElementById("terms");
    if(check2.checked){
        nxtBtn.style.display = 'block';
    }else{
        nxtBtn.style.display = 'none';
    }
}