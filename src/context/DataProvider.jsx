import React, { createContext } from "react";
import { useQuery } from "react-query";
import { fetchApprovalData, fetchRejectedData } from "../api/approvalAPI";
import { fetchFarmersArchivedData, fetchFarmersData } from "../api/farmersAPI";
import { fetchAnnouncementData } from "../api/announcementAPI";
import {
  fetchLivestockAnalytics,
  fetchLivestockData,
} from "../api/livestockAPI";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { data: approvalData, isLoading: approvalDataLoading } = useQuery(
    "approvalData",
    fetchApprovalData
  );
  const { data: rejectedData, isLoading: rejectedDataLoading } = useQuery(
    "rejectedData",
    fetchRejectedData
  );
  const { data: farmersData, isLoading: farmersDataLoading } = useQuery(
    "farmersData",
    fetchFarmersData
  );
  const { data: farmersArchivedData, isLoading: farmersArchivedDataLoading } =
    useQuery("farmersArchivedData", fetchFarmersArchivedData);

  const { data: announcementData } = useQuery(
    "announcementData",
    fetchAnnouncementData
  );
  const { data: livestockData } = useQuery("livestockData", fetchLivestockData);
  const { data: livestockAnalytics } = useQuery(
    "livestockAnalytics",
    fetchLivestockAnalytics
  );

  return (
    <DataContext.Provider
      value={{
        approvalData,
        approvalDataLoading,
        rejectedData,
        rejectedDataLoading,
        farmersData,
        farmersDataLoading,
        farmersArchivedData,
        farmersArchivedDataLoading,
        announcementData,
        livestockData,
        livestockAnalytics,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
