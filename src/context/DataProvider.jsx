import React, { createContext } from "react";
import { useQuery } from "react-query";
import { fetchApprovalData } from "../api/approvalAPI";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const {
    data: approvalData,
    isLoading: isApprovalAPILoading,
    isError: isApprovalAPIError,
  } = useQuery("approvalData", fetchApprovalData);

  return (
    <DataContext.Provider
      value={{ approvalData, isApprovalAPILoading, isApprovalAPIError }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
