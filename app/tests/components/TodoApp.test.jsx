var  React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');


describe('TodoApp' ,() =>{

   it('Does exist', () =>{

       expect(TodoApp).toExist();

   });

   it('Should add todo to the todos state on handleAddToDo',() => {

       var toDoText = 'cut the grass';

       var toDoApp = TestUtils.renderIntoDocument(<TodoApp/>); 

       console.log('Todos before emptying is:'+toDoApp.state.todos.length);

       toDoApp.setState({todos:[]});//empty the the todos
       toDoApp.handleAddTodo(toDoText);

       //expect(toDoApp.state.todos[toDoApp.state.todos.length-1].text).toBe(toDoText);
       expect(toDoApp.state.todos[0].text).toBe(toDoText);
   
   
   });

});