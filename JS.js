const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const countSlide = mainSlide.querySelectorAll('div').length

const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')

downButton.addEventListener('click', function(){clickButton('down')})
upButton.addEventListener('click', function(){clickButton('up')})

let count = 0
mainSlide.style.transform = `translateY(${-(countSlide-(count+1))*100}vh)`
sidebar.style.transform = `translateY(${(-count*100)}vh)`

function clickButton(btn){
    if(btn === 'down'){
        ++count
        if(count === countSlide){
            count = 0
        }
    }else if(btn === 'up'){
        --count
        if(count < 0){
            count = countSlide-1
        }
    } 

    mainSlide.style.transform = `translateY(${-(countSlide-(count+1))*100}vh)`
    sidebar.style.transform = `translateY(${(-count*100)}vh)`
}