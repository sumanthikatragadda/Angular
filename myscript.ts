//console.log("hello");
/*let mystring:string;
let myNumber:number;
let myStatus:boolean;
mystring="TypeScript"
myNumber=12;
myStatus=true;
console.log(mystring);
console.log(myNumber);
console.log(myStatus);*/
/*let mydata:any;
mydata="helloo";
console.log(mydata);
mydata=12+21;
console.log(mydata);
let mystring:string;
mystring="welcome to chennai";
console.log(mystring.slice(0,3));
let myNumber:number;
myNumber=100;
console.log(myNumber.toString()+"my result");*/
/*let mysArray:string;
let mynArray:number[];
mysArray=["Hello","java"];
{
console
}*/
interface myInterface
{
    Name:string;
    Title:string;
}
function Ifunction(mydata:myInterface):string
{
    return(mydata.Name+""+mydata.Title);
}
let dat={Name:"shourya",Title:"trainee"}
console.log(Ifunction())
