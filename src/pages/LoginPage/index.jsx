import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/images/favicon.svg";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./index.scss";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import Cookies from "js-cookie";

const LoginPage = () => {
  const { auth, setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const [formMsg, setFormMsg] = useState("");

  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    try {
      const response = await axios.post(
        "/api/user/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      console.log(response.data);

      if (response.data.token) {
        const token = response?.data?.token;
        Cookies.set("token", token);
        setAuth({ accessToken: token });
        setEmail("");
        setPassword("");
        navigate(from, { replace: true });
      } else {
        if (response.data.error) {
          setFormMsg(response.data.error);
        } else {
          setFormMsg(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);

      if (!error?.response) {
        setFormMsg("No Server Response");
      } else if (error.response?.status == 400) {
        setFormMsg("All Field required");
      } else if (error.response?.status == 401) {
        setFormMsg("Incorrect Email or Password");
      } else {
        setFormMsg("Login Failed");
      }
    }
    setDisable(false);
  };

  if (auth?.accessToken) {
    return <Navigate to="/" />;
  }
  //comment here another one
  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Paper>
        <Stack>
          <TextField variant="outlined" />
          <TextField />
          <Button variant="contained">Login</Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default LoginPage;
