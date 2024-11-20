import React, { useState } from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import {
  Box,
  Button,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddAnnouncementModal from "./AddAnnouncementModal";
import axios from "../../api/axios";
import SnackBar from "../../components/shared/SnackBar";
import useData from "../../hooks/useData";
import dayjs from "dayjs";
import { useQueryClient } from "react-query";
import ViewAnnouncementModal from "./ViewAnnouncementModal";

const Announcement = () => {
  const { announcementData } = useData();
  const queryClient = useQueryClient();
  const [disabled, setDisabled] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [errorSnackOpen, setErrorSnackOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    createdAt: null,
  });

  const handleAnnouncementSubmit = async () => {
    setDisabled(true);
    try {
      const response = await axios.post("/announcement", formData);
      await queryClient.invalidateQueries("announcementData");
      setFormData({
        title: "",
        message: "",
      });
      setSnackOpen(true);
      setAddModalOpen(false);
    } catch (error) {
      console.log(error);
      setErrorSnackOpen(true);
    }
    setDisabled(false);
  };

  const handleSeeMoreClick = () => {
    setInfoModalOpen(true);
    setFormData({
      title: val?.title,
      message: val?.message,
      createdAt: val?.createdAt,
    });
  };
  return (
    <>
      <PageContainer>
        <Stack
          width="100%"
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5" fontWeight={600}>
              Announcement for Farmers
            </Typography>
            <Typography variant="body1">
              Stay updated with the latest news and updates for farmers.
            </Typography>
          </Box>

          <Button variant="contained" onClick={() => setAddModalOpen(true)}>
            Add Announcement
          </Button>
        </Stack>

        <Stack
          mt={3}
          gap={2}
          width="100%"
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          alignContent="flex-start"
          height={"calc(100vh - 160px)"}
          p={2}
          sx={{
            overflowY: "scroll",
          }}
        >
          {announcementData?.map((val, i) => (
            <Paper
              key={i}
              elevation={5}
              sx={{
                padding: 2,
                maxWidth: 300,
                minHeight: 250,
                maxHeight: 250,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  color="primary.main"
                  fontWeight={600}
                  sx={{
                    maxWidth: "200px", // Set the max width as needed
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {val?.title}
                </Typography>
                <Typography variant="body2" color="#888">
                  Date: {dayjs(val?.createdAt).format("MM/DD/YYYY")}
                </Typography>
                <Typography
                  variant="body1"
                  mt={1}
                  color="#888"
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitLineClamp: 6,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {val?.message}
                </Typography>
              </Box>
              <Box>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ mt: "auto" }}
                  onClick={handleSeeMoreClick}
                >
                  See More
                </Button>
              </Box>
            </Paper>
          ))}
        </Stack>
      </PageContainer>
      <AddAnnouncementModal
        open={addModalOpen}
        disabled={disabled}
        onClose={() => setAddModalOpen(false)}
        onSubmit={handleAnnouncementSubmit}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleAnnouncementSubmit}
      />

      <ViewAnnouncementModal
        open={infoModalOpen}
        disabled={disabled}
        onClose={() => {
          setInfoModalOpen(false);
          setFormData({
            title: "",
            message: "",
            createdAt: null,
          });
        }}
        formData={formData}
        setFormData={setFormData}
      />

      <SnackBar
        open={snackOpen}
        onClose={setSnackOpen}
        msg="Announcement has been added successfully."
      />
      <SnackBar
        open={errorSnackOpen}
        onClose={setErrorSnackOpen}
        msg="Failed to add the announcement. Please try again."
      />
    </>
  );
};

export default Announcement;
