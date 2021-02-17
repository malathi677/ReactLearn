import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails image= "https://semantic-ui.com/images/avatar2/large/kristy.png" user="Don" timeAgo="today at 4:55pm" content="Nice post!!" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails image="https://semantic-ui.com/images/avatar/large/elliot.jpg" user="James" timeAgo="Yesterday at 2:00pm" content="Good one"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails image="https://semantic-ui.com/images/avatar2/large/elyse.png" user="John" timeAgo="today at 3:00pm" content="Awesome blog" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
