var  React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var Todo = require('Todo');

describe('Todo',() =>{

    it('Does Exist',() =>{

         expect(Todo).toExist();
    });

    it('should call ontoggle prop with id on click',() => {
        var todoData = {

            id:199,
            text:'write todo.test.jsx test',
            completed:true
        }

        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);

       
        var $el = $(ReactDOM.findDOMNode(todo));
        console.log("el is:"+$el.html());
        //TestUtils.Simulate.click($el[0]);
           
        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(199);

    });
});