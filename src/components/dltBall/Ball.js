
import style from "./Ball.module.css"

function BallRed(props) {
   return (
      <div className={[style.ball,style["ball_red"]].join(" ")}>{props.value}</div>
   );
}

function BallBlue(props) {
   return (
      <div className={[style.ball,style["ball_blue"]].join(' ')}>{props.value}</div>
   );
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
   BallRed,
   BallBlue,
   BallBlank,
   BallTitle
};