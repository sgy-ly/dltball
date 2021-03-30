import {BallRed,BallBlue,BallTitle,BallBlank} from "./Ball";
import React from "react";
import style from "./BallIssue.module.css";

function BallIssue(props){
    // console.log(props.dltIssue);
    return (
        <div className={style["ball_issue"]}>
            <BallTitle issueNo={props.dltIssueNo}></BallTitle>
            <BallIssueRed issueRed={props.dltIssue.r}></BallIssueRed>
            <BallBlank></BallBlank>
            <BallIssueBlue issueRed={props.dltIssue.b}></BallIssueBlue>
            <div className={style["issue_time"]}>{props.dltIssue.time}</div>
        </div>
    );
}

class BallIssueRed extends React.Component{
    drowBall(props){
        let redArry=[];
        let index=0
        for (let i = 1; i < 36; i++) {
            if(props.issueRed[index]===i){

            }
            let item=<BallRed key={"ballred-"+i} value={i}></BallRed>
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
    drowBall(props){
        let redArry=[];
        for (let i = 1; i < 13; i++) {
            let item=<BallBlue key={"ballred-"+i} value={i}></BallBlue>
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