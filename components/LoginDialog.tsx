import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  TextField,
  IconButton,
  Icon,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { relative } from "path";
import React from "react";
import { PrismaClient, User } from "@prisma/client";
import { getCookie, setCookie } from "cookies-next";

export const LoginDialog = ({
  open,
  handleClose,
  ...props
}: LoginDialogProps) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState<User | null>(null);

  const handleLogin = async () => {
    const userData = await fetch(
      "http://localhost:3000/api/authentication/login",
      {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );
    if (userData.status === 200) {
      const user: { user: User; token: string } = await userData.json();
      setUser(user.user);
      console.log("user");
      console.log(user);
      // REVIEW: is this the best way to manage auth state?
      // REVIEW: Maybe user and token both don't need to be stored in localStorage
      await setCookie("token", user.token);
    } else {
      console.log("Invalid user: " + userData.status);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            borderRadius: "15px",
            "&::-webkit-scrollbar": { display: "none" },
            width: "50%",
            height: "70%",
            // paddingLeft: "3%",
            // paddingRight: "3%",
            maxWidth: "500px!important", // Set your width here
            maxHeight: "500px!important", // Set your width here
          },
        },
      }}
      //   PaperProps={{
      //     sx: {
      //       width: "50%",
      //       height: "70%",
      //     },
      //   }}
    >
      <IconButton
        style={{
          right: "3%",
          top: "5%",
          alignSelf: "flex-end",
          width: "40px",
          height: "40px",
        }}
        onClick={handleClose}
      >
        <Close></Close>
      </IconButton>
      <div
        style={{
          paddingLeft: "3%",
          paddingRight: "3%",
        }}
      >
        <DialogTitle
          fontSize={25}
          fontWeight={600}
          style={{
            top: "14%",
          }}
        >
          Log In
        </DialogTitle>

        <DialogContent style={{ top: "17%" }}>
          <DialogContentText
            fontSize={14}
            style={{ overflow: "hidden", width: "80%" }}
          >
            By continuing, you agree to our User Agreement and acknowledge that
            you understand the Privacy Policy.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            style={{ marginTop: "8%" }}
            InputProps={{
              style: {
                borderRadius: "15px",
              },
            }}
            id="name"
            label="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            type="email"
            fullWidth
            variant="outlined"
          />

          <TextField
            autoFocus
            margin="dense"
            style={{ marginTop: "4%" }}
            InputProps={{
              style: {
                borderRadius: "15px",
              },
            }}
            id="password"
            label="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            fullWidth
            variant="outlined"
          />

          <DialogContentText
            fontSize={14}
            style={{ overflow: "hidden", width: "80%", marginTop: "4%" }}
          >
            Forgot your username or password?{" "}
          </DialogContentText>

          <DialogContentText
            fontSize={14}
            style={{ overflow: "hidden", width: "80%", marginTop: "2%" }}
          >
            New to Reddit? Sign Up
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleLogin();
              handleClose();
            }}
          >
            Subscribe
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

interface LoginDialogProps {
  open: boolean;
  handleClose: () => void;
}
