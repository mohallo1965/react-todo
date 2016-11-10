var React = require('react');

var TodoSearch = require('TodoSearch');

var TodoList = require('TodoList');

var AddTodo = require('AddTodo');

var uuid = require('node-uuid');



var TodoApp = React.createClass({

    getInitialState:function(){

      return {

        todos:[

          {
            id:uuid(),
            text:'walk the dog'
          },
          {
            id:uuid(),
            text:'Clean the yard'
          },
          {
            id:uuid(),
            text:'Clean the Garage'
          },
          {
            id:uuid(),
            text:'shovel the snow'
          }


        ],
        showCompleted:false,
        searchText:''

      }
        
    },
    addTexts:function(text){

      console.log('adding text');

      var {todos} = this.state;
      var maxId = todos[todos.length -1].id;

      var todo = {id:maxId+1,text:text};

      todos.push(todo);
      return todos;

    },
    handleAddTodo:function(text){
        alert('new todo:'+text);

        var {todos} = this.state;

        if(text.length > 0){

           console.log('Adding a new todo:'+todos.length);
           
           //more primitive way of doing this
           //this.setState({
            // todos:this.addTexts(text)
           //})
           //Using the spread operator .Take the current todos array of objects and spread it out and add the new object.
           this.setState({

             todos:[
               ...this.state.todos,
               {
                 id:uuid(),
                 text:text
               }
             ]

           })
           
        }
    },
    handleSearch:function(showCompleted,searchText){

      console.log('handling search..'+showCompleted);

       
      this.setState({
           showCompleted:showCompleted,
           searchText:searchText.toLowerCase()
      });
      

    },

    render:function(){

       console.log('Rendering app...');

       var {todos} = this.state;

       
        return(
          <div>
            TODO App 

            <TodoSearch onSearch={this.handleSearch}/>

            <TodoList todos={todos} />

            <AddTodo onAddTodo={this.handleAddTodo}/>

          </div>

        );
    }

});



module.exports = TodoApp;