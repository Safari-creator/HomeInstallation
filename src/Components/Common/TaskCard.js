import React from 'react'
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

function TaskCard({setTaskCardArray}) {

    return (
        <div style={{ display: "flex", marginBottom: "20px" }}>
      <Card
        variant="outlined"
        style={{
          borderRadius: "1.3em",
          width: "70vw",
          height: "25vh",
          display: "flex",
          flexDirection: "column",
          marginLeft: "200px",
          marginRight: "10px",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "70%" },
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "30vh",
              justifyContent: "center",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Task Description"
                variant="outlined"
                style={{ width: "70%", justifyContent: "space-between" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Start Time</label>
                <input
                  type="time"
                  id="appt"
                  name="appt"
                  min="09:00"
                  max="18:00"
                  style={{ width: "100%" }}
                ></input>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>End Time</label>
                <input
                  type="time"
                  id="appt"
                  name="appt"
                  min="09:00"
                  max="18:00"
                  style={{ width: "100%" }}
                ></input>
              </div>
            </div>
          </Box>
        </CardContent>
      </Card>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Card
          varient="outlined"
          style={{ width: "1.7rem", borderRadius: "50px" }}
        >
          <RemoveIcon />
        </Card>
        <Card
          varient="outlined"
          style={{ width: "1.7rem", borderRadius: "50px" }}
        >
          <EditIcon />
        </Card>
        <Card
          varient="outlined"
          style={{ width: "1.7rem", borderRadius: "50px" }}
        >
        <span><AddIcon /></span>  
        </Card>
      </div>
    </div>
    )
}

export default TaskCard
