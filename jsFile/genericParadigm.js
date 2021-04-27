// 泛型 需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。
function identity(arg) {
    return arg;
}
var output1 = identity('jjj');
// 类型推论
var output = identity('sss');
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
// 声明一个泛型函数
function iden(arg) {
    return arg;
}
var myFan = iden;
//使用带有调用签名的对象字面量来定义泛型函数
function iden2(arg) {
    return arg;
}
var myFan2 = iden2;
var gen = function (arg) {
    return arg;
};
function id(arg) {
    return arg;
}
//传入一个类型参数来指定泛型类型
var myId = id;
//泛型类
var Fan = /** @class */ (function () {
    function Fan() {
    }
    return Fan;
}());
var fan = new Fan();
fan.value = 1;
fan.add = function (x, y) { return x + y; };
console.log(fan.add(1, 3));
function logging(arg) {
    console.log(arg.length);
    return arg;
}
// logging(3) error 不含length
logging('3');
//在泛型约束中使用类型参数
function getProperty(obj, key) {
    return obj[key];
}
var xx = { a: 'aaa', b: 'bbb' };
getProperty(xx, 'a');
function create(c) {
    return new c();
}
