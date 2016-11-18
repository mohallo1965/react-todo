var React = require('react');

var moment = require('moment');

var Todo = React.createClass({

   render:function(){

      

      var {text,id,completed,createdAt,completedAt} = this.props;

      var todoClassName = completed ? 'todo todocompleted' : 'todo';

      var renderDate = () =>{
          var message = 'Created:' ;
          var timestamp = createdAt;

          if(completed){
              message = 'Completed:';
              timestamp = completedAt;
          }

          return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
      }
     
       

       return(
         <div className = {todoClassName} onClick = { () =>{
             console.log('On Click pressed');

             this.props.onToggle(id);
         }}>
            <div>
              <input type="checkbox" checked={completed} />
            </div>
            <div className="todo_subtext">
              <p>{text} </p>
              <p>{renderDate()} </p>
            </div>
         </div>

       )
   }
});


module.exports = Todo;