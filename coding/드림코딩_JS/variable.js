'use strick';

//2.Variable
//let (added in ES6추가됨)

let global = 'global';
{
let name = 'elli';
console.log(name);
name = 'hello';
}
console.log(global);


//var : 선언 전 값할당하면 undifined 출력. let 사용하면 선언 전 값 넣었으므로 에러발생 = 이걸 값 hoisting
//hoisting : 어디에 선언했느냐에 상관없이  항상 제일 위로 선언을 끌어올려준다.

//3. constant
//값 할당하면 이제 안바뀜.

const dayInweek = 7;
const maxNum = 5;

//4.Variable type
//primitive, number, string , boolean, null, infinity, -infinity, null, Nan

const infinity = 1/0; //숫자를 0으로 나누면 무한대값
const negativeInfinity = -1/0; //-의 숫자를 0으로 나누면 네가티브인피티니
const nAn = 'not a number'/2; //숫자가 아닌 값dms NAN으로 출력됨

const bigInt = 123456789012345678901234567890n; //숫자뒤에 n만 붙이면 bigInt로 인식한다.최근에 추가됨,크롬과 파폭만 인식.

const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`); //키보드 숫자 1옆의 `` 표시 사용해야 출력됨

//5.Dynamic typing : 선언할떄 어떤타입인지 설정하지않고 프로그래밍 동작할 때 설정할수있음.
let text = 'hello';
console.log(`value : ${text}, type: ${typeof text}`);