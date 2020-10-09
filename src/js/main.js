

const headerHome = document.querySelector('[data-js=header-home]')
const headerBookmarks = document.querySelector('[data-js=header-bookmarks]')
const headerCreate = document.querySelector('[data-js=header-create]')
const headerProfile = document.querySelector('[data-js=header-profile]')

const mainHome = document.querySelector('[data-js=main-home]')
const mainBookmarks = document.querySelector('[data-js=main-bookmarks]')
const mainCreate = document.querySelector('[data-js=main-create]')
const mainProfile = document.querySelector('[data-js=main-profile]')

const naviHome = document.querySelector('[data-js=navi-home]')
const naviBookmarks = document.querySelector('[data-js=navi-bookmarks]')
const naviCreate = document.querySelector('[data-js=navi-create]')
const naviProfile = document.querySelector('[data-js=navi-profile]')

naviHome.addEventListener('click', () => {
    headerHome.classList.remove('d-none')
    headerBookmarks.classList.add('d-none')
    headerCreate.classList.add('d-none')
    headerProfile.classList.add('d-none')
    mainHome.classList.remove('d-none')
    mainBookmarks.classList.add('d-none')
    mainCreate.classList.add('d-none')
    mainProfile.classList.add('d-none')
})

naviBookmarks.addEventListener('click', () => {
    headerHome.classList.add('d-none')
    headerBookmarks.classList.remove('d-none')
    headerCreate.classList.add('d-none')
    headerProfile.classList.add('d-none')
    mainHome.classList.add('d-none')
    mainBookmarks.classList.remove('d-none')
    mainCreate.classList.add('d-none')
    mainProfile.classList.add('d-none')
})

naviCreate.addEventListener('click', () => {
    headerHome.classList.add('d-none')
    headerBookmarks.classList.add('d-none')
    headerCreate.classList.remove('d-none')
    headerProfile.classList.add('d-none')
    mainHome.classList.add('d-none')
    mainBookmarks.classList.add('d-none')
    mainCreate.classList.remove('d-none')
    mainProfile.classList.add('d-none')
})

naviProfile.addEventListener('click', () => {
    headerHome.classList.add('d-none')
    headerBookmarks.classList.add('d-none')
    headerCreate.classList.add('d-none')
    headerProfile.classList.remove('d-none')
    mainHome.classList.add('d-none')
    mainBookmarks.classList.add('d-none')
    mainCreate.classList.add('d-none')
    mainProfile.classList.remove('d-none')
})

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
/* Clear Form */

const btnSubmit = document.querySelector('[data-js=clear-button]')
const clearForm = document.querySelector('[data-js=clear-form]')

btnSubmit.addEventListener('click', ()=> {
    clearForm.classList.reset('[data-js=clear-form]')
})