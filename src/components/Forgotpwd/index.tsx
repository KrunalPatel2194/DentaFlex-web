import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    console.log({
      email: data.get("email"),
    });

    try {
      const response = await fetch('/api/auth/forgotpwd', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();

      if (response.ok) {
        alert("Password reset link sent to your email!");
      } else {
        alert(result.msg || "Something went wrong.");
      }

    } catch (error) {
      console.error("error sending email link", error);
    }


  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontFamily: "inherit", fontWeight: 700 }}
        >
          Forgot Password
        </Typography>
        <Typography
          component="p"
          sx={{ textAlign: "center", mb: 2, fontFamily: "inherit" }}
        >
          Enter your email address and we'll send you a link to reset your
          password.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{ fontFamily: "inherit" }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, fontFamily: "inherit", fontWeight: "bold" }}
          >
            Send Reset Link
          </Button>
          <Link
            to="/login"
            // variant ="body2"
            style={{ textDecoration: "none", fontFamily: "inherit" }}
          >
            {"Remember your password? Login"}
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default ForgotPassword;
