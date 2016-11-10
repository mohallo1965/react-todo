var  React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');


describe('TodoSearch' ,() =>{

   it('Does Exist',() =>{

       expect(TodoSearch).toExist();

   });

   it('should call onsearch with input text',() =>{

       var searchText = 'Walk Dog';
       //this is going to let us pass a function.
       var spy  = expect.createSpy();
       var toDoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>); 

       toDoSearch.refs.searchText.value = searchText;

      
       //var $el = $(ReactDOM.findDOMNode(toDoSearch));

       //TestUtils.Simulate.change($el.find('search'));
       TestUtils.Simulate.change(toDoSearch.refs.searchText);

       //expect the spy function to have been called with the following parameters.
       expect(spy).toHaveBeenCalledWith(false,searchText);

   });

   it('should call onsearch with check box checked',() =>{

        var searchText = '';
       //this is going to let us pass a function.
       var spy  = expect.createSpy();
       var toDoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>); 

       toDoSearch.refs.showCompleted.checked = true;

       TestUtils.Simulate.change(toDoSearch.refs.showCompleted);

       expect(spy).toHaveBeenCalledWith(true,searchText);




   });
   it('should call onsearch with check box checked and value in search field',() =>{

        var searchText = 'Chilling out';
       //this is going to let us pass a function.
       var spy  = expect.createSpy();
       var toDoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>); 

       toDoSearch.refs.showCompleted.checked = true;
       toDoSearch.refs.searchText.value = searchText;

       TestUtils.Simulate.change(toDoSearch.refs.showCompleted);

       expect(spy).toHaveBeenCalledWith(true,searchText);

   });


});