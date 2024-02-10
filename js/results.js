import { mbtis, results } from './data.js'

// http://127.0.0.1:3000/results.html?mbti=isfj
const mbti = new URLSearchParams(window.location.search).get('mbti')
console.log(mbti)

const result = results[ mbtis[mbti] ]
console.log(result)

const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')
const lectureEl = document.querySelector('.lecture')
const lectureImgEl = document.querySelector('.lecture img')

titleEl.innerHTML = result.title
characterEl.src = result.character
// for (let i = 0; i < boxEls.length; i++) {
//   boxEls[i].innerHTML = result.results[i]
// }
boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index]
})

jobEls.forEach(function (jobEl, index) {
  jobEl.innerHTML = result.jobs[index]
})

lectureEl.href = result.lectureUrl
lectureImgEl.src = result.lectureImg
