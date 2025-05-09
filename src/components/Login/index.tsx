import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { Navigate, NavLink } from 'react-router-dom';
import { useAuth } from '../../shared/hooks/AuthProvider';

const defaultTheme = createTheme();

export default function Login() {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const auth = useAuth();

  const validateInputs = (email: string, password: string) => {
    let isValid = true;

    // Reset previous errors
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;

    // Validate inputs
    if (!validateInputs(email, password)) {
      return;
    }

    try {
      const response = await auth.loginAction(data);
      if (!response) {
        setErrorMessage("Invalid email or password");
      }
    } catch (ex) {
      console.log("Error Occurred", ex);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    auth.token ? (
      <Navigate to="/book" /> // Redirect upon successful login
    ) : (
      <Container component="main" maxWidth="xs" sx={{ marginBottom: '10vh' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
              error={!!emailError}
              helperText={emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!passwordError}
              helperText={passwordError}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {errorMessage && <Grid item xs={12} sx={{ color: 'red', textAlign: 'center' }}>
                {errorMessage}
              </Grid>}
            </Grid>
            <Grid container>
              <Grid item xs>
                <NavLink to="/forgotpwd">
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/signup">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    )
  );
}
