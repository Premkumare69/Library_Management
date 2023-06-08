import { useState } from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const formStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 600,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Members = ({ membersData, setMembersData }) => {
  const [openForm, setOpenForm] = useState(false);
  const [formType, setFormType] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  let tempData = [...membersData];

  function addFormSubmit(e) {
    e.preventDefault();
    tempData.push({
      memId: e.target.memId.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      fine: e.target.fine.value,
    });
    setMembersData([...tempData]);
    setOpenForm(false);
  }

  function editFormSubmit(e) {
    e.preventDefault();
    tempData[editIndex].name = e.target.name.value;
    tempData[editIndex].phone = e.target.phone.value;
    tempData[editIndex].email = e.target.email.value;
    tempData[editIndex].fine = e.target.fine.value;
    setMembersData([...tempData]);
    setOpenForm(false);
  }

  const editBtnHandler = (index) => {
    setFormType("edit");
    setEditIndex(index);
    setOpenForm(true);
  };
  const addBtntHandler = () => {
    setFormType("add");
    setOpenForm(true);
  };

  const deleteHandler = (index) => {
    let confirmBool = window.confirm(
      `Are you sure you want to remove member "${membersData[index].name}"?`
    );
    if (confirmBool) {
      tempData.splice(index, 1);
      setMembersData([...tempData]);
    }
  };

  const MemberForm = () => {
    return (
      <Modal
        open={openForm}
        onClose={() => {
          setOpenForm(false);
        }}
      >
        <Box sx={formStyle}>
          <Typography variant="h4" textAlign="center">
            {formType === "edit" ? "Edit" : "Add"} Member
          </Typography>
          <form
            onSubmit={formType === "edit" ? editFormSubmit : addFormSubmit}
            style={{ height: "100%" }}
            autoComplete="off"
          >
            <Stack
              height={"100%"}
              p={3}
              alignItems="space-center"
              justifyContent="space-around"
            >
              <TextField
                disabled
                variant="outlined"
                label="Membership No."
                id="memId"
                value={
                  formType === "edit"
                    ? membersData[editIndex].memId
                    : +membersData[membersData.length - 1].memId + 1
                }
              />
              <TextField
                required
                variant="outlined"
                id="name"
                label="Name"
                defaultValue={
                  formType === "edit" ? membersData[editIndex].name : ""
                }
              />
              <TextField
                required
                variant="outlined"
                id="phone"
                label="Phone"
                type="tel"
                placeholder="9960203040"
                inputProps={{ pattern: "[0-9]{10}" }}
                defaultValue={
                  formType === "edit" ? membersData[editIndex].phone : null
                }
              />
              <TextField
                required
                variant="outlined"
                id="email"
                label="Email"
                type="email"
                placeholder="name@email"
                defaultValue={
                  formType === "edit" ? membersData[editIndex].email : ""
                }
              />
              <TextField
                required
                variant="outlined"
                id="fine"
                label="Fine Due"
                type="number"
                inputProps={{ min: "0" }}
                defaultValue={
                  formType === "edit" ? membersData[editIndex].fine : 0
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₹</InputAdornment>
                  ),
                }}
              />
              <Button variant="contained" color="success" type="submit">
                {formType === "edit" ? "Update Member" : "Add Member"}
              </Button>
              <Button variant="outlined" onClick={() => setOpenForm(false)}>
                Cancel
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    );
  };

  return (
    <Box p={2} ml={2}>
      <Stack direction="row" spacing={4} mb={3}>
        <Typography variant="h4">Members</Typography>
        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          onClick={addBtntHandler}
        >
          Add new member
        </Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "#ddd" }}>
            <TableRow>
              <TableCell sx={{ fontSize: "1.1em" }}>Membership No.</TableCell>
              <TableCell sx={{ fontSize: "1.1em" }}>Name</TableCell>
              <TableCell sx={{ fontSize: "1.1em" }}>Phone</TableCell>
              <TableCell sx={{ fontSize: "1.1em" }}>Email</TableCell>
              <TableCell sx={{ fontSize: "1.1em" }}>Fine</TableCell>
              <TableCell sx={{ fontSize: "1.1em" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {membersData.map((member, index) => (
              <TableRow
                key={member.memId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {member.memId}
                </TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.phone}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>₹{member.fine}</TableCell>
                <TableCell>
                  <Tooltip title="Edit">
                    <IconButton
                      aria-label="Edit"
                      color="warning"
                      onClick={() => editBtnHandler(index)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      aria-label="Delete"
                      color="error"
                      onClick={() => deleteHandler(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <MemberForm />
    </Box>
  );
};

export default Members;
