// 泛型 需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。
function identity<T>(arg: T): T {
    return arg
}
let output1 = identity<string>('jjj')
// 类型推论
let output = identity('sss')

function logLength <T>(arg:T[]):T[]{
    console.log(arg.length);
    return arg
}

// 声明一个泛型函数

function ide<T>(arg:T):T{
    
    return arg
}
let myFan: <U>(arg:U)=>U = ide

//使用带有调用签名的对象字面量来定义泛型函数

function ide2<T>(arg:T):T{
    
    return arg
}
let myFan2: {<U>(arg:U):U} = ide2

//泛型接口  (描述函数)

interface GenericIde {
    <T>(arg:T):T;
}
let gen: GenericIde = function<T>(arg:T):T{
    return arg
}

//泛型参数当作整个接口的一个参数  不再描述泛型函数

interface Genre<T> {
    (arg:T):T;
}
function id<T>(arg:T):T{
    return arg
}
//传入一个类型参数来指定泛型类型
let myId: Genre<string>= id

//泛型类
class Fan<T> {
    value:T;
    add:(x:T,y:T)=>T
}
let fan = new Fan<number>()
fan.value=1
fan.add = (x,y)=>x+y
console.log(fan.add(1,3));

//我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束：
interface Lengthwise {
    length:number;
}
function logging<T extends Lengthwise>(arg:T):T{
    console.log(arg.length);
    return arg
    
}
// logging(3) error 不含length
logging('3')

//在泛型约束中使用类型参数
// function getProperty(obj:T,key:K){    error
//     return obj[key]  
// }
// let xx = {a:'aaa',b:'bbb'}
// getProperty(xx,'a')

// 在泛型里使用类类型
function create<T>(c: {new(): T; }): T {
    return new c();
}