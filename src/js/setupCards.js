

export default function setupCards() {



/* Toggle Bookmarkt */

const bookmarkIcon = document.querySelector('[data-js=bookmark-icon]')

bookmarkIcon.addEventListener('click', ()=> {
bookmarkIcon.classList.toggle('card__bookmark-icon--active')

})

/* Toggle Answer Card */

const btnShowAnswer = document.querySelector('[data-js=show-answer]')
const answer = document.querySelector('[data-js=text-answer]')

btnShowAnswer.addEventListener('click', ()=> {
    answer.classList.toggle('d-none')

})

}