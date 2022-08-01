import * as React from "react";
import {
  TextField,
  Grid,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";

const Login = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Typography variant="h3">Login</Typography>
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          fullWidth
          style={{ marginBottom: "2em" }}
          sx={{
            input: {
              backgroundColor: "black",
              color: "#0fb66e",
            },
            label: {
              color: "#02a663",
            },
          }}
        />

        <TextField
          label="Password"
          fullWidth
          id="outlined-basic"
          variant="filled"
          style={{ marginBottom: "2em" }}
          sx={{
            input: {
              backgroundColor: "black",
              color: "#0fb66e",
            },
            label: {
              color: "#02a663",
            },
          }}
        />
      </Grid>
      <ButtonGroup variant="contained">
        <Button
         style = {{ backgroundColor:"#0fb66e", color:"#000000"}}
        >
          Sign In
        </Button>
        <Button style = {{ backgroundColor:"#02a663", color:"#000000"}}>Sign Up</Button>
      </ButtonGroup>
    </Grid>
  );
};
export default Login;
