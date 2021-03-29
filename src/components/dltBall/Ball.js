
import style from "./Ball.module.css"

function Ball(props){
 return (
    <div className={style.ball}></div>  
 );
}
class Ball extends React.Component{
   constructor(props){
      super(props)
   }
   render(){
      return (
         <div></div>
      );
   }
}

export default Ball;