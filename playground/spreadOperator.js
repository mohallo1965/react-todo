/** 
function add (a,b){

    return a+b;
}

console.log(add(3,1));

var toAdd = [9,5];
console.log(add(...toAdd));//spreds out it values .so it will be 3 +1 




var groupA = ['jenn ','corey'];
var groupB = ['Vikran'];
var final = [3,...groupA];  //final will now be [3,'jenn','corey']
*/

function greet(name,age){
   console.log("hi "+name +"I am:"+age);
}
var person = ['Andrew',25];
var personTwo = ['Jen',29];

greet(...person);
greet(...personTwo);

var names = ['Mike','Jill'];
var finalName = ['Martin',...names];

 var  node = {
                 id:1,
                 text:'hello there',
                 completed:false
};

var newNode = {...node,text:'Martin'};


var state = [ {id:1,text:'hi',completed:false,completedAt:undefined},
             {id:2,text:'Hello',completed:true,completedAt:undefined}
  ]

console.log('state size is '+state.length);

var finalState = [...state,
                  {id:1,text:'hi',completed:false,completedAt:undefined}];

console.log('state size is now'+finalState.length);

