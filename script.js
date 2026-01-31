// Object Manipulation

// let obj = {
//     Name: "Jiya",
//     Age: 18,
//     City: "Patna"
// }

// let obj2 = {
//     name: "Ankita",
//     age: 19,
//     city: "Delhi"   
// }
// obj2.name = "Simran"  // Updating the name property
// console.log(obj2.name)

// const para = document.querySelector('p');  // Selecting the first paragraph element
// para.textContent = "This is updated paragraph."
// console.log(para.textContent);

// console.log(document)  // Logs the entire document object

// //getElementById

// const para = document.getElementById('para1')
// para.textContent = "This is updated paragraph using getElementById."
// para.style.color = "blue"
// console.log(para.textContent)


// getElementsByClassName

// const para = document.getElementsByClassName('info')
// para[0].textContent = "This is updated paragraph using getElementsByClassName."
// para[1].style.color = "pink"
// console.log(para)
// para.forEach((ele) => console.log(ele))

// console.log(document)  // Logs the entire document object

//Query Selector

// const para = document.querySelector('.info');
// para.textContent = "This is updated paragraph using queryselector."
// para.style.color = "pink"
// console.log(para)


//ForEach 

// let arr = [12, 4, 65, 3, 324, 56]
// arr.forEach((ele)=> console.log(ele))


// Query Selector All


// const para2= document.querySelectorAll('.info')
// para2[0].textContent = "This is updated paragraph using getElementsByClassName."
// para2[0].style.color = "green"
// para2[1].style.color = "magenta"
// para2[2].style.color = "cyan"
// console.log(para2)
// para2.forEach((ele) => console.log(ele))


// INNERHTML and TEXTCONTENT

// const para3= document.querySelectorAll('.info')
// para3[0].innertext = "Updated"
// para3[0].textContent = "Now updated"
// para3[1].innerHTML= "<div>Hello World</div>"
// console.log(para3)


// Adding Event Listeners and Manipulating Classes


// const button = document.querySelector('button')
// const button2 = document.querySelector('#btn')

// button2.addEventListener('click',function(){

//     button.classList.add('btn')
// })


//  Using ClassList to Manipulate Classes

// const button = document.querySelector('button')

// button.classList.add('btn')
// button.classList.remove('btn')
// button.classList.toggle('btn') // adds if not present, removes if present


// function message(){
//     alert("You have clicked the button.")
// }

// button.addEventListener('click', message)
// button.removeEventListener('click', message)


// EXAMPLE: Click Event with Alert and Stop Remove Event Listener

// const button = document.querySelector('#btn')
// const button2 = document.querySelector('#stop')

//  function message(){
//          alert("You have clicked the button.")
// }
// button.addEventListener('click', message)

// button2.addEventListener('click', function(){
//     button.removeEventListener('click', message)
// })


// Event Object Example

// const button3 = document.querySelector('#btn')
// const button4 = document.querySelector('#stop')

//  function message(Event){
//          alert("You have clicked the button.")
//          console.log(Event)
// }
// button3.addEventListener('click', message)

// button4.addEventListener('click', function(){
//     button3.removeEventListener('click', message)
// })


// Keyboard Event Example

// const btn = document.querySelector('#btn')
// // btn.addEventListener('keydown', function(event){     // when key is pressed
// //     console.log(event.key)
// // })
// btn.addEventListener('keyup', function(event){    // when key is released 
//     console.log(event.key)
// })


// Form Submit Event Example

// const handleSubmit = (event) => {
//     event.preventDefault();          // Prevents the default form submission behavior 
//     console.log("Form Submitted")

// }
// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit)


// console.log("updated code")


// const btn = document.querySelector("button")
// const div = document.querySelector(".container")

// btn.addEventListener('click', function(){console.log("Button Clicked")
// })
// div.addEventListener('click', function(){console.log("Div Clicked")})
  

// const btn = document.querySelector("button")
// const div = document.querySelector(".container")
// const div2 = document.querySelector(".outer")

// btn.addEventListener('click', function(){console.log("Button Clicked")}, false)
// div.addEventListener('click', function(){console.log("Div Clicked")}, false)
// div2.addEventListener('click', function(){console.log("Div2 Clicked")}, false)


// debugger
// console.log(a)

// var a=78  //part of global scope
// let b=90  //part of script scope
// console.log(a)
// console.log(b)

// function print(){
//     let c=45
//     console.log(c)
//     console.log("Inside Function")
// }
// print()


// debugger
// function first(){
//     second()
// }
// function second(){
//     third()
// }
// function third(){
//     console.trace()
// }
// first()

// let total=100
// function calculate()


// Asynchronous Example

// console.log("First Line")
// setTimeout(() => {
//     console.log("After 2 seconds")
// }, 2000)
// console.log("Second Line")


// setTimeout Example with Alert

// setTimeout(() => {
//     alert("This alert is shown after 3 seconds")
// }, 3*1000)


//  setInterval Example

// const timerId=setInterval(() => {
//     console.log("Hello Student!")
// }, 1000)

// setTimeout(() => {
//     clearInterval(timerId) 
// }, 10*1000)   // Clears the interval after 10 seconds


// Example: Countdown Timer

// let count = 1;

// const id=setInterval(() => {
//     if(count===10)clearInterval(id)
//     console.log(count)
//     count+=1
// }, 1000)


// console.log("First Line")
// setTimeout(() => {
//     console.log("After 2 seconds")
// }, 0)
// console.log("Second Line")



const id=setTimeout(() => {
    console.log("After 2 seconds")
}, 2000)
clearTimeout(id)
