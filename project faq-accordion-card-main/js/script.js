// const questionBtn = document.querySelectorAll('.faq__question-btn')
// const answer = document.querySelectorAll('.faq__answer')

// for(let i = 0; i < answer.length; i++){
//     questionBtn[i].addEventListener("click", () => {
//         if(questionBtn[i].classList.contains('open')){
//             questionBtn[i].classList.remove('open')
//             answer[i].classList.remove('open')
//         }else{
//             questionBtn[i].classList.add('open')
//             answer[i].classList.add('open')
//         }
//     })
// }

document.querySelectorAll('.faq__question-btn').forEach((item) => {
    item.addEventListener('click', () => {
        if(item.classList.contains('open')){
            item.classList.remove('open')
            item.parentNode.nextElementSibling.classList.remove('open')
        } else{
            item.classList.add('open')
            item.parentNode.nextElementSibling.classList.add('open')
        }
    })
})