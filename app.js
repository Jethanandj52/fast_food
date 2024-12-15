// Splash Screen  
    let splash = document.querySelector('.splash-screen');  
        setTimeout(() => {
            splash.style.display = 'none';
        }, 2000);
   
 
// heart 
let heart = document.getElementById("heart");
function redHeart() {
     
    if (heart.style.color === "white") {
        heart.style.color = "red"; 
    } else {
        heart.style.color = "white";   
    }
}

// cart

function cartClick(){
    table.style.display="block"
    nav1.style.display="none"
   }
   //cancel cart
   function backHome(){
       table.style.display="none"
   }
 
// side nav bar 
function sideBar(){
    if(nav1.style.display==="block"){
        nav1.style.display="none";
    }
    else{
        nav1.style.display="block";
    }
}
// read more

function more() {
    let less = document.getElementById("less");
    less.innerHTML = "Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour randomised words.Lorem ipsum dolor sit amet. "

    var button = document.getElementById('second-btn')
    button.innerHTML = "read less"
    button.setAttribute('onclick', 'less()');
}
// read less 
function less() {
    let less = document.getElementById("less");
    less.innerHTML = "Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour randomised words."
    var button = document.getElementById('second-btn')
    button.innerHTML = "read more"
    button.setAttribute('onclick', 'more()');
}
//signup
function register(){
    
    signincontainer.style.display="block"
   cancel.style.display="block" 
   loginpop.style.display="block"
   signup.style.display="block"  
   
    order.style.display="none"
}

 
// signin
function login(){
    
    signincontainer.style.display="block"
   cancel.style.display="block" 
   signup.style.display="none"
   loginpop.style.display="block"  
   
    order.style.display="none"
}
// cancel
function cancelClick(){
    
    signincontainer.style.display="none"
   cancel.style.display="none" 
   loginpop.style.display="none"  
    order.style.display="none"
}
// order 
function orderClick(){
  
    signincontainer.style.display="block";
    cancel.style.display="block";
    order.style.display="block"
    loginpop.style.display="none" 
    signup.style.display="none"
 
}

 

// order table 
let idcount = 1;

function submitOrder() {
    let items = document.querySelector('.items').value;
    let quantity = document.querySelector(".quantity").value;
    let address = document.querySelector(".address").value;
    let number = document.querySelector(".mobileNo").value;
    let payment = document.querySelector('.payment').value;
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate()
    let hours = date.getHours();
    let minutes = date.getMinutes();    
    let amPm;
    if(hours>=12){
        amPm = "PM";
    }
    else{
        amPm = "AM";
    }
    if (!items || !quantity || !address || !number || !payment) {
        alert("Please fill all fields before submitting!");
        return;
    }

    const table = document.querySelector('.userTable').querySelector('tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${idcount}</td>
        <td>${items}</td>
        <td>${quantity}</td>
        <td>${address}</td>
        <td>${number}</td>
        <td>${payment}</td>
        <td>${year}:${month}:${day}</td>
        <td>${hours}:${minutes}:${amPm}</td>
    `;

    table.appendChild(row);
    document.querySelector('.items').value = '';
    document.querySelector('.quantity').value = '';
    document.querySelector('.address').value = '';
    document.querySelector('.mobileNo').value = '';
    document.querySelector('.payment').value = '';

    idcount++;
}





 