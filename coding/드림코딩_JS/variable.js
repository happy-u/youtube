'use strick';

//2.Variable
//let (added in ES6�߰���)

let global = 'global';
{
let name = 'elli';
console.log(name);
name = 'hello';
}
console.log(global);


//var : ���� �� ���Ҵ��ϸ� undifined ���. let ����ϸ� ���� �� �� �־����Ƿ� �����߻� = �̰� �� hoisting
//hoisting : ��� �����ߴ��Ŀ� �������  �׻� ���� ���� ������ ����÷��ش�.

//3. constant
//�� �Ҵ��ϸ� ���� �ȹٲ�.

const dayInweek = 7;
const maxNum = 5;

//4.Variable type
//primitive, number, string , boolean, null, infinity, -infinity, null, Nan

const infinity = 1/0; //���ڸ� 0���� ������ ���Ѵ밪
const negativeInfinity = -1/0; //-�� ���ڸ� 0���� ������ �װ�Ƽ������Ƽ��
const nAn = 'not a number'/2; //���ڰ� �ƴ� ��dms NAN���� ��µ�

const bigInt = 123456789012345678901234567890n; //���ڵڿ� n�� ���̸� bigInt�� �ν��Ѵ�.�ֱٿ� �߰���,ũ�Ұ� ������ �ν�.

const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`); //Ű���� ���� 1���� `` ǥ�� ����ؾ� ��µ�

//5.Dynamic typing : �����ҋ� �Ÿ������ ���������ʰ� ���α׷��� ������ �� �����Ҽ�����.
let text = 'hello';
console.log(`value : ${text}, type: ${typeof text}`);