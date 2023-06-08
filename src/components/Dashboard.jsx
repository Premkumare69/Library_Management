import { Link } from "react-router-dom";
import { Avatar, Card, Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GroupsIcon from "@mui/icons-material/Groups";
import EastIcon from "@mui/icons-material/East";

const Dashboard = ({ booksData, membersData }) => {
  return (
    <Box p={2} ml={2}>
      <Typography variant="h3" sx={{ mb: "20px" }}>
        Dashboard
      </Typography>
      <Stack direction={"row"} spacing={2}>
        <Card sx={{ p: "20px", width: "200px" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            sx={{ gap: "20px" }}
          >
            <Avatar sx={{ bgcolor: "orangered" }}>
              <GroupsIcon fontSize="large" />
            </Avatar>
            <Stack>
              <Typography variant="overline">MEMBERS</Typography>
              <Typography variant="h5">{membersData.length}</Typography>
            </Stack>
          </Stack>
          <Divider sx={{ mb: "10px", mt: "10px" }} />
          <Stack
            component={Link}
            to="/members"
            direction="row"
            sx={{ textDecoration: "none" }}
          >
            <Typography>See all members</Typography>
            <EastIcon />
          </Stack>
        </Card>
        <Card sx={{ p: "20px", width: "200px" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            sx={{ gap: "20px" }}
          >
            <Avatar sx={{ bgcolor: "purple" }}>
              <AutoStoriesIcon fontSize="large" />
            </Avatar>
            <Stack>
              <Typography variant="overline">BOOKS</Typography>
              <Typography variant="h5">{booksData.length}</Typography>
            </Stack>
          </Stack>
          <Divider sx={{ mb: "10px", mt: "10px" }} />
          <Stack
            component={Link}
            to="/books"
            direction="row"
            sx={{ textDecoration: "none" }}
          >
            <Typography>See all books</Typography>
            <EastIcon />
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
};

export default Dashboard;
