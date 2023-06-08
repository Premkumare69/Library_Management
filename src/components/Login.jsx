import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert, AlertTitle } from "@mui/material";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";
import { ToastContainer, toast } from "react-toastify";
export default function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, currentUser } = useAuth();

  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      setLoading(true);
      await login(email, password);
      if (currentUser && currentUser.email === "admin@library.com") {
        console.log("Redirecting to dashboard");

        // Redirect to dashboard
        // Replace the URL with your dashboard route or navigation logic
        navigate("/");
      } else {
        // Redirect to user platform
        // Replace the URL with your user platform route or navigation logic
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
    setLoading(false);
  }
  const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard: ', text);
      toast.success("Text copied successfully");
      // You can show a success toast or perform any other action
    })
    .catch((error) => {
      console.error('Failed to copy text to clipboard: ', error);
      toast.error("Failed to copy text to clipboard");
      // You can show an error toast or perform any other action
    });
};
  if (currentUser) return <Navigate to="/" />;

  return (
    <Container component="main" maxWidth="sm">
     <ToastContainer />
      <Typography variant="h4" mt={4} textAlign="center">
        Library Management System
      </Typography>
      <Container
        maxWidth="xs"
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            disabled={loading}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          {error && (
            <Typography textAlign="center" color="error" m={2}>
              Wrong email or password!
            </Typography>
          )}
        </Box>
        <Alert severity="info">
  <AlertTitle>Use login info</AlertTitle>
  Email Address: <strong>admin@library.com</strong>
  <FileCopyIcon
    sx={{ verticalAlign: "middle", cursor: "pointer" }}
    onClick={() => copyToClipboard("admin@library.com")}
  />
  <br />
  <br />
  Password: <strong>admin123</strong>
  <FileCopyIcon
    sx={{ verticalAlign: "middle", cursor: "pointer" }}
    onClick={() => copyToClipboard("admin123")}
  />
  <br />
  <br />
  <Typography
    variant="outlined"
    component={Link}
    to="/home"
    sx={{
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
    }}
  >
    Go to Home{" "}
    <EastIcon sx={{ verticalAlign: "middle", marginLeft: "5px" }} />
  </Typography>
</Alert>
      </Container>
    </Container>
  );
}
