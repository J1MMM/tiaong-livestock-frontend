import React from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { DATA_GRID_STYLE, FARMERS_TABLE_COLUMN } from "../../utils/constant";
import { TableToolbar } from "../../components/form/table/TableToolbar";
import { Box, Button, Stack } from "@mui/material";
import logo from "../../assets/images/logo.jpg";
import Tab from "../../components/layout/Tab";
import TableFilterBtn from "../../components/form/table/TableFilterBtn";
import TableQuickFilter from "../../components/form/table/TableQuickFilter";

const row = {
  id: 1,
  name: "John Doe",
  sex: "Male",
  address: "San Gregorio San Pablo City",
  address: "San Gregorio San Pablo City",
  contact: "0921304935",
  birthDate: "2024-23-32",
  civilStatus: "Single",
  pwd: "Yes",
  "4psBeneficiary": "No",
  mainLivelihood: "Farmer",
  emergencyPhoneNo: "0912342352",
};

const Farmers = () => {
  return (
    <DataGrid
      loading={false}
      rows={Array.from({ length: 5 }, (_, i) => ({ ...row, id: i }))}
      columns={FARMERS_TABLE_COLUMN}
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
            titleText="Farmer List"
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
  );
};

export default Farmers;
