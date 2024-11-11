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
import { Button, Stack } from "@mui/material";
import { ContainerModal } from "../../components/shared/ContainerModal";
import InfoModal from "./InfoModal";

const Approval = () => {
  const { approvalData } = useData();
  const [selectedRow, setSelectedRow] = useState({});
  const [infoOpen, setInfoOpen] = useState(false);

  const handleInfoClick = (row) => {
    console.log(row);
    setSelectedRow(row);
    setInfoOpen(true);
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
            <Button size="small" color="error" variant="contained">
              Reject
            </Button>
            <Button size="small" variant="contained">
              Approve
            </Button>
          </>
        }
      />
    </>
  );
};

export default Approval;
