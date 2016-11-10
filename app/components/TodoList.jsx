var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

   render:function(){

       var {todos}  = this.props;

       console.log('TodoList todos size is:'+todos.length); 

       //var items = todos.map(function(item){
       //         return <li>{item.text} </li>

      var renderTodos = function(){

           return todos.map( (todo) =>{
              return(
                  //using the spread operator allows us to pass down
                  //the individual props in the todo object
                  <Todo key={todo.id} {...todo}/>
 
              );
           });
      };

       return(
         <div>
             <ul>
             {renderTodos()}
             </ul>
         </div>

       )
   }
});


module.exports = TodoList;