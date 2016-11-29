var expect = require('expect');
var reducers = require('reducers');
var moment = require('moment');

//deep freeze ensures that reducers remain pure functions .They dont modify the passed object or value .
var df = require('deep-freeze-strict');

describe('Reducers',() =>{

    describe('searchTextReducer',() => {

      it('should set search text',() => {

          var action = {
              type: 'SET_SEARCH_TEXT',
              searchText:'dog'
          };

          //passing arguements to reducer through deep freeze.ensures reducers remain pure functions
          var res = reducers.searchTextReducer(df(''),df(action));
          expect(res).toEqual(action.searchText);

      });

      it('show completed status gets flipped',() =>{

          var action = {
              type:'TOGGLE_SHOW_COMPLETED',
              showCompleted:false
          };

          //passing arguements to reducer through deep freeze.ensures reducers remain pure functions
          var res =reducers.showCompletedReducers(df(false),df(action));
          expect(res).toBe(true);
      });

    });

    describe('todoReducer',() =>{

        it('should addd new todo',() =>{

            var action = {
                type:'ADD_TODO',
                text:'clean garage'
            }


            var res = reducers.todosReducer(df([]),df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);

        });

        it('should toggle todos',() =>{

            var todos = [
                {
                 id:1,
                 text:'clean the garage',
                 completed:false,
                 createdAt:moment().unix(),
                 completedAt:undefined
               }
            ];


            var action = {
                type:'TOGGLE_TODO',
                id:1
            }

            var res = reducers.toggleTodo(df(todos),df(action));
            expect(res.length).toEqual(1);

            expect(res[0].completed).toEqual(true);


        });


    });

});