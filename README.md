# javascript(ECMAScript)
* 자바스크립트는 절차적언어, 객체지향언어이다.
## 자바스크립트 작성위치
* `<head>`,`<body>` 내에 `<script>` 작성 가능
* 내부스크립트 `<script>...</script>`
* 외부스크립트 `<script src="url"></script>`
* 자바스크립트 성능 향상 추가 옵션 `defer`, `async`
## 자바스크립트 변수
* `변수생성키워드 생성변수명 대입연산자 대입값;`
### 변수생성 키워드 종류
1. `var` : 중복선언 거르지 못함. ECMA Script 구버전의 오래된 변수 선언문
2. `let` : 중복선언 불가능하고 대입된 값을 언제든 변경할 수 있다.
3. `const` : 상수(변하지 않는 값), 선언과 동시에 대입이 이루어져야 한다.
### 기초 연산자
1. `=` : 대입연산자 `let x = data`
2. `+` : 연결연산자 `x + '1'`
3. `+=` : 복합대입연산자 `x += y` -> `x = x+y`
--------------------
## value
* form 태그에 삽입되는 값 속성(input, option, select, button, textarea)
* form 태그 내에 작성했을 땐 미리 입력된 값 표현 가능
* javascript의 DOM.속성 `ex)DOM.value` 로 처리했을 땐 해당 DOM의 미리 입력된 값부터 사용자가 입력하는 신규 값까지 모두 인식할 수 있다.
1. 쇼핑몰의 상품 수량
2. 쇼핑몰의 총 주문 가격
3. 예약페이지의 여행 인원 수 등등...
* 주의사항 -> value속성은 form전용이므로 다른 태그일때 해당 값을 알고 싶다면 다른 속성 및 메서드를 사용해야 한다.
* 주의사항 -> `DOM.value`로 값 처리 시 숫자를 쓰더라도 문자열(string)으로 인식하기 때문에 필요한 경우 `Number()` 메서드를 활용해 (Number) 데이터타입으로 변환해야 한다. ex `Number(객체.value())`
# 객체.innerHTML
* `객체.innerHTML;`특정 객체의 자식, 자손 HTML 읽기
* `객체.innerHTML = 값;` HTML 삽입 및 변경 
# innerText
* `객체.innerText;` 객체의 자식, 자손 텍스트 노드 읽기(HTML X)
* `객체.innerText = 값;` 텍스트 노드 삽입 및 변경(HTML X)
# appendChild
* `객체.appendChild()`
* `객체.객체.appendChild()`
* `객체.속성.appendChild()`
* `객체.속성.속성.appendChild()`
* 객체의 마지막 자식 노드 위치에 `()` 괄호 안 값 추가
# createElement
* `document.createElement()` 
* 요소 노드 자바스크립트 내에서 동적인 용도로 생성할 경우
# 논리연산자와 비교연산자, 논리데이터
## 논리데이터

## 비교연산자

## 논리연산자