import { Chip, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";

export const HEADER_HEIGHT = "80px";
export const DRAWER_WIDTH_OPEN = 250;
export const DRAWER_WIDTH_CLOSED = 60;
// export const BASE_URL = "http://192.168.68.111:4000";
export const BASE_URL = "http://localhost:4000";
// Role IDs following a pattern for different categories
const ROLES_LIST = {
  SuperAdmin: 1000, // Super Administrator
  Admin: 1100, // Administrator
  Office1: 2100, // Custom Office 1 (Management)
  Office2: 2200, // Custom Office 2 (Management)
  Office3: 2300, // Custom Office 3 (Management)
  Cashier: 3100, // Cashier role (Operations)
};

export const ALERT_SEV = {
  error: "error",
  info: "info",
  success: "success",
  warning: "warning",
};

export const ASSESSMENT_ROLL_COLUMN = [
  {
    field: "fname",
    headerName: "PROPERTY OWNER",
    editable: false,
    headerClassName: "data-grid-header",
    width: 200,
    renderCell: (params, i) => {
      const fname = params.row?.fname;
      const mname = params.row?.mname;
      const lname = params.row?.lname;
      return (
        <span>
          {fname} {mname} {lname}
        </span>
      );
    },
  },
  {
    field: "PID",
    headerName: "PROPERTY INDEX NO.",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "ArpNo",
    headerName: "ARP NO.",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "oldArp",
    headerName: "OLD ARP",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "Address",
    headerName: "OWNED ADDRESS",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "kind",
    headerName: "KIND",
    width: 250,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      return (
        <Stack flexDirection="row" gap={1}>
          <span>
            {" "}
            {params?.row?.Boundaries?.land == true && (
              <Chip size="small" label="LAND" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.building == true && (
              <Chip size="small" label="BUILDING" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.machinery == true && (
              <Chip size="small" label="MACHINERY" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.others == true && (
              <Chip size="small" label="OTHERS" />
            )}
          </span>
        </Stack>
      );
    },
  },
  {
    field: "classification",
    headerName: "CLASS",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const classification = Array.isArray(params.row?.classification)
        ? params.row?.classification
        : [];

      return (
        <Stack flexDirection="row" gap={1} alignItems="center" height="100%">
          {classification?.map((obj, i) => (
            <Chip key={i} label={obj?.classification} size="small" />
          ))}
        </Stack>
      );
    },
  },
  {
    field: "LocationOfProperty",
    headerName: "LOCATION OF PROPERTY",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const block = params.row?.BLOCK;
      const brgy = params.row?.Brgy;
      return (
        <span>
          {block} {brgy}
        </span>
      );
    },
  },
  {
    field: "AssessedValue",
    headerName: "ASSESSED VALUE",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const classification = params.row?.classification || [];
      return <span>{classification[0]?.assessedValue}</span>;
    },
  },
  {
    field: "TAXABILITY",
    headerName: "TAXABILITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const TAXABILITY = params.row?.TAXABILITY;
      return <span>{TAXABILITY?.toUpperCase()}</span>;
    },
  },
  {
    field: "dateOfEffectivity",
    headerName: "EFFECTIVITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const dateOfEffectivity = dayjs(params.row?.dateOfEffectivity);
      return <span>{dateOfEffectivity.format("MM/DD/YYYY")}</span>;
    },
  },
];

export const CENCELS_TABLE_COLUMN = [
  {
    field: "status",
    headerName: "STATUS",
    editable: false,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "fname",
    headerName: "PROPERTY OWNER",
    editable: false,
    headerClassName: "data-grid-header",
    width: 200,
    renderCell: (params, i) => {
      const fname = params.row?.fname;
      const mname = params.row?.mname;
      const lname = params.row?.lname;
      return (
        <span>
          {fname} {mname} {lname}
        </span>
      );
    },
  },
  {
    field: "PID",
    headerName: "PROPERTY INDEX NO.",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },

  {
    field: "ArpNo",
    headerName: "ARP NO.",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "oldArp",
    headerName: "OLD ARP",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "Address",
    headerName: "OWNED ADDRESS",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },

  {
    field: "",
    headerName: "KIND",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      return (
        <Stack flexDirection="row" gap={1}>
          <span>
            {" "}
            {params?.row?.Boundaries?.land == true && (
              <Chip size="small" label="LAND" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.building == true && (
              <Chip size="small" label="BUILDING" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.machinery == true && (
              <Chip size="small" label="MACHINERY" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.others == true && (
              <Chip size="small" label="OTHERS" />
            )}
          </span>
        </Stack>
      );
    },
  },
  {
    field: "classification",
    headerName: "CLASS",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const classification = Array.isArray(params.row?.classification)
        ? params.row?.classification
        : [];

      return (
        <Stack flexDirection="row" gap={1} alignItems="center" height="100%">
          {classification?.map((obj, i) => (
            <Chip key={i} label={obj?.classification} size="small" />
          ))}
        </Stack>
      );
    },
  },
  {
    field: "LocationOfProperty",
    headerName: "LOCATION OF PROPERTY",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const block = params.row?.BLOCK;
      const brgy = params.row?.Brgy;
      return (
        <span>
          {block} {brgy}
        </span>
      );
    },
  },
  {
    field: "AssessedValue",
    headerName: "ASSESSED VALUE",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const classification = params.row?.classification || [];
      return <span>{classification[0]?.assessedValue}</span>;
    },
  },
  {
    field: "TAXABILITY",
    headerName: "TAXABILITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const TAXABILITY = params.row?.TAXABILITY;
      return <span>{TAXABILITY?.toUpperCase()}</span>;
    },
  },
  {
    field: "dateOfEffectivity",
    headerName: "EFFECTIVITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const dateOfEffectivity = dayjs(params.row?.dateOfEffectivity);
      return <span>{dateOfEffectivity.format("MM/DD/YYYY")}</span>;
    },
  },
];

export const CLASSIFICATION_COLUMN = [
  {
    field: "classification",
    headerName: "Classification",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "area",
    headerName: "Area",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "marketValue",
    headerName: "Market Value",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "actualUse",
    headerName: "Actual Use",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "level",
    headerName: "Level",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "assessedValue",
    headerName: "Assessed Value",
    editable: true,
    headerClassName: "data-grid-header",
    flex: 1,
  },
];

export const CLASSIFICATION_DEFAULT = {
  classification: "",
  area: "",
  marketValue: "",
  actualUse: "",
  level: "",
  assessedValue: "",
};

export const ASSESSOR_TAB_LINKS = [
  {
    to: "",
    label: "Assessment Roll",
  },
  {
    to: "pending",
    label: "Pending",
  },
  {
    to: "cancels",
    label: "Canscels",
  },
];

export const COMPUTED_COLUMN = [
  {
    field: "DATE",
    headerName: "DATE",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    editable: false,
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const date = dayjs(params.row?.DATE);
      return <span>{date?.format("MMMM, DD YYYY")}</span>;
    },
  },
  {
    field: "PropertyOwner",
    headerName: "PROPERTY OWNER NAME",
    width: 320,
    editable: false,
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const fname = params.row?.fname;
      const mname = params.row?.mname;
      const lname = params.row?.lname;
      return (
        <span>
          {fname} {mname} {lname}
        </span>
      );
    },
  },
  {
    field: "address",
    headerName: "LOCATION",
    width: 320,
    editable: false,
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const block = params.row?.BLOCK;
      const brgy = params.row?.Brgy;
      return (
        <span>
          {block} {brgy}
        </span>
      );
    },
  },
  {
    field: "PID",
    headerName: "PIN NUMBER",
    width: 220,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "ArpNo",
    headerName: "ARP No.",
    width: 270,
    editable: false,
    headerClassName: "data-grid-header",
  },

  {
    field: "oldArp",
    headerName: "OLD ARP",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "AssessedValue",
    headerName: "ASSESSED VALUE",
    width: 220,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "Amount",
    headerName: "AMOUNT",
    width: 220,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "ComputedBy",
    headerName: "COMPUTED BY:",
    width: 220,
    editable: false,
    headerClassName: "data-grid-header",
  },
];

export const LANDTAX_TAB_LINKS = [
  {
    to: "",
    label: "Assessment Roll",
  },
  {
    to: "computed",
    label: "Computed",
  },
  {
    to: "paidlist",
    label: "Paid List",
  },
];

export const CASH_TAB_LINKS = [
  {
    to: "",
    label: "Pending",
  },
  {
    to: "paidlist",
    label: "Paid List",
  },
];

export const BRGY_LIST = [
  "I-A",
  "I-B",
  "I-C",
  "II-A",
  "II-B",
  "II-C",
  "II-D",
  "II-E",
  "II-F",
  "III-A",
  "III-B",
  "III-C",
  "III-D",
  "III-E",
  "III-F",
  "IV-A",
  "IV-B",
  "IV-C",
  "V-A",
  "V-B",
  "V-C",
  "V-D",
  "VI-A",
  "VI-B",
  "VI-C",
  "VI-D",
  "VI-E",
  "VII-A",
  "VII-B",
  "VII-C",
  "VII-D",
  "VII-E",
  "STA. ANA",
  "STO. ANGEL (Ilog)",
  "SAN ANTONIO I (Balanga)",
  "SAN ANTONIO II (Sapa)",
  "SAN BARTOLOME",
  "BAUTISTA",
  "SAN BUENAVENTURA (Palakpakin)",
  "STA. CATALINA (Sandig)",
  "CONCEPCION",
  "SAN CRISPIN",
  "STO. CRISTO",
  "SAN CRISTOBAL",
  "STA. CRUZ (Putol)",
  "DEL REMEDIO (Wawa)",
  "SAN DIEGO",
  "DOLORES",
  "STA. ELENA",
  "STA. FILOMENA (Banlagin)",
  "SAN FRANCISCO (Calihan)",
  "SAN GABRIEL",
  "SAN GREGORIO",
  "STA. ISABEL",
  "SAN IGNACIO",
  "SAN ISIDRO (Balagbag)",
  "SAN JOAQUIN",
  "SAN JOSE (Malamig)",
  "SAN JUAN",
  "SAN LORENZO (Saluyan)",
  "SAN LUCAS I (Malinaw)",
  "SAN LUCAS II (Malinaw)",
  "SAN MARCOS (Tikew)",
  "STA. MARIA",
  "STA. MA. MAGDALENA",
  "SAN MATEO",
  "SAN MIGUEL",
  "STA. MONICA",
  "SAN NICOLAS",
  "STO. NIÑO",
  "SAN PEDRO",
  "SAN RAFAEL",
  "SAN ROQUE",
  "STMO. ROSARIO",
  "SANTIAGO I (Bulaho)",
  "SANTIAGO II (Bulaho)",
  "SOLEDAD",
  "STA. VERONICA (Bae)",
  "SAN VICENTE",
];

export const INITIAL_FORM_DATA = {
  ArpNo: "",
  PID: "",
  fname: "",
  mname: "",
  lname: "",
  Address: "",
  TIN: "",
  Telephone: "",
  AdminFname: "",
  AdminMname: "",
  AdminLname: "",
  AdminAddress: "",
  AdminTIN: "",
  AdminTel: "",
  noAndSt: "",
  Brgy: "",
  oct: "",
  Survey: "",
  cct: "",
  LOT: "",
  DATE: null,
  BLOCK: "",
  TAXABILITY: "",
  qtr: 9,
  year: null,
  dateOfEffectivity: null,
  Boundaries: [],
  classification: [],
  oldArp: "",
  memoranda: "",
  previousOwner: "",
  previousOwner: "",
  previousAV: "",
  previousPid: "",
  memoranda: "",
};

export const BOUNDARIES_DETAILS_INITIAL = {
  boundaryType: "",
  active: "",
  description: "",
  NEboundary: "",
  northBoundary: "",
  EastBoundary: "",
  SEBoundary: "",
  southBoundary: "",
  SWBoundary: "",
  westBoundary: "",
  NWBoundary: "",
};

export const BOUNDARIES_INITIAL_STATE = {
  land: false,
  landDetails: BOUNDARIES_DETAILS_INITIAL,
  building: false,
  buildingDetails: BOUNDARIES_DETAILS_INITIAL,
  machinery: false,
  machineryDetails: BOUNDARIES_DETAILS_INITIAL,
  others: false,
  othersDetails: BOUNDARIES_DETAILS_INITIAL,
};

export const SUBDIVIDE_INITIAL_DATA = {
  ArpNo: "",
  latestArp: "",
  count: 0,
  startArpNo: "",
};

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
    bgcolor: "#1A237E",
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
  border: "none",
};

export const PAGE_SIZE_OPTION = [10, 50, 100];
export const DATA_GRID_INITIAL_STATE = {
  pagination: {
    paginationModel: {
      pageSize: 100,
      page: 0,
    },
  },
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
  "Poblacion I",
  "Poblacion II",
  "Poblacion III",
  "Poblacion IV",
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
  "Poblacion I": { lat: 13.9618, lng: 121.3198 },
  "Poblacion II": { lat: 13.9643, lng: 121.3212 },
  "Poblacion III": { lat: 13.9596, lng: 121.3227 },
  "Poblacion IV": { lat: 13.964, lng: 121.3238 },
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
