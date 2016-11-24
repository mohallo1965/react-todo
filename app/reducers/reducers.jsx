

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