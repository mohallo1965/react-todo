var React = require('react');

var Todo = React.createClass({

   render:function(){

      var {text,id,completed} = this.props;
     
       

       return(
         <div onClick = { () =>{
             console.log('On Click pressed');

             this.props.onToggle(id);
         }}>
            <input type="checkbox" checked={completed} />
             {text} 
         </div>

       )
   }
});


module.exports = Todo;