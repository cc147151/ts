// 完整函数类型
var myAdd = function (x, y) { return x + y; };
// 推断类型
var myAdd2 = function (x, y) { return x + y; };
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 1; }
    return firstName + " " + lastName;
}
buildName(2, '2');
