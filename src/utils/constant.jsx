// import cow from "../assets/images/cow.png";
// import goat from "../assets/images/goat.png";
// import chicken from "../assets/images/chicken.png";
// import duck from "../assets/images/duck.png";
// import carabao from "../assets/images/carabao.png";
// import pig from "../assets/images/pig.png";
// import horse from "../assets/images/horse.png";

import cow from "../assets/images/cow.gif";
import goat from "../assets/images/goat.gif";
import chicken from "../assets/images/chicken.gif";
import duck from "../assets/images/duck.gif";
import carabao from "../assets/images/carabao.gif";
import pig from "../assets/images/pig.gif";
import horse from "../assets/images/horse.gif";

import cowM from "../assets/images/cow-mortality.webp";
import goatM from "../assets/images/goat-mortality.webp";
import chickenM from "../assets/images/chicken-mortality.webp";
import duckM from "../assets/images/duck-mortality.webp";
import carabaoM from "../assets/images/carabao-mortality.webp";
import pigM from "../assets/images/pig-mortality.webp";
import horseM from "../assets/images/horse-mortality.webp";

import logo from "../assets/images/logo.jpg";
import { Button, Stack } from "@mui/material";
import dayjs from "dayjs";

// export const BASE_URL = "http://10.10.30.32:3500";
export const BASE_URL = "http://localhost:3500";

export const ALERT_SEV = {
  error: "error",
  info: "info",
  success: "success",
  warning: "warning",
};

export const TIAONG_BRGY = [
  "Anastacia",
  "Aquino",
  "Ayusan I",
  "Ayusan II",
  "Behia",
  "Bukal",
  "Bula",
  "Bulakin",
  "Cabatang",
  "Cabay",
  "Del Rosario",
  "Lagalag",
  "Lalig",
  "Lumingon",
  "Lusacan",
  "Paiisa",
  "Palagaran",
  "Quipot",
  "San Agustin",
  "San Isidro",
  "San Jose",
  "San Juan",
  "San Pedro",
  "Tagbakin",
  "Talisay",
  "Tamisian",
  "San Francisco",
];

export const BRGY_COOR = {
  Anastacia: { lat: 13.976384828723074, lng: 121.35681481313391 },
  Aquino: { lat: 13.96955506011133, lng: 121.28702208227605 },
  "Ayusan I": { lat: 13.952798632445772, lng: 121.30557095063045 },
  "Ayusan II": { lat: 13.978067404356956, lng: 121.31842549490686 },
  Behia: { lat: 13.901749656367745, lng: 121.33965336861887 },
  Bukal: { lat: 13.928997060098197, lng: 121.28598975200084 },
  Bula: { lat: 13.928067927649588, lng: 121.31027877659346 },
  Bulakin: { lat: 13.98844196675556, lng: 121.34558544835204 },
  Cabatang: { lat: 13.969810656195092, lng: 121.38212773899167 },
  Cabay: { lat: 13.887207719747833, lng: 121.3680950063104 },
  "Del Rosario": { lat: 13.859174974972047, lng: 121.38581413117943 },
  Lagalag: { lat: 13.94135281244506, lng: 121.37522845839851 },
  Lalig: { lat: 13.975267332892077, lng: 121.3286903573642 },
  Lumingon: { lat: 13.958400023886455, lng: 121.32987366927173 },
  Lusacan: { lat: 13.957300026085951, lng: 121.3448346365917 },
  Paiisa: { lat: 13.925901132091386, lng: 121.3502876152325 },
  Palagaran: { lat: 13.938441845689342, lng: 121.34450427792069 },
  Quipot: { lat: 13.945313268161001, lng: 121.32247235279266 },
  "San Agustin": { lat: 13.93192683405691, lng: 121.33505896118986 },
  "San Isidro": { lat: 13.943779678880102, lng: 121.3335552488652 },
  "San Jose": { lat: 13.922401399742688, lng: 121.33973794217043 },
  "San Juan": { lat: 13.91051909844004, lng: 121.35090053535988 },
  "San Pedro": { lat: 13.968307036247758, lng: 121.30517502816902 },
  Tagbakin: { lat: 13.916414251250188, lng: 121.3620362605209 },
  Talisay: { lat: 13.946212127968186, lng: 121.36102443240365 },
  Tamisian: { lat: 13.950816017291613, lng: 121.28265446400516 },
  "San Francisco": { lat: 13.889667191150568, lng: 121.35066400613859 },
};

export const LIVESTOCK = [
  { name: "Cow", count: 2, img: cow },
  { name: "Goat", count: 3, img: goat },
  { name: "Chicken", count: 45, img: chicken },
  { name: "Duck", count: 34, img: duck },
  { name: "Carabao", count: 12, img: carabao },
  { name: "Pig", count: 18, img: pig },
  { name: "Horse", count: 1, img: horse },
];

export const MORTALITY = [
  { name: "Cow", count: 2, img: cowM },
  { name: "Goat", count: 3, img: goatM },
  { name: "Chicken", count: 45, img: chickenM },
  { name: "Duck", count: 34, img: duckM },
  { name: "Carabao", count: 12, img: carabaoM },
  { name: "Pig", count: 18, img: pigM },
  { name: "Horse", count: 1, img: horseM },
];

export const DATA_GRID_STYLE = {
  "& .MuiDataGrid-row": {
    "&:last-child .MuiDataGrid-cell": {
      borderBottom: "none", // Remove bottom border from last row
    },
  },
  ".MuiDataGrid-columnHeaderTitleContainer": {
    bgcolor: "primary.main",
  },

  ".data-grid-header": {
    bgcolor: "primary.main",
    color: "#FFF",
    ".MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
    },
    "&.MuiDataGrid-root": {
      border: "none",
      color: "#FFF",
    },
    ".MuiIconButton-sizeSmall": {
      color: "#FFF",
    },
  },
  border: "none", // Add a border
};

export const FARMERS_TABLE_COLUMN = [
  {
    field: "photo",
    headerName: "Photo",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params) => (
      <Stack justifyContent="center" alignItems="center" height="100%">
        <img src={logo} style={{ maxWidth: 38 }} alt="img.png" />
      </Stack>
    ),
  },
  {
    field: "fullname",
    headerName: "Name",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },

  {
    field: "sex",
    headerName: "Sex",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "contact",
    headerName: "Contact No.",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "birthDate",
    headerName: "Birth date",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "civilStatus",
    headerName: "Civil Status",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "pwd",
    headerName: "PWD",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "4psBeneficiary",
    headerName: "4P's Beneficiary",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "mainLivelihood",
    headerName: "Main Livelihood",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "emergencyPhoneNo",
    headerName: "Emergency Phone No.",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
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
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => handleArchiveClick(params.row)}
        >
          Archive
        </Button>
      </Stack>
    ),
  },
];

export const APPROVAL_TABLE_COLUMN = [
  {
    field: "photo",
    headerName: "Photo",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    renderCell: (params) => (
      <Stack justifyContent="center" alignItems="center" height="100%">
        <img
          src={params.row?.userImage}
          style={{
            maxWidth: 38,
            borderRadius: "100%",
            border: "2px solid #007bff",
          }}
          alt="img.png"
        />
      </Stack>
    ),
  },
  {
    field: "fullname",
    headerName: "Name",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params) => {
      return `${params?.row?.firstname} ${params?.row?.middlename} ${params?.row?.surname} ${params?.row?.extensionName}`;
    },
  },

  {
    field: "sex",
    headerName: "Sex",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "barangay",
    headerName: "Address",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "contactNo",
    headerName: "Contact No.",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "birthDate",
    headerName: "Birth date",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params) => {
      return dayjs(params?.rows?.birthDate).format("MM/DD/YYYY");
    },
  },
  {
    field: "civilStatus",
    headerName: "Civil Status",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "PWD",
    headerName: "PWD",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "_4ps",
    headerName: "4P's Beneficiary",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "livelihood",
    headerName: "Main Livelihood",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "contactPersonToNotifyInCaseEmergency",
    headerName: "Emergency Phone No.",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
];
