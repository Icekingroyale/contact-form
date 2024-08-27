
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



// handling form submission
function handleSubmit(xyz) {
    xyz.preventDefault()  //prevent default submissions
    const firstnamn = document.getElementsByid('fname')
    const lastname = document.getElementById('lname')
  
    if (!firstname.value && !lastname.value) {
      firstname.style.border = '2px solid red'
      lastname.style.border = '2px solid red'
    }
}    


// onclick 
// document.getElementById('fname').onclick = () => {
//     document.getElementById('fname').style.border = '2px solid pink'
// }

// document.getElementById('fname').onclick = () => {
//     document.querySelector('#fname').style.border = '2px solid red'
// }

