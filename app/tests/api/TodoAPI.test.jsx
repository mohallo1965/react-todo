

var TodoAPI = require('TodoAPI');
var expect = require('expect');

describe('TodoApi',() =>{

    it('should exist',()=>{

        expect(TodoAPI).toExist();

    });

    it('Add todo to localstorage',() =>{

        var todosInsert = [{id:12,text:'chill out',completed:false}];

        var insertedTodos = TodoAPI.setTodos(todosInsert);
        //expect(insertedTodos[0].id).toBe(12);
        
        var actualItem = JSON.parse(localStorage.getItem('todos'));
        expect(actualItem).toEqual(todosInsert);
 
    });

    

});

describe('getToDos()',() =>{

    it('should return empty array',() =>{

         var todos = [];
         TodoAPI.setTodos(todos);

         var todosGet = TodoAPI.getTodos();

         expect(todosGet).toEqual([]);


    });

    it('Should return todo if valid Array in local Storage',() =>{

        var todos = [{id:122,text:'chill out',completed:false}];
        localStorage.setItem('todos',JSON.stringify(todos));

        //TodoAPI.setTodos(todosInsert);

        var todosGet = TodoAPI.getTodos();

        expect(todosGet).toEqual(todos);

        todosGet.forEach(function(item,index){
             
             console.log(item.id);

        });
    });

     
});






