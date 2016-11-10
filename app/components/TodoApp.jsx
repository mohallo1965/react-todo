var React = require('react');

var TodoSearch = require('TodoSearch');

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


        ],
        showCompleted:false,
        searchText:''

      }
        
    },
    handleAddTodo:function(text){
        alert('new todo:'+text);
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