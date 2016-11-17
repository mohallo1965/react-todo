var  React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

var moment = require('moment');


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

       var createdAt = toDoApp.state.todos[0].createdAt;
       expect(createdAt.toString()).toMatch(/^\d+$/g);
       //var testValue = 1234;
       //expect(testValue.toString()).toMatch(/^\d+$/g);
       //expect('Hello Jasmine').toMatch(/jasmine/i); 
       expect(toDoApp.state.todos[0].createdAt).toBeA('number'); 

   
   });

   it('should toggle completed value when handleToggle called',() =>{
       
           var todo = {

               id:11,
               text:'Test Features',
               completed:false

           };
           var toDoApp = TestUtils.renderIntoDocument(<TodoApp/>); 

           toDoApp.setState({
               todos:[todo]
           });

           console.log("todo id is:"+toDoApp.state.todos[0].id);
           expect(toDoApp.state.todos[0].completed).toBe(false);

           toDoApp.handleToggle(11);

           expect(toDoApp.state.todos[0].completed).toBe(true);

           var completedAt = toDoApp.state.todos[0].completedAt;
           expect(completedAt.toString()).toMatch(/^\d+$/g);

   });

   it('Toggle from true to false completedAt is undefined',() =>{

           var todo = {

               id:145,
               text:'Test Features',
               completed:true,
               completedAt:moment().unix(),
               createdAt:moment().unix()

           };
           var toDoApp = TestUtils.renderIntoDocument(<TodoApp/>);
           toDoApp.setState({
               todos:[todo]
           });

           console.log('number of todos are:'+toDoApp.state.todos.length);

           toDoApp.handleToggle(145); 

           expect(toDoApp.state.todos[0].completedAt).toBe(undefined);

           //or you can test it this way .
           expect(toDoApp.state.todos[0].completedAt).toNotExist(undefined);

   });

});