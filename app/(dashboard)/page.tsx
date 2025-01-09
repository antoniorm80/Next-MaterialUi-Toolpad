import * as React from "react";
import Typography from "@mui/material/Typography";
import { auth } from "../../auth";
import BasicTable from "../components/Table";
import EnhancedTable from "../components/DataTable";

export default async function HomePage() {
  const session = await auth();

  // Nota: el error era porque no lo había puesto en un fragmento y deben de poner "use client"
  return (
    <>
      <Typography>
        Welcome to Toolpad, {session?.user?.name || "User"}!
      </Typography>
      {/* <BasicTable /> */}
      <EnhancedTable />
    </>
  );
}
