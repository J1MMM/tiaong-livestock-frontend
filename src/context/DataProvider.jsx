import React, { createContext } from "react";
import { useQuery } from "react-query";
import { fetchApprovalData, fetchRejectedData } from "../api/approvalAPI";
import { fetchFarmersArchivedData, fetchFarmersData } from "../api/farmersAPI";
import { fetchAnnouncementData } from "../api/announcementAPI";

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
