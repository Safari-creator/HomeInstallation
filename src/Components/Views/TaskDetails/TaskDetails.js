import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
import TaskCard from "../../Common/TaskCard";

function TaskDetails() {
  const [taskCardArray, setTaskCardArray] = React.useState([0])
  return (
    <div >
      {
        taskCardArray.map((cards) => {
          return(
              <TaskCard setTaskCardCount={setTaskCardArray}/>
          )
        })
      }
    </div>
  );
}

export default TaskDetails;
