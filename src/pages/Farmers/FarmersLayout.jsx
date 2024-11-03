import React from "react";
import { Outlet } from "react-router-dom";
import { PageContainer } from "../../components/layout/PageContainer";

const FarmersLayout = () => {
  return (
    <PageContainer
      tabs={[
        { to: "", label: "Farmers" },
        { to: "reports", label: "Reports" },
        { to: "archived", label: "Archived" },
      ]}
    >
      <Outlet />
    </PageContainer>
  );
};

export default FarmersLayout;
