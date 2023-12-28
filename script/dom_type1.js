/* let price = 1000
let num = Number(window.prompt('구입수량은?','숫자만 입력하세요'))
console.log(`구입수량은 ${num}개 입니다`)
console.log(`구입수량에 +1 이벤트행사중 총 수량은 ${num+1}입니다`)
console.log(`총 가격은 ${price*num}원입니다`) */
//NaN == Not a Number
//변수 만들기
const textInput = document.querySelector('#text')
const numInput = document.querySelector('#number')
const resultBtn = document.querySelector('#btn')
console.log(textInput, numInput, resultBtn);
//함수 만들기
function func1(){
    console.log('test')
    console.log(textInput.value)
    console.log(numInput.value)

    console.log(typeof textInput)
    console.log(typeof textInput.value)

    console.log(typeof numInput)
    console.log(typeof numInput.value)
    console.log(Number(numInput.value)+1)

    let result = Number(numInput.value)
    console.log(typeof result)
    console.log(result+1)
}