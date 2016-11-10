var React = require('react');
var TodoList = require('TodoList');



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

    render:function(){

       var {todos} = this.state;

       console.log('todos size is:'+todos.length);

        return(
          <div>
            TODO App 
            <TodoList todos={todos} />
          </div>

        );
    }

});



module.exports = TodoApp;