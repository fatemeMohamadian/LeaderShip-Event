let time = document.getElementById('clocktime')
let flag = 1
const menu = document.querySelectorAll('#menu i')
const spanmenu = document.getElementById('menu')
const list = document.querySelector('#navres')
let alltab = document.querySelectorAll('#allsec> div')
let litags = document.querySelectorAll('#list>li')
let btnsend = document.getElementById('btnsend')
let inp = document.querySelectorAll('#inpbox>input')
let txt = document.getElementById('txt')
const box = document.querySelector('#box')
let x = inp[0].value
let y = inp[1].value
let z = inp[2].value
let f = txt.innerText
date()
setInterval(() => {
    date()
}, 1000);
function date() {
    a = new Date().toLocaleTimeString()
    time.innerHTML = a
}
//    end tim////
spanmenu.addEventListener('click', () => {
    if (flag % 2) {
        list.style.display = 'flex'
        menu[0].style.display = 'none'
        menu[1].style.display = 'flex'
    }
    else {
        list.style.display = 'none'
        menu[0].style.display = 'flex'
        menu[1].style.display = 'none'
    }
    flag++
})
//    end of header section///////
function tab(x) {
    alltab.forEach((val) => {
        val.style.display = 'none'
    })
    alltab[x].style.display = 'flex'
    litags.forEach((item) => {
        item.classList.remove('shadow-myshadow')
        item.classList.remove('text-sky-500')
        item.classList.remove('border-l-sky-500')
        item.classList.remove('border-r')
    })
    litags[x].classList.add('shadow-myshadow')
    litags[x].classList.add('text-sky-500')
    litags[x].classList.add('border-l-sky-500')
}
//end tab//////
btnsend.addEventListener('click', () => {
    let x = inp[0].value
    let y = inp[1].value
    let z = inp[2].value
    let f = txt.value
    box.innerHTML = `<p class="w-full pl-[10px]">Name: ${x}</p><br/>
           <p class="w-full pl-[10px]">Email: ${y}</p><br/>
           <p class="w-full pl-[10px]">Subject: ${z}</p><br/>
           <p class="w-full pl-[10px]">Message: ${f}</p><br/>
           <p class="text-orange-600 w-full font-bold text-center text-xl">Recieved Your Message!</p><br/>
           <button onclick="del(this)" class="bg-sky-500 text-white w-[100px] py-2   hover:bg-sky-900 hover:text-white transition-all duraition-[.4s] rounded-xl">OK</button>`
    if (x == '' && y == '' && z == '' && f == '') {
        box.style.display = 'none'
        alert('The input Empty!!  Please Type in The Inputs!')
    }
    else {
        box.style.display = 'flex'
    }
})
const del = (s) => {
    s.parentElement.style.display = 'none'
    inp[0].value = ''
    inp[1].value = ''
    inp[2].value = ''
    txt.value = ''
}