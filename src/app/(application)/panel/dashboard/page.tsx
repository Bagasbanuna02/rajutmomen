"use client";

import Dashboard_AlertSection from "@/components/Application/Panel/Dashboard/dashboard-alert-section";
import { Component_ApplicationTitle } from "@/components/ShareComponents";
import { Stack } from "@mantine/core";

export default function DashboardPanel() {
  return (
    <>
      <Stack>
        <Component_ApplicationTitle title="Dashboard" />
        <Dashboard_AlertSection />
      </Stack>
    </>
  );
}
