let isDone:boolean=true;
let num:number = 11
let str : string = 'sjy'
let listNum: number[]=[1,2,3]
let listStr: string[]=['1','2']
let listObjArray: {name: string,age: number}[]=[{name:'sjy',age:99}]
let listStrNum: (string|number)[]=[1,'2']
// 数组泛型
let listFan: Array<number>=[1,2,3]
let listObj: Array<object>=[{name:'ssss'}]
let listAny:any[]=[1,'2',{}]
// 元组
let x: [string,number]=['1',2]
// x[3]='111'  // error
let d = x[0].substr(0)
console.log(d);
// 枚举:
// 使用const接受编译成js后会省掉很多代码 const enum Color{}

 enum Color {
    Red="RED",
    Blue="BLUE",
    Green="GREEN"
}
let targetColor:Color=Color['Blue']
console.log(targetColor);
console.log(Color['RED']);// undefined  only Red,Blue,Green为数字123时候，可以Color[1]取到对应的属性

// 通过枚举的值得到它的名字

enum Col {
    Red=1,
    Blue,
    Green
}
console.log(Col[2]); // Blue    如果枚举的值是字符串的'1'也不可以，仅仅是数字ok
// Any 类型
let notSure: any=2
notSure=true
// interface Object{
//     length:3
// }
let obj:Object=4
// obj.length // 声明一个Object接口添加length属性，就不报错了

// Void类型

function warn(): void{
    console.log('warn');
}
// null ,undefined类型  默认它们是所有类型的子类型
let nu:null=null
let un:number=undefined
// Never类型 永远不存在的值的类型 
function error(message:string):never{
    throw new Error(message)
}
// 类型断言 我比ts更了解某个值的详细信息
let someValue:any='1'
let len:number = (<string>someValue).length
console.log(len);
let le:number=(someValue as string).length
