import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { BrowserRouter, Route, Link } from "react-router-dom";

function SignUp() {
  let history = useHistory();

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.9)" }}
      >
        <Card
          variant="outlined"
          style={{ borderRadius: "1.3em", width: "50vw" }}
        >
          <CardContent>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "60ch" },
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "70vh",
                justifyContent: "center",
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <h1>Create Account</h1>
              </div>
              <TextField type="text" label="Email" variant="outlined" />
              <TextField
                type="password"
                label="Password"
                variant="outlined"
              />
              <TextField
                type="password"
                label="Confirm Password"
                variant="outlined"
              />
              <Button
                variant="contained"
                onClick={() => history.push("/task-details")}
                style={{ marginTop: "40px", padding: "10px" }}
              >
                Sign Up
              </Button>

              <div style={{display: "flex", justifyContent: "space-between", marginTop: "30px"}}>
              <div>
                <Link to="Sign-Up" >Sign Up</Link> 
              </div>
              <div>
                <Link to="Forgot-Password" >Forgot Password ?</Link>
              </div>
              </div>
            </Box>
              
          </CardContent>
        </Card>
      </Box>
    </div>
    )
}

export default SignUp
