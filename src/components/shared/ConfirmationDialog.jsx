import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Slide,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";

const ConfirmationDialog = ({
  open,
  setOpen,
  title,
  content,
  confirm,
  disabled,
  serverity,
  label,
}) => {
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      component={"span"}
    >
      <DialogTitle
        component={"span"}
        id="alert-dialog-title"
        variant="h6"
        fontWeight="500"
        sx={{ bgcolor: "primary.main" }}
        color="white"
      >
        {title}
      </DialogTitle>
      <DialogContent component={"span"} dividers>
        <DialogContentText component={"span"} id="alert-dialog-description">
          <Alert
            component={"span"}
            sx={{
              maxWidth: "450px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              "& .MuiAlert-icon": {
                fontSize: 35,
              },
            }}
            severity={serverity || "warning"}
          >
            <Typography component={"span"} variant="body1" textAlign="center">
              {content}
            </Typography>
          </Alert>
        </DialogContentText>
      </DialogContent>
      <DialogActions component={"span"}>
        <>
          <Button
            disabled={!!disabled}
            variant="outlined"
            size="small"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            autoFocus
            disabled={!!disabled}
            variant="contained"
            size="small"
            color={serverity || "primary"}
            onClick={() => {
              confirm();
            }}
          >
            {!!disabled ? (
              <Box display="flex" alignItems="center" gap={2}>
                <CircularProgress size={18} color="inherit" />
                <span>Loading...</span>
              </Box>
            ) : (
              <span>{label || "confirm"}</span>
            )}
          </Button>
        </>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
