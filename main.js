
console.log('contact-form')

// const names = document.getElementById("fname")

// function changeNameInput(){
//     document.getElementById('fname').style.border = "2px"
//     document.getElementById('lname').style.border = "2px"
// }

// mouse eneter 
const hoverlname = document.getElementById('lname').onmouseenter = () => {
    document.querySelector('#lname').style.borderColor = 'aqua'
    document.querySelector('#lname').style.cursor = 'pointer'
}

const hoverflnem = document.getElementById('fname').onmouseenter = () => {
    document.querySelector('#fname').style.borderColor = 'aqua'
    document.querySelector('#fname').style.cursor = 'pointer'
}

// mouse leaves 
document.getElementById('fname').onmouseleave = () => {
    document.querySelector('#fname').style.border = '1px solid black'
}


document.getElementById('lname').onmouseleave = () => {
    document.querySelector('#lname').style.border = '1px solid black'
}


const firstname = document.getElementById('fname')
const lastname = document.getElementById('lname')
const email = document.getElementById('email')
const request = document.getElementById('request')
const enquiry = document.getElementById('enquiry')
const message = document.getElementById('message')
const checkbox = document.getElementById('checkbox')
const error = document.getElementsByClassName('err')

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const err = [];

    if (!firstname.value) {
        firstname.style.border = "1px solid red";
        err.push({ idx: 0, msg: "" });
      }
      if (!lastname.value) {
        lastname.style.border = "1px solid red";
        err.push({ idx: 1, msg: "" });
      }
      if (!email.value) {
        email.style.border = "1px solid red";
        err.push({ idx: 2, msg: "" });
      }
      if (!enquiry.value && !request.value) err.push({ idx: 3, msg: "" });
     
      if (!message.value) {
        message.style.border = "1px solid red";
        err.push({ idx: 4, msg: "" });
      }
      
      if (!checkbox.value) err.push({ idx: 5, msg: "" });
    
      if (err.length) {
        error.forEach((x, i) => {
          err.filter((y) => y.idx === i)[0].style.display = "block";
        });
      }
});
    


// handling form submission



// function handleSubmit(xyz) {
//     xyz.preventDefault()  //prevent default submissions
//     const firstnamn = document.getElementsByid('fname')
//     const lastname = document.getElementById('lname')
  
//     if (!firstname.value && !lastname.value) {
//       firstname.style.border = '2px solid red'
//       lastname.style.border = '2px solid red'
//     }
// }    


// onclick 
// document.querySelector('.submit').onclick = () => {
//     alert("Message Sent!")
// }

// document.getElementById('fname').onclick = () => {
//     document.querySelector('#fname').style.border = '2px solid red'
// }

