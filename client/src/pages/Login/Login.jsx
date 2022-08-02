import * as React from "react";
import { TextField, Grid, Typography, Button, Box } from "@mui/material";
import Footer from '../../components/Footer/Footer';

const Login = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "94vh" }}
      >
        <Typography sx={{ color: "#0fb66e" }} variant="h2">
          Login
        </Typography>
        <Grid item xs={3}>
          <TextField
            color="success"
            id="filled-basic"
            label="Email"
            variant="filled"
            fullWidth
            style={{ marginBottom: "2em" }}
            sx={{
              input: {
                backgroundColor: "#0a0a0a",
                color: "#0fb66e",
              },
              label: {
                color: "#02a663",
              },
            }}
          />
          <TextField
            color="success"
            label="Password"
            fullWidth
            id="outlined-basic"
            variant="filled"
            style={{ marginBottom: "2em" }}
            sx={{
              input: {
                backgroundColor: "#0a0a0a",
                color: "#0fb66e",
              },
              label: {
                color: "#02a663",
              },
            }}
          />
        </Grid>
        <Box m={1} pt={1}>
          <Button
            sx={{ margin: 1 }}
            style={{ backgroundColor: "#0fb66e", color: "#000000" }}
          >
            Sign In
          </Button>
          <Button
            sx={{ margin: 2 }}
            style={{ backgroundColor: "#02a663", color: "#000000" }}
          >
            Sign Up
          </Button>
        </Box>
      </Grid>
      <Footer/>
    </div>
  );
};
export default Login;
