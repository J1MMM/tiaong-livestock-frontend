import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";
import { Header } from "./Header";
import { Stack } from "@mui/material";
import {
  DRAWER_WIDTH_CLOSED,
  DRAWER_WIDTH_OPEN,
  HEADER_HEIGHT,
} from "../../utils/constant";
import useAuth from "../../hooks/useAuth";
import { useQuery, useQueryClient } from "react-query";
import { fetchInitialData } from "../../api/assessorAPI";

const styleLayout = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
  boxSizing: "border-box",
  overflow: "hidden",
  transitionDuration: "500ms",
  bgcolor: "#D6D7DB",
  padding: 1,
  gap: 1,
};

const Layout = () => {
  const [open, setOpen] = useState(true);
  const auth = useAuth();

  const handleDrawerOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={styleLayout}>
      <Header />

      <Stack
        direction="row"
        width="100%"
        height={"100vh"}
        gap={1}
        boxSizing={"border-box"}
      >
        <SideBar />
        <Outlet />
      </Stack>
    </Box>
  );
};

export default Layout;
