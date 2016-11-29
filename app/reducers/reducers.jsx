

var moment = require('moment');
var uuid = require('node-uuid');

//Reducers are pure functions they dont update the arguements that get passed in
export var searchTextReducer = (state='',action) => {
    
    
    switch(action.type){

       case 'SET_SEARCH_TEXT':
          return action.searchText;

       default:return state;

    }
};


export var showCompletedReducers = (state=false,action) => {

    switch(action.type){

        case 'TOGGLE_SHOW_COMPLETED':
           return !state;
        default:
           return state;

    }
};


export var todosReducer = (state=[],action) => {

    switch(action.type){
        case 'ADD_TODO':
          return [
               ...state,
               {
                 id:uuid(),
                 text:action.text,
                 completed:false,
                 createdAt:moment().unix(),
                 completedAt:undefined
               }
          ];
       default:
          return state;
    }
}

export var toggleTodoOld = (state=[],action) => {

    switch(action.type){

        case 'TOGGLE_TODO':
           var todos = JSON.parse(JSON.stringify(state));

           var updatedTodos = todos.map( (todo) => {
           

               if(todo.id === action.id){
                    todo.completed = !todo.completed;

                    if(todo.completed)
                       todo.completedAt = moment().unix();
                    else
                       todo.completedAt = undefined;
               }
               return todo;

           });
           return updatedTodos;

        default:return state;
    }

}

export var toggleTodo = (state=[],action) => {

    switch(action.type){

        case 'TOGGLE_TODO':
                      
           return state.map( (todo) => {
           

               if(todo.id === action.id){
                    var nextCompleted = !todo.completed;


                    return {
                        ...todo,
                        completed:nextCompleted,
                        completedAt:nextCompleted ? moment().unix() : undefined

                    };
                    
               }
               

           });
           

        default:return state;
    }

}