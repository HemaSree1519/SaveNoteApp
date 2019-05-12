import {Card, CardBody, CardText, CardTitle} from "reactstrap";
import React from "react";

export const noteView = (note,setEditState) =>{
  return(
      <Card
          onClick={() => {
              setEditState(note);
          }}>
          <CardBody>
              <CardTitle className="card-title">{note["title"]}</CardTitle>
              <CardText>{note["content"]}</CardText>
          </CardBody>
      </Card>
  )
};