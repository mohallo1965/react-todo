var  React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList' ,() =>{

   it('Does Exist',() =>{

       expect(TodoList).toExist();

   });

   it('should render one todo component for each todo item',()=>{

       var todos = [ 
               {id:1,text:'clean the garage'},
               {id:2,text:'clean the fridge'}
               ]

       var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>); 

       var toDoListTodos = todoList.props.todos;
       expect(toDoListTodos.length).toBe(todos.length);

       console.log('toDoListSize is ',toDoListTodos.length);

       //find the Todo components rendered in the dodoList component and return an Array of those components .
       var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);
       expect(todoComponents.length).toBe(todos.length);


   });
});