//console print
console.log("Hello World")

//function
function e(){
    console.log('Hello TypeScript')
}
e();

//function with for loop
function s1(){
    for (let i = 0; i < 5; i++) {
        console.log(i)    
    }
    // console.log(i) Error: becouse let data type replace var
}
 s1()
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
let backGround = color.Red;

//Assertions
let message; // any type variable so that it might be confuse when assign to another variable 
message  = 'abc'
let endsWithc = (message).endsWith('c');//OR let endsWithc = (message as string).endsWith('c') else let message = 'abc'

//Arrow Function
let log = function(message){
console.log(message)
}
let DoLog = (m) => console.log(m);
//callto it
 DoLog({
   m:545
 })
//interface
interface Point{ //Encapsul
    x:number,
    y:number
}
let drawpoint =(Point:Point) => {}
drawpoint({
    x:1,
    y:2
})

{
//class (oop consept Cohesion)
class Point{
    x1:number;
    y1:number;

    draw(){

    }
    getDistance(another:Point){

    }
}
}
{
import { Component } from '@angular/core';
import { courseservice } from './component.service';
@Component({
  selector: 'app-hedder',
  template:
    `<h1>{{Title}}</h1>
    <h1 [textContent] = 'Title'></h1>
    <ul>
<li  *ngFor = 'let c of cc'>{{c}}</li>
    </ul>
    <img src = '{{imgURL}}' />
    <img [src] = "imgURL"/>
    <button class = "btn btn-primary"[class.active]='isActive'> Save</button>
    <button  [style.backgroundColor]=" isActive ? 'green': 'white' "></button>
    `
          
 
})
export class HedderComponent  {
Title = "Courses Are:"
cc
isActive = false
imgURL = 'http://lorempixel.com/900/500'
constructor(se : courseservice){ 
// make ts file 
//   export class courseservice{
//     gets(){
//         return ['Biology','Java'];
//     }
// }
//add class in app.module Like >> "providers:[courseservice]"
this.cc = se.gets();
}
}
}