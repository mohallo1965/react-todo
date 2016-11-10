var React = require('react');
var TodoList = require('TodoList');

var AddTodo = require('AddTodo');



var TodoApp = React.createClass({

    getInitialState:function(){

      return {

        todos:[

          {
            id:1,
            text:'walk the dog'
          },
          {
            id:2,
            text:'Clean the yard'
          },
          {
            id:3,
            text:'Clean the Garage'
          },
          {
            id:4,
            text:'shovel the snow'
          }


        ]
      }
        
    },
    handleAddTodo:function(text){
        alert('new todo:'+text);
    },

    render:function(){

       var {todos} = this.state;

       console.log('todos size is:'+todos.length);

        return(
          <div>
            TODO App 
            <TodoList todos={todos} />

            <AddTodo onAddTodo={this.handleAddTodo}/>

          </div>

        );
    }

});



module.exports = TodoApp;