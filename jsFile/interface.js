// interface
function printLabel(label) {
    console.log(label);
}
printLabel({ label: 'la' });
function squire(squ) {
    console.log(squ);
}
squire({ color: 'red' });
squire({ color: 'red', height: '222', 'ooo': 'sss' });
var onlyObj = { x: 1, y: 2 };
var f1 = function (str, num) { return str + num; };
var f2 = function (str, num) { return str + num; };
var myArr = ['a', 'b'];
console.log(myArr[0]);
var objStr = { name: 'sjy', sex: '男' };
console.log(objStr['name']);
var Clock = /** @class */ (function () {
    function Clock(name) {
        this.str = name;
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
// let square: Square;
var square = {};
square.color = 'blue';
square.sideLength = 11;
square.sideLength = 22;
function getCounter() {
    var counter = function (start) {
        console.log(start);
    };
    counter.interval = 111;
    counter.reset = function () { };
    return counter;
}
var dd = getCounter();
dd(2);
var f3 = {};
f3.interval = 111;
var f4 = function (start) {
    console.log(start);
};
f4.interval = 444;
f4(444);
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
// error
// class Image implements SelectableControl {
//     select()
// }
