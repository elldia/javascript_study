const target = document.querySelector('.target')
const ul = document.createElement('ul') //태그생성
let li = document.createElement('li')
console.log(target, ul)
for(let i=0; i<3; i++){
    li = document.createElement('li')
    for(let j=0; j<2; j++){
        li.innerHTML += `<span>상품${j+1}</span> `
    }
    ul.appendChild(li)
}
target.appendChild(ul)
//target-ul-<li>-<span>상품<span>*2-</li>

const target2 = document.querySelector('.target2')
let dt = document.createElement('dt')
let dd = document.createElement('dd')

// dt2 dd2
/* dt.innerHTML = '정의형 제목'
target2.appendChild(dt)
for(let i=0; i<2; i++){
    dd = document.createElement('dd')
    dd.innerHTML = '정의형 내용'
    target2.appendChild(dd)
} */

for(let i=0; i<2; i++){
    //dt1
    dt = document.createElement('dt')
    dt.innerHTML = `정의형 제목${i+1}`
    target2.appendChild(dt)
    for(let j=0; j<2; j++){
        //dd2
        dd = document.createElement('dd')
        dd.innerHTML = `정의형 내용${j+1}`
        target2.appendChild(dd)
    }
}