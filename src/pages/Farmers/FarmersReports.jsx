import React, { useRef, useState } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import {
  APPROVAL_TABLE_COLUMN,
  DATA_GRID_STYLE,
  FARMERS_TABLE_COLUMN,
  REPORTS_TABLE_COLUMN,
} from "../../utils/constant";
import { TableToolbar } from "../../components/form/table/TableToolbar";
import { Box, Button, Stack } from "@mui/material";
import TableFilterBtn from "../../components/form/table/TableFilterBtn";
import TableQuickFilter from "../../components/form/table/TableQuickFilter";
import useData from "../../hooks/useData";
import InfoModal from "../Approval/InfoModal";
import { Print, PrintOutlined } from "@mui/icons-material";
import { useReactToPrint } from "react-to-print";

const FarmersReports = () => {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const { farmersData, farmersDataLoading } = useData();
  const [infoOpen, setInfoOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleInfoClick = (row) => {
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
        loading={farmersDataLoading}
        rows={farmersData}
        columns={REPORTS_TABLE_COLUMN}
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
              titleText="Farmer's Report"
              subText="Insights into farmers' data and activities"
              actionBtn={
                <>
                  <Button
                    variant="outlined"
                    startIcon={<PrintOutlined />}
                    onClick={reactToPrintFn}
                    sx={{
                      padding: "5.5px 20px",
                      border: "1px solid #007bff",
                    }}
                  >
                    Print
                  </Button>
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
              variant="contained"
              onClick={() => setInfoOpen(false)}
            >
              close
            </Button>
          </>
        }
      />

      <div style={{ display: "none" }}>
        <div
          ref={contentRef}
          style={{
            width: "100%",
            borderRadius: "5px",
            padding: "15px",
            backgroundColor: "#fff",
            boxSizing: "border-box",
          }}
        >
          <table
            width="100%"
            style={{
              borderCollapse: "collapse",
              textAlign: "left",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f5f5f5", color: "#333" }}>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Name of Farmer
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Barangay
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Longitude
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Latitude
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Contact Details
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Type of Farm (CM, SC, SH)
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Total Farm Population
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  RSBSA Registered
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  RSBSA Control No.
                </th>
                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
                  Biosecurity Level (0,1,2)
                </th>
              </tr>
            </thead>
            <tbody>
              {farmersData?.map((obj, key) => (
                <tr key={key}>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #ddd" }}
                  >
                    {obj?.fullname}
                  </td>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #ddd" }}
                  >
                    Maria {obj?.barangay}
                  </td>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #ddd" }}
                  >
                    {obj?.longitude}
                  </td>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #ddd" }}
                  >
                    {obj?.latitude}
                  </td>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #ddd" }}
                  >
                    {obj?.contactNo}
                  </td>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #ddd" }}
                  >
                    {obj?.typeofFarm}
                  </td>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #ddd" }}
                  >
                    {obj?.totalFarmPopulation}
                  </td>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #ddd" }}
                  >
                    {obj?.rsbsaRegistered}
                  </td>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #ddd" }}
                  >
                    {obj?.referenceNo}
                  </td>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #ddd" }}
                  >
                    {obj?.bioSecLvl}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FarmersReports;
