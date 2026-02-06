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


// Call Stack Example with setTimeout

// console.log("First Line")
// setTimeout(() => {
//     console.log("After 2 seconds")
// }, 0)
// console.log("Second Line")


// console.log("First Line")
// const id=setTimeout(() => {                     // Settimeout higher order function hota h
//     console.log("After 2 seconds")
// }, 2000)
// clearTimeout(id)
// console.log("Second Line")


// Callback Function Example

// function print (){              //callback function
//     console.log("Hello Student")
// }

// function greet(num){        // higher order function
//     console.log("Welcome to my class!!")
//     setTimeout(() => {
//         console.log("Inside setTimeout")
//     }, 2000);
//     num()
// }

// greet(print)  // passing function as an argument


// Callback Function Example with changing num position

// function print (){              //callback function
//     console.log("Hello Student")
// }

// function greet(num){        // higher order function
//     console.log("Welcome to my class!!")
//     setTimeout(() => {
//         console.log("Inside setTimeout")
//     num()
//     }, 2000);
// }

// greet(print)  // passing function as an argument


// Callback Function Example with Argument

// function print (name){              //callback function
//     console.log("Hello Student", name)
// }

// function greet(num){        // higher order function
//     console.log("Welcome to my class!!")
//     setTimeout(() => {
//         console.log("Inside setTimeout")
//         let firstname = "Jiya"
//         num(firstname)
//     }, 2000);
// }

// greet(print)  // passing function as an argument


// Callback Hell Example

// console.log("Starting Homework...");

// setTimeout(() => {
//     console.log("Homework done!");
//     console.log("Starting Dinner...");

//     setTimeout(() => {
//         console.log("Dinner done!");
//         console.log("Getting ready to go out....");

//         setTimeout(() => {
//             console.log("Going to the playground!");
//         }, 1000);          //after dinner
   
//     }, 1500);       //dinner time

// }, 2000);           // homework time
        

// 2nd method Callback Hell Example

// function finishHomework(callback){
//     console.log("Starting Homework...");
//     setTimeout(() => {
//         console.log("Homework done!");
//         callback();
//     }, 2000);
// }
// function eatDinner(callback){
//     console.log("Starting Dinner...");
//     setTimeout(() => {
//         console.log("Dinner done!");
//         callback();
//     }, 1500);
// }
// function goPlayground(){
//     console.log("Going to the playground!");
// }

// finishHomework(() => {
//     eatDinner(() => {
//         goPlayground()
//     });
// });


// Adding Classes on Button Click

// const input = document.querySelector('#task')
// const btn = document.querySelector('.btn')
// const lists = document.querySelector('.list')
// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     const li = document.createElement('li')
//     li.innerText = input.value
//     lists.appendChild(li)
//     input.value = ""
// })


// Removing Classes on Button Click

// const input = document.querySelector('#task')
// const btn = document.querySelector('.btn')
// const lists = document.querySelector('.list')
// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     if (input.value===""){
//         alert("Please enter a task")
//         return
//     }

//     const li = document.createElement('li')
//     const deleteBtn = document.createElement('button')

//     deleteBtn.innerText = "Delete"
//     li.innerText = input.value 
    
//     li.appendChild(deleteBtn)
//     lists.appendChild(li)

//     deleteBtn.addEventListener('click',()=>{
//         lists.removeChild(li)
//     })

//     input.value = ""
// })


// PROMISES

// for rejected promise

// const p = new Promise(function(resolve, reject){
//     reject()
// })
// console.log(p)


//for resolved promise

// const p = new Promise(function(resolve, reject){
//     resolve()
// })
// console.log(p)


// for resolved promise after some time

// const p = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("promise is resolved")
//         resolve()
//     }, 2000);
// })
// console.log(p)


// if else condition in promise

// const p = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let done=true;
//         if(done){
//             resolve()
//         }else{
//             reject()
//         }
//     }, 5000);
       
// })
// console.log(p)


// then and catch method

// const p = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let done=true;
//         if(done){
//             resolve()
//         }else{
//             reject()
//         }
//     }, 5000);
       
// })
// p.then(()=>{
//     console.log("Promise is resolved")
// }).catch(()=>{
//     console.log("Promise is rejected")
// })  


// if done=true in data

// const p = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let done=true;
//         if(done){
//             resolve({name: "Jiya", age: 18})
//         }else{
//             reject("Try after sometime")
//         }
//     }, 5000);
       
// })
// p.then((data)=>{
//     console.log("Promise is resolved", data)
// }).catch((err)=>{
//     console.log("Promise is rejected", err)
// })  


// if done=false in data

// const p = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let done=false;
//         if(done){
//             resolve({name: "Jiya", age: 18})
//         }else{
//             reject("Try after sometime")
//         }
//     }, 5000);
       
// })
// p.then((data)=>{
//     console.log("Promise is resolved", data)
// }).catch((err)=>{
//     console.log("Promise is rejected", err)
// }).finally(()=>{
//     console.log("Finally block")
// })



function doHomework(){
    const p = new Promise(function(resolve, reject){
        setTimeout(() => {
            let done=true;
            if(done){
                console.log("Homework is done")
                resolve("Homework complete")
            }else{
                reject("Homework not done")
            }
        }, 5000);
    });
    return p
}


function haveDinner(){
    const p = new Promise(function(resolve, reject){
        setTimeout(() => {
            let done=true;
            if(done){
                console.log("Dinner is done");
                resolve("Dinner complete")
            }else{
                reject("Dinner not done")
            }
        }, 5000);
    });
    return p
}


function goPlayground(){
    const p = new Promise(function(resolve, reject){
        setTimeout(() => {
            let done=true;  
            if(done){
                console.log("Going to the playground");
                resolve("Way to the playground")
            }else{
                reject("Couldn't go to the playground");
            }
        }, 5000);
    });
    return p
}

doHomework().then((data)=>{
    console.log(data);
    return haveDinner();
}).then((data)=>{
    console.log(data);
    return goPlayground();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("All tasks are completed")
});
