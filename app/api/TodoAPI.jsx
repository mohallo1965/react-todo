
var $ = require('jquery');


module.exports = {

    setTodos:function(todos){

       if($.isArray(todos)){

           localStorage.setItem('todos',JSON.stringify(todos));

           return todos;
       }

       
    },

    getTodos:function(){
        
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try{
           todos = JSON.parse(stringTodos);
        }catch(e){
           
        }

        return $.isArray(todos) ? todos : [];
        

    },
    filterTodos:function(todos,showCompleted,searchText){
        var filteredTodos = todos;

        //Filter by showcompleted
        filteredTodos = filteredTodos.filter((todo)  => {

            //Uncompleted Items and if the completed flag is checked show completed items as well  
            return !todo.completed || showCompleted;
  
        });

        //filter by searchText
        console.log('Doing Filter on Search Text');
        filteredTodos = filteredTodos.filter((todo)  => {

            var text = todo.text.toLowerCase();
            
            //return every item if searchText is null  
            if(searchText.length == 0)
              return true;
            
            
            if(text.indexOf(searchText) >= 0 ){
  
               return true;
            }else{
               return false;
            }
        });
        


        //start todos with non completed first
        filteredTodos.sort((a,b) =>{
            
            if(a.completed === false && b.completed === true)
               return -1;
            else if(a.completed === true && b.completed === false)
               return 1;
            else
               return 0;
        });

        return filteredTodos;
    }
};
