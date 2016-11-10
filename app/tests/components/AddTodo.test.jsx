var  React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var AddTodo = require('AddTodo');

describe('AddTodo',() =>{

    it('Does Exist',() =>{

      expect('AddTodo').toExist();

    });

    it('submitted text is',() =>{

        //spy is the called function and value 
        var spy  = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>); 

        addTodo.refs.todoText.value = 'Clean the Garage';

        var $el = $(ReactDOM.findDOMNode(addTodo));

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('Clean the Garage');


        
    });

    it('submitted blank text did not call the spy because of validation',() =>{

        //spy is the called function and value 
        var spy  = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>); 

        addTodo.refs.todoText.value = '';

        var $el = $(ReactDOM.findDOMNode(addTodo));

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();


        
    });
});