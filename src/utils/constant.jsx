import cow from "../assets/images/cow.png";
import goat from "../assets/images/goat.png";
import chicken from "../assets/images/chicken.png";
import duck from "../assets/images/duck.png";
import carabao from "../assets/images/carabao.png";
import pig from "../assets/images/pig.png";
import horse from "../assets/images/horse.png";

export const HEADER_HEIGHT = "80px";
export const DRAWER_WIDTH_OPEN = 250;
export const DRAWER_WIDTH_CLOSED = 60;
// export const BASE_URL = "http://192.168.68.111:3500";
export const BASE_URL = "http://localhost:3500";
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
  { name: "Cow", count: 0 },
  { name: "Goat", count: 0 },
  { name: "Chicken", count: 23 },
  { name: "Duck", count: 0 },
  { name: "Carabao", count: 101 },
  { name: "Pig", count: 0 },
  { name: "Horse", count: 1 },
];
