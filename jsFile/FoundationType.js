var isDone = true;
var num = 11;
var str = 'sjy';
var listNum = [1, 2, 3];
var listStr = ['1', '2'];
var listObjArray = [{ name: 'sjy', age: 99 }];
var listStrNum = [1, '2'];
// 数组泛型
var listFan = [1, 2, 3];
var listObj = [{ name: 'ssss' }];
var listAny = [1, '2', {}];
// 元组
var x = ['1', 2];
// x[3]='111'  // error
var d = x[0].substr(0);
console.log(d);
// 枚举:
// 使用const接受编译成js后会省掉很多代码 const enum Color{}
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Blue"] = "BLUE";
    Color["Green"] = "GREEN";
})(Color || (Color = {}));
var targetColor = Color['Blue'];
console.log(targetColor);
console.log(Color['RED']); // undefined  only Red,Blue,Green为数字123时候，可以Color[1]取到对应的属性
// 通过枚举的值得到它的名字
var Col;
(function (Col) {
    Col[Col["Red"] = 1] = "Red";
    Col[Col["Blue"] = 2] = "Blue";
    Col[Col["Green"] = 3] = "Green";
})(Col || (Col = {}));
console.log(Col[2]); // Blue    如果枚举的值是字符串的'1'也不可以，仅仅是数字ok
// Any 类型
var notSure = 2;
notSure = true;
// interface Object{
//     length:3
// }
var obj = 4;
// obj.length // 声明一个Object接口添加length属性，就不报错了
// Void类型
function warn() {
    console.log('warn');
}
// null ,undefined类型  默认它们是所有类型的子类型
var nu = null;
var un = undefined;
// Never类型 永远不存在的值的类型 
function error(message) {
    throw new Error(message);
}
// 类型断言 我比ts更了解某个值的详细信息
var someValue = '1';
var len = someValue.length;
console.log(len);
var le = someValue.length;
