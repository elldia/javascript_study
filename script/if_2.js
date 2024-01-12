//1. 'admin' 아이디만 접근할 수 있는 페이지 
let userId = "admin"
if(userId == 'admin'){
    console.log('관리자님 어서오세요')
}
//2. 'admin' 아이디 '1234' 비밀번호인 관리자만 접근할 수 있는 페이지
let userPw = '1234'
if(userId=='admin' && userPw=='1234'){
    console.log('관리자님 어서오세요')
}
//3. 사용자의 아이디를 입력받고 admin이 아니면 "일반회원입니다." 출력
/* const userIdInput = prompt('아이디를 입력하세요')
if(userIdInput != 'admin'){
    console.log('일반 회원입니다')
} */
//4. 사용자가 입력한 숫자 값에 따라 홀짝 구분해서 짝수일 경우 출력하기
/* const userNum = prompt('숫자를 써주시면 짝수인지 홀수인지 맞춰볼게요!')
if(userNum%2 == 0){
    console.log('짝수!')
}
if(userNum%2){
    console.log('홀수!')
} */
//if(1) {}
//if(true) {}
//5. 10살 이상만 탈 수 있는 놀이기구, 나이를 물어보고 10살 이하면 탑승불가!
/* const userAge = prompt('몇살?')
if(userAge < 10){
    alert('탑승불가')
} */
//6. 10살 이상이면서 키가 120 이상인 애만 탈수 있는 놀이기구
//나이와 키를 물어보고 조건이 맞으면 '탑승가능!'
/* const userAge = prompt('몇살?')
const userHeight = prompt('키는?')
if( userAge >= 10 && userHeight >=120 ){
    alert('탑승가능!')
} */
const printBtn = document.querySelector('#printBtn')
// printBtn.addEventListener('click',function(){})
printBtn.addEventListener('click',()=>{
    let printQ = confirm('인쇄할까요?')
    if(printQ){ print() }
})
//최소 구매 수량 1, 최대 구매 수량 10
//10개 이상 구매하려고 하면 '최대 구매 수량입니다'
const numInput = document.querySelector('#num')
const minusBtn = document.querySelector('#minus')
const plusBtn = document.querySelector('#plus')
const priceOutput = document.querySelector('.price')
let num = 1
let price = 1000
let total = 0

//초기 수량 1 설정 
numInput.value = num
plusBtn.addEventListener('click',()=>{
    //버튼 클릭 시 수량 최대 10까지 증가
    if(num < 10){
        num++
        numInput.value = num
        //수량이 증가 될때 가격 증가
        total = num * price
        priceOutput.innerHTML = total.toLocaleString('ko-kr')+'원'
    }
    //수량이 10개 됐을 때 버튼을 또 누를 때 실행메세지
    if(num === 10){
        alert('최대구매수량입니다')
    }
})
minusBtn.addEventListener('click',function(){
    if(num > 1){
        num--
        numInput.value = num
    }
})
