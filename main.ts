//console print
console.log("Hello World")

//function
function e(){
    console.log('Hello TypeScript')
}
e();

//function with for loop
function s(){
    for (let i = 0; i < 5; i++) {
        console.log(i)    
    }
    // console.log(i) Error: becouse let data type replace var
}
function s()
const ColorR = "Red"
const ColorG = 'Green'

//Data types
let type :any; // let type;
type =43
type ='hello'
let type2 :string
type ='helllo'
 //type = 43 erroe only String
let e1 :number[] =[43,54,32]
let f:any[] =['ewe',433,true]


//Enum
enum color {Red =1,Blue =2}
let backGround = Color.Red;

//Assertions
let message; // any type variable so that it might be confuse when assign to another variable 
message  = 'abc'
let endsWithc = (<string>message).endsWith('c');//OR let endsWithc = (message as string).endsWith('c') else let message = 'abc'

//Arrow Function
let log = function(message){
console.log(message)
}
let DoLog = () => console.log();

//interface
interface Point{
    x:number,
    y:number
}
let drawpoint =(Point:Point) => {}
drawpoint({
    x:1,
    y:2
})