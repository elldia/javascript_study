console.log('test')

window.scrollTo({left:0, top:200})

//모든 소스가 로드된 후
/*
window.onload = () => {
    console.log('.')
    window.scrollTo({left:0, top:200})
}
*/

//즉시 처리
/*
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.scrollTo(0, 200);
    }, 0);
});
*/


const bg = document.querySelectorAll('.bg')
bg[0].addEventListener('click',()=>{
    window.scrollTo({left:0, top:bg[1].offsetTop})
})
