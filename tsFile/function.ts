// 完整函数类型
let myAdd: (base: number, inc: number) => number = function (x: number, y: number): number { return x + y }
// 推断类型
let myAdd2 = function(x: number, y: number): number { return x + y; };
function buildName(firstName = 1, lastName: string) {
    return firstName + " " + lastName;
}
buildName(2,'2')    
