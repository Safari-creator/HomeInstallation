import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

function Login() {
  let history = useHistory();

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
      >
        <Card
          variant="outlined"
          style={{ borderRadius: "1.3em", width: "30vw" }}
        >
          <CardContent>
            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography> */}
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "40ch" },
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
                <h1>Login</h1>
              </div>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
              <Button
                variant="contained"
                onClick={() => history.push("/task-details")}
                style={{ marginTop: "40px", padding: "10px" }}
              >
                Login
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default Login;
