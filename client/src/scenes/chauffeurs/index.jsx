import React from "react";
import {Box, Button, useTheme} from "@mui/material";
import {Link} from "react-router-dom"
import { useGetChauffeurQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetChauffeurQuery();
  console.log("data", data);

  const columns = [
    {
      field: "matricule",
      headerName: "Matricule",
      flex: 1,
      editable: true
    },
    {
      field: "nom",
      headerName: "Nom",
      flex: 0.5,
      editable: true

    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: true

    },
    {
      field: "telephone",
      headerName: "Telephone",
      flex: 0.5,
      // renderCell: (params) => {
      //   return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      // },
      editable: true

    },
    {
      field: "etat",
      headerName: "etat",
      flex: 0.4,
      editable: true
    },
    {
      field: "update",
      headerName: "Update",
      sortable: false,
      flex: 1,
      editable: true,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation()

          const api = params.api
          const thisRow = {}

        }
        return <Link style={{
          textDecoration : 'none',
          color: 'white',
          backgroundColor : "#21295c",
          borderRadius : 10,
          padding : '10px 15px',
          fontSize : 16

        }} to={`/chauffeur/${params.row._id}}`} >edit</Link>
      }
    }
    // {
    //   field: "occupation",
    //   headerName: "Occupation",
    //   flex: 1,
    // },
    // {
    //   field: "role",
    //   headerName: "Role",
    //   flex: 0.5,
    // },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUSTOMERS" subtitle="List of Customers" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
          onCellEditStop={(params, event) => {
            console.log(params);
          }}
        />
      </Box>
    </Box>
  );
};

export default Customers;
