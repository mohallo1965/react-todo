var expect = require('expect');
var reducers = require('reducers');

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

});