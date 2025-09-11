console.log("Hello World");

function first() {
    second();
    console.log("First");
}
function second() {
    third();
    console.log("Second");
}
function third() {
    console.log("Third");
}
function run(){
    console.log("3초");
}
setTimeout(run,3000);
first();

let a = 1;
a = 0;

const b = 1;

let num1 = 1;
let num2 = 2;
let result = 3;
// 1 더하기  2는 3
let str = `${num1} 더하기 ${num2}는 ${result}`;
console.log(str);

const sayNoden= () => {
    console.log('Node');
}
let es = 'ES';
const newObj = {
    sayJs(){
        console.log('JS');    
},
[es+6] :'Fantastic'
}
newObj[es+6] = 'Fantastic';
console.log(newObj.ES6);


var relationship1 = {
    name: 'zero',
    friends:['nero','hero','xero'],
    add : ['한누리관','송백관'],
    logFriends: function() {
        var that = this;
        this.add.forEach(addlist => {
            console.log(this.name,friend);
        });
    },
};
relationship1.logFriends();