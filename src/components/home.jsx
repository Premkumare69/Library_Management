import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, Card, Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { AccountCircle, LibraryBooks } from "@mui/icons-material";
import EastIcon from "@mui/icons-material/East";
import TextTransition, { presets } from "react-text-transition";

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasShownSplash = localStorage.getItem("hasShownSplash");

    if (!hasShownSplash) {
      const delay = setTimeout(() => {
        setShowContent(true);
        localStorage.setItem("hasShownSplash", true);
      }, 3000);

      return () => {
        clearTimeout(delay);
      };
    } else {
      setShowContent(true);
    }
  }, []);

  const TEXTS = ["Library", "Management", "System"];

  return (
    <Box p={2} ml={2}>
      {showContent ? (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h3" sx={{ mb: "20px" }}>
            Home Page
          </Typography>
        </Stack>
      ) : (
        <div></div>
      )}

      {showContent ? (
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Card sx={{ p: "20px", width: "250px" }}>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="space-around"
              sx={{ gap: "20px" }}
            >
              <Avatar sx={{ bgcolor: "orangered", width: 95, height: 95 }}>
                <AccountCircle fontSize="large" />
              </Avatar>
              <Stack>
                <Typography variant="overline" style={{ fontSize: "20px" }}>
                  ADMIN LOGIN
                </Typography>
                <Typography variant="h5"></Typography>
              </Stack>
            </Stack>
            <Divider sx={{ mb: "10px", mt: "10px" }} />
            <Stack
              component={Link}
              to="/"
              direction="row"
              sx={{ textDecoration: "none" }}
            >
              <Typography>Login to Admin Dashboard</Typography>
              <EastIcon />
            </Stack>
          </Card>
          <Card sx={{ p: "20px", width: "250px" }}>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="space-around"
              sx={{ gap: "20px" }}
            >
              <Avatar sx={{ bgcolor: "purple", width: 100, height: 100 }}>
                <LibraryBooks fontSize="large" />
              </Avatar>
              <Stack>
                <Typography variant="overline" style={{ fontSize: "20px" }}>
                  LIBRARY BOOKS
                </Typography>
                <Typography variant="h5"></Typography>
              </Stack>
            </Stack>
            <Divider sx={{ mb: "10px", mt: "10px" }} />
            <Stack
              component={Link}
              to="/Library"
              direction="row"
              sx={{ textDecoration: "none" }}
            >
              <Typography>Go to Library</Typography>
              <EastIcon />
            </Stack>
          </Card>
        </Stack>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              animation: "fade 1s ease-in-out infinite",
            }}
          >
            Library Management System....
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
