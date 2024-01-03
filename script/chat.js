// "안녕" chat_txt에 입력 후 send_btn을 클릭하면 
// chat_list 에 <li> 태그로 chat_txt에 입력한 "안녕" 값을 출력하기
const chat_list = document.querySelector('.chat_list')//메세지 출력 위치
const chat_txt = document.querySelector('#chat_txt')//메세지입력창
const send_btn = document.querySelector('#send_btn')//보내기버튼
const ul = document.createElement('ul')
//보내기 버튼 클릭 시
send_btn.addEventListener('click',function(){
    ul.innerHTML += `<li>${chat_txt.value}</li>`;
    chat_list.appendChild(ul)
    chat_txt.value = ''
})