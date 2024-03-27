import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "title", label: "Title", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 170 },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

export default function TableComponent({ dataArray }) {
  return (
    <Paper
      sx={{
        overflow: "hidden",
        marginTop: "5%",
        backgroundColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(30px)",
        color: "rgba(255,255,255,0.8)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2),0 1px 3px rgba(0, 0, 0,0.4))",
      }}
    >
      <TableContainer
        sx={{
          height: "70vh",
          width: "88vw",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "rgba(79, 70, 174)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderBottomColor: "rgba(79, 70, 174)",
                    color: "white",
                    fontSize: 16,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataArray.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          fontSize: 15,
                          color: "rgba(255,255,255,0.8)",
                          borderBottomColor: "rgba(255,255,255,0.3)",
                        }}
                      >
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
