const obj = [
    {
        productName:'딸기 1kg',
        productPrice:10000,
        productQuantity:1,
    },
    {
        productName:'사과 1kg',
        productPrice:15000,
        productQuantity:2,
    },
]
const target2 = document.querySelector('.target2')
let dt = document.createElement('dt') //태그생성
let dd = document.createElement('dd')


for(let i=0; i<2; i++){
    dt = document.createElement('dt')
    dt.innerHTML = `${obj[i].productName}`
    target2.appendChild(dt)
    for(let j=0; j<2; j++){
        dd = document.createElement('dd')
        dd.innerHTML = `정의형 내용${j+1}`
        target2.appendChild(dd)
    }
}



