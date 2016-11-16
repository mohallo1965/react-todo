

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


    describe('filterTodos',() =>{

        var todos = [{id:1,text:'some text',completed:true},{id:2,text:'other text here',completed:false},{id:1,text:'some text here',completed:true}];

        it("should return all item if show completed is true",() =>{

             var filteredTodos = TodoAPI.filterTodos(todos,true,'');
             expect(filteredTodos.length).toBe(3);     

        });

        it("should return all non completed items ",() =>{

             var filteredTodos = TodoAPI.filterTodos(todos,false,'');
             expect(filteredTodos.length).toBe(1);     

        });

        it("should sort by completed status ",() =>{

             var filteredTodos = TodoAPI.filterTodos(todos,true,'');
             expect(filteredTodos[0].completed).toBe(false);     

        });

        it("should filter todo by  search text",() =>{
            var filteredTodos = TodoAPI.filterTodos(todos,true,'some');
            expect(filteredTodos.length).toBe(2);   
        });

     
         it("should return all filtered todos if text is empty",() =>{
            var filteredTodos = TodoAPI.filterTodos(todos,true,'');
            expect(filteredTodos.length).toBe(3);   
        });

     
        it("should return all filtered todos if text is found ",() =>{
            var filteredTodos = TodoAPI.filterTodos(todos,true,'hello');
            expect(filteredTodos.length).toBe(0);   
        });

      
        



    });

     
});






