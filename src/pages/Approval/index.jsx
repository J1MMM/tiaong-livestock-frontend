import React, { useState } from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import { DataGrid } from "@mui/x-data-grid";
import { TableToolbar } from "../../components/form/table/TableToolbar";
import TableFilterBtn from "../../components/form/table/TableFilterBtn";
import TableQuickFilter from "../../components/form/table/TableQuickFilter";
import {
  APPROVAL_TABLE_COLUMN,
  DATA_GRID_STYLE,
  FARMERS_TABLE_COLUMN,
} from "../../utils/constant";
import useData from "../../hooks/useData";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import { ContainerModal } from "../../components/shared/ContainerModal";
import InfoModal from "./InfoModal";
import ConfirmationDialog from "../../components/shared/ConfirmationDialog";

const Approval = () => {
  const { approvalData } = useData();
  const [selectedRow, setSelectedRow] = useState({});
  const [infoOpen, setInfoOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [approvalConfirmationOpen, setApprovalConfirmationOpen] =
    useState(false);
  const [rejectConfirmationOpen, setRejectConfirmationOpen] = useState(false);
  const [rejectionReason, setRejectReason] = useState({
    incomplete: false,
    invalidID: false,
    notEligible: false,
    duplicate: false,
    falseInfo: false,
    missingDoc: false,
    others: false,
    specify: "",
  });

  const handleInfoClick = (row) => {
    setSelectedRow(row);
    setInfoOpen(true);
  };

  const handleApproveClick = () => {
    setApprovalConfirmationOpen(true);
  };
  const handleRejectClick = () => {
    setRejectConfirmationOpen(true);
  };

  const handleApproveSubmit = async () => {};
  const handleRejectSubmit = async () => {};

  const handleCheckboxChange = (e) => {
    setRejectReason((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };
  const ActionButtonColumn = {
    field: "actions",
    headerName: "Actions",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    renderCell: (params) => (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        height="100%"
        gap={1}
      >
        <Button
          variant="contained"
          color="info"
          size="small"
          onClick={() => handleInfoClick(params.row)}
        >
          Info
        </Button>
      </Stack>
    ),
  };
  return (
    <>
      <DataGrid
        loading={false}
        rows={approvalData}
        columns={[...APPROVAL_TABLE_COLUMN, ActionButtonColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 100,
              page: 0,
            },
          },
        }}
        pageSizeOptions={[10, 50, 100]}
        disableRowSelectionOnClick
        sx={DATA_GRID_STYLE}
        disableColumnResize
        slots={{
          toolbar: () => (
            <TableToolbar
              titleText="Pending Farmers"
              subText="Efficiently Manage Farmers' Records"
              actionBtn={
                <>
                  <TableFilterBtn />
                  <TableQuickFilter />
                </>
              }
            />
          ),
        }}
      />
      <InfoModal
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        row={selectedRow}
        actionButton={
          <>
            <Button
              size="small"
              color="error"
              variant="contained"
              onClick={handleRejectClick}
            >
              Reject
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={handleApproveClick}
            >
              Approve
            </Button>
          </>
        }
      />

      <ConfirmationDialog
        disabled={disabled}
        title="Approval Confirmation"
        content="Are you sure you want to approve this farmer's data?"
        open={approvalConfirmationOpen}
        setOpen={setApprovalConfirmationOpen}
        confirm={handleApproveSubmit}
        serverity="info"
      />

      <Dialog open={rejectConfirmationOpen} maxWidth="md">
        <DialogTitle
          variant="h6"
          fontWeight="500"
          sx={{ bgcolor: "primary.main" }}
          color="white"
        >
          Reason of Rejection
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            <Stack minWidth={400}>
              <FormControlLabel
                control={<Checkbox />}
                label="Incomplete Application"
                checked={rejectionReason.incomplete}
                name="incomplete"
                onChange={handleCheckboxChange}
                disabled={disabled}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Invalid or Missing ID"
                checked={rejectionReason.invalidID}
                name="invalidID"
                onChange={handleCheckboxChange}
                disabled={disabled}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Not Eligible (non-farmer)"
                checked={rejectionReason.notEligible}
                name="notEligible"
                onChange={handleCheckboxChange}
                disabled={disabled}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Duplicate Application"
                checked={rejectionReason.duplicate}
                name="duplicate"
                onChange={handleCheckboxChange}
                disabled={disabled}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="False Information"
                checked={rejectionReason.falseInfo}
                name="falseInfo"
                onChange={handleCheckboxChange}
                disabled={disabled}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Missing Documents"
                checked={rejectionReason.missingDoc}
                name="missingDoc"
                onChange={handleCheckboxChange}
                disabled={disabled}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Other, Specify:"
                checked={rejectionReason.others}
                name="others"
                onChange={handleCheckboxChange}
                disabled={disabled}
              />

              <Collapse in={rejectionReason.others}>
                <TextField
                  fullWidth
                  placeholder="Specify here"
                  value={rejectionReason.specify}
                  onChange={(e) =>
                    setRejectReason((prev) => ({
                      ...prev,
                      specify: e.target.value,
                    }))
                  }
                />
              </Collapse>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions component={"span"}>
          <>
            <Button
              disabled={disabled}
              variant="outlined"
              size="small"
              onClick={() => setRejectConfirmationOpen(false)}
            >
              Cancel
            </Button>
            <Button
              autoFocus
              disabled={disabled}
              variant="contained"
              size="small"
              color={"primary"}
              onClick={handleRejectSubmit}
            >
              {disabled ? (
                <Box display="flex" alignItems="center" gap={2}>
                  <CircularProgress size={18} color="inherit" />
                  <span>Loading...</span>
                </Box>
              ) : (
                <span>submit</span>
              )}
            </Button>
          </>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Approval;
