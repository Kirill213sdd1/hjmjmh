// // let elem = document.getElementById('exemple')

// // console.log(elem.clientWidth);
// // console.log(elem.offsetWidth);
// // console.log(elem.offsetWidth - elem.clientWidth - 25* 2);

// // console.log(elem.clientHeight);
// // console.log(elem.offsetHeight);
// // console.log(elem.offsetHeight - elem.clientHeight - 25*2);

// // console.log(elem.offsetTop);
// // console.log(elem.scrollTop);
// // console.log(elem.scrollHeight);

// // console.log(document.body.scrollWidth);
// // console.log(window.innerWidth);

// // console.log(elem.querySelector('.container').offsetTop);
// // console.log(elem.querySelector('.container').scrollTop);

// // console.log(elem.offsetTop);
// // console.log(elem.offsetLeft);
// // console.log(elem.offsetParent.id);

// // console.log(elem.clientTop);
// // console.log(elem.clientLeft);
// // console.log(elem.clientWidth);

// // console.log(window.innerWidth);
// // console.log(window.innerHeight);

// // console.log(elem.scrollHeight);
// // console.log(elem.scrollHeight);

// // elem.style.height = `${elem.scrollHeight}px`

// // console.log(window.scrollY);
// // console.log(window.scrollX);


// //1 
// // let elem1 = document.getElementById('elem')
// //2
// // elem1.classList.add('www')
// //3
// // elem1.classList.remove('.www')
// //4
// // let classS = 'www'
// // if (classS in elem1.className.split(' ')) {
// //     console.log(true)
// // } else {
// //     console.log(false)
// // }
// //5
// // let classes = elem1.className.split(' ')
// // let count = 0

// // for (let i = 0; i < classes.length; i++){
// //     count += 1
// // }
// // console.log(count);
// //6
// // let classes = elem1.className.split(' ')

// // for (let i = 0; i < classes.length; i++){
// //     alert(classes[i])
// // }


// // let elemOl = document.querySelector('.ol')

// // let li = document.createElement('li')
// // li.innerHTML = 'пункт'
// // elemOl.append(li)

// // console.log(elemOl);



// // let elemUl = document.querySelector('.ul')
// // let li = document.createElement('li')
// // let arr = [1,2,3]

// // for (let i = 0; i < arr.length; i++) {
// //     elemUl.insertAdjacentHTML('beforeend', `<li> ${arr[i]}</li>`) 
// // }

// // console.log(elemUl);


// //1
// // elem1.insertAdjacentHTML('beforebegin', `<span>!!!</span>`) 
// //2
// // elem1.insertAdjacentHTML('afterend', `<span>!!!</span>`) 
// //3
// // elem1.insertAdjacentHTML('afterbegin', `<span>!!!</span>`) 
// //4 
// // elem1.insertAdjacentHTML('beforeend', `<span>!!!</span>`) 

// // console.log(elem1);


// // let elem = document.querySelector('.newUl')
// // elem.firstElementChild.style.cssText = `color: red`
// // elem.lastElementChild.style.cssText = `color: red`
// // console.log(elem.firstElementChild)

// // elem.childNodes.textContent = elem.childNodes.textContent + '!'


// let elemP = document.querySelector('.p')

// elemP.previousElementSibling.textContent = elemP.textContent + '!'
// elemP.nextElementSibling.textContent = elemP.textContent + '!'

// let nextElem = elemP.nextElementSibling
// console.log(nextElem);
// // nextElem.firstElementChild.textContent = nextElem.firstElementChild.textContent + '!'

// let childP = document.querySelector('.child')
// console.log(childP);

// childP.parentElement.textContent.cssText = `color: red;`

// let text = document.querySelector('#elem')
// let count = 0
// function sendMessage () {
//     alert(`Sended messasge: ${text.value}`)
// }

// text.onfocus = sendMessage()

// text.onchange = function () {
//     console.log(`Sended messasge: ${text.value}`)
// }

// let elem = document.querySelector('#send')

// elem.addEventListener('click', () => {
//     alert('message');
//     count++
// })

// if (count === 1) {
//     elem.removeEventListener('click', () => alert('message'))
// }

// elem.onclick = function(event) {
//     console.log(event.type, event.currentTarget);
//     event.currentTarget.textCpntent = 'not send'
//     console.log(event.clientX, event.clientY);
// }

// document.querySelector('.info').addEventListener('click', () => alert('p'))
// document.querySelector('.link').addEventListener('click', 
//     (event) => {alert('li');
//     event.stopPropagation()
// })

// document.querySelector('.block').addEventListener('click', () => 
//     alert('div'), capture = true)

// let parent = document.querySelector('.sheet')

// parent.addEventListener('click', (event) => {
//     let target = event.target

//     if (target.classList.contains('card__title') || target.classList.contains('text')) {
//         target.parentNode.classList.add('light')
//     } else if (target.classList.contains('card')){
//         target.classList.add('light')
//     } else if (target.classList.contains('card__title') || 
//     target.classList.contains('text') &&  target.classList.contains('light')) {
//         target.parentNode.classList.remove('light')
//     } else if (target.classList.contains('card')){
//         target.classList.remove('light')
//     }
// })

let elem = document.querySelector('.field')
elem.addEventListener('click', (event) => {
    document.querySelector('.ball').style.left = event.pageX+'px'
    document.querySelector('.ball').style.top = event.clientY+'px'

})




