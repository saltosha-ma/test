// //1.
// const containsOnlyDigits = (str) => {
//    const regExp = /^\d+$/
//    return regExp.test(str)
//  }
 
//  console.log(containsOnlyDigits("12345"))
//  console.log(containsOnlyDigits("12a45"))



//  //2.
//  function printMessage() {
//    let seconds = 0
//    setInterval(() => {
//        seconds++
//        console.log('Прошла секунда:', {seconds})
//    }, 1000)
// }

// printMessage()


// //3.
// const count = () => {
//    let i = 1;
//    const interval = setInterval(() => {
//        console.log(i);
//        i++;
//        if (i > 10) {
//            clearInterval(interval);
//        }
//    }, 1000);
// }

// count();


//4.
const changeColor = () => {
   const block = document.getElementById("myBlock")
   if (block.classList.contains("blueBackground")) {
       block.classList.remove("blueBackground")
   } else {
       block.classList.add("blueBackground")
   }
}

document.getElementById("myButton").addEventListener("click", changeColor)

// 5.

// const button = document.querySelector('.btn')

// button.onclick = () => {
//    const request = new XMLHttpRequest() 
//    request.open('GET', 'data.json') 
//    request.setRequestHeader('Сontent-type', 'application/json')
//    request.send() 
// } 