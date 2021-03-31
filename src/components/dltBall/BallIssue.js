import {BallTitle,BallBlank,BallColor,BALL_COLOR_MENU} from "./Ball";
import React from "react";
import style from "./BallIssue.module.css";

function BallIssue(props){
    return (
        <div className={style["ball_issue"]}>
            <BallTitle issueNo={props.dltIssueNo}></BallTitle>
            <BallIssueRed issueRed={props.dltIssue?props.dltIssue.r:null} ></BallIssueRed >
            <BallBlank></BallBlank>
            <BallIssueBlue issueBlue={props.dltIssue?props.dltIssue.b:null}></BallIssueBlue>
            <div className={style["issue_time"]}>{props.dltIssue?props.dltIssue.time:null}</div>
        </div>
    );
}

class BallIssueRed extends React.Component{
    drowBall(){
        let redArry=[];
        let index=0
        for (let i = 1; i < 36; i++) {
            let item;
            let ballColor=BALL_COLOR_MENU.BALL_RED;
            if(this.props.issueRed && this.props.issueRed[index]==i){
                index++;
                ballColor=BALL_COLOR_MENU.BALL_RED_SELECT;
            }
            item=<BallColor  value={i} ballColor={ballColor} selectBallColor={BALL_COLOR_MENU.BALL_RED_SELECT}></BallColor>
            redArry.push(item);
        }
        return redArry;
    }
    render(){
        return (
            <div className={style["ball_issue"]}>{this.drowBall()}</div>
        );
    }
}

class BallIssueBlue extends React.Component{
    drowBall(){
        let redArry=[];
        let index=0
        for (let i = 1; i < 13; i++) {
            let item;
            let ballColor=BALL_COLOR_MENU.BALL_BLUE;
            if(this.props.issueBlue && this.props.issueBlue[index]==i){
                index++;
                ballColor=BALL_COLOR_MENU.BALL_BLUE_SELECT;
            }
            item=<BallColor  value={i} ballColor={ballColor} selectBallColor={BALL_COLOR_MENU.BALL_BLUE_SELECT}></BallColor>
            redArry.push(item);
        }
        return redArry;
    }
    render(){
        return (
            <div className={style["ball_issue"]}>{this.drowBall()}</div>
        );
    }
}
export default BallIssue;