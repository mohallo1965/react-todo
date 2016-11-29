var redux = require('redux');
var {searchTextReducer,showCompletedReducer,todosReducer} = require('reducers');

export var configure = () => {

    var reducer = redux.combineReducers({
        searchText:searchTextReducer,
        showCompleted:showCompletedReducer,
        todos:todosReducer
    });

    //redux.compose is a chrome developer aid.if there is no chrome devToolsExtension just pass through and stay working .
    var store = redux.createStore(reducer, redux.compose(
        
        window.devToolsExtension ? window.devToolsExtension() : (f) => {
            return f;
        }
    ));

    return store;
};




