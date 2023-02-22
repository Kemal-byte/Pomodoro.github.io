import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { NavItems } from "../navbar/index.styled";
import Profile from "../../assets/Profile.svg";
import { Button, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Colors from "../../utilities/commonCss/colors";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  borderRadius: "5px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#000",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginInput = styled(TextField, {
  name: "InputFields",
})({ width: "100% !important" });

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <NavItems onClick={handleOpen} id="profile">
        <img src={Profile} alt="Login to your profile" id="profile" />
      </NavItems>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ color: Colors.primaryYellow, fontWeight: 900 }}
            gutterBottom={true}
          >
            Welcome
          </Typography>
          ;
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <LoginInput
              error={false}
              id="outlined-error-helper-text"
              label="User Email"
              placeholder="Enter your email address"
              // helperText="Incorrect entry."
              InputLabelProps={{ sx: { color: "#fff" } }}
            />
            <LoginInput
              id="Password"
              label="Password"
              placeholder="Enter your password"
              InputLabelProps={{ sx: { color: "#fff" } }}
            />
            {!isLogin && (
              <LoginInput
                id="Password"
                label="Re-Password"
                placeholder="Enter your password again"
                InputLabelProps={{ sx: { color: "#fff" } }}
              />
            )}
            <Button sx={{ backgroundColor: "red" }}>
              {isLogin ? "Login" : "Register"}
            </Button>
            <Typography
              variant="subtitle2"
              component="h6"
              onClick={() => setIsLogin((prev) => !prev)}
              sx={{
                color: Colors.primaryYellow,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {isLogin ? "Dont have an account" : "Already have an account"}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
