
import React from "react";
import style from "./Ball.module.css"

const BALL_COLOR_MENU={
   "BALL_RED":"ball_red",
   "BALL_BLUE":"ball_blue",
   "BALL_RED_SELECT":"ball_red_select",
   "BALL_BLUE_SELECT":"ball_blue_select"
}

class BallColor extends React.Component{
   constructor(props){
     super(props);
     this.state = {
      ballColor: props.ballColor,
      selectBallColor:props.selectBallColor,
      oldballColor: props.ballColor
      };
   }
   handleClick=()=> {
      this.setState(state => ({
         ballColor:this.state.ballColor==this.state.selectBallColor?this.state.oldballColor:this.state.selectBallColor
      }));
    }
   render(){
      return (
         <div className={[style.ball,style[this.state.ballColor]].join(" ")} onClick={this.handleClick}>{this.props.value}</div>
      );
   }
}


function BallBlank(props) {
   return (
      <div className={[style.ball, style["ball_black"]].join(" ")}>{props.value}</div>
   );
}
function BallTitle(props) {
   return (
      <div className={[style.ball, style["ball_title"]].join(' ')}>{props.issueNo}</div>
   );
}
export {
   BallBlank,
   BallTitle,
   BallColor,
   BALL_COLOR_MENU
};