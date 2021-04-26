// interface

interface LabelledValue {
    label:string
}
function printLabel(label:LabelledValue):void {
    console.log(label);
}
printLabel({label:'la'})

// 可选属性

interface SquireConfig{
    color:string,
    width?:number,
    [propName: string]: any;
}
function squire(squ:SquireConfig):void {
    console.log(squ);
    
}
squire({color:'red'})
squire({color:'red',height:'222','ooo':'sss'})

// 只读属性 readonly

interface Only {
    readonly x:number;
    readonly y: number
}
let onlyObj: Only={x:1,y:2}
// onlyObj.x=333 error ,不可修改

// 接口描述函数类型  除了描述带有属性的普通对象外，接口也可以描述函数类型。

interface fun {
    (str:string,num?:number):string
}
let f1: fun = (str:string,num:number)=>str+num
let f2 = (str:string,num:number)=>str+num

// 可索引的类型

interface StringArray {
    [index:number]:string
}
let myArr: StringArray = ['a','b']
console.log(myArr[0]);

interface Obj{
    readonly [index:string]:string
}
let objStr: Obj={name:'sjy',sex:'男'}
console.log(objStr['name']);
// objStr.name='sss' 不允许修改 

// 类类型 用它来明确的强制一个类去符合某种契约  使用 implements

interface ClockInterFace {
    currentTime:Date;
    setTime(d:Date)  // "setTime" 隐式具有 "any" 返回类型，但可以从用法中推断出更好的类型。
}
class Clock implements ClockInterFace {
    currentTime:Date;
    str:string;
    constructor(name:string){
        this.str=name
    }
    setTime(d:Date){
        this.currentTime=d
    }
}

// 继承接口
interface Shape {
    color:string
}
interface PenStroke {
    penWidth:number
}
interface Square extends Shape,PenStroke {
    sideLength:number;
}
// let square: Square;
let square=<Square>{};
square.color='blue'
square.sideLength=11
square.sideLength=22

// 混合类型 接口可以描述javaScript里丰富的类型 一个对象可以同时作为函数和对象的使用,bing'dai'you
interface Counter {
    // 定义一个函数类型
    (start:number):string;
    interval:number;
    reset():void;
}
function getCounter(): Counter{
    let counter =<Counter> function(start:number){console.log(start);
    }
    counter.interval=111
    counter.reset=function(){}
    return counter
}
let dd = getCounter()
dd(2)
let f3 =<Counter> {}
f3.interval=111
let f4 = <Counter>function(start:number){
    console.log(start);
}
f4.interval=444
f4(444)
class Control {
    private state: any;
}

interface SelectableControl extends Control {
 
    select(): void;
}
let sss:SelectableControl;
