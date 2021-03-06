var React = require('react');

var AddTodo = React.createClass({

    handleSubmit:function(e){
        e.preventDefault();

        var {onAddTodo} = this.props;

        var todoText = this.refs.todoText.value;

        
        if(todoText.length > 0){
            onAddTodo(todoText);

            this.refs.todoText.value = '';
        }else{
            this.refs.todoText.focus();
        }
        
        
        
    },
    render:function(){

        return(

           <div className="container_footer">
             <form onSubmit={this.handleSubmit}>
               <input type="text" ref="todoText" placeholder="what do you need to do"/>
               <button className='button expanded'>Add Todo</button>
             </form>
           </div>
        );

    }


});


module.exports = AddTodo;