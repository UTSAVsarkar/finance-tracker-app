import * as React from "react";
import NavigateNext from "@mui/icons-material/NavigateNext";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { css } from "@emotion/css";
import Dashboard from "./components/Dashboard/dashboard";
import TableComponent from "./components/Table/table";
import { dataArray } from "./data";

export default function BasicButtons() {
  const [isHovered, setIsHovered] = React.useState(false); // State to track hover
  const [isHovered1, setIsHovered1] = React.useState(false); // State to track hover
  const [isHovered2, setIsHovered2] = React.useState(false); // State to track hover
  const [data, setData] = React.useState(dataArray);
  const [page, setPage] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");

  const renderMainElement = () => {
    switch (page) {
      case 0:
        return <TableComponent dataArray={data} />;
      case 1:
        return <Dashboard data={data} />;
    }
  };

  const renderElement = () => {
    switch (page) {
      case 0:
        return (
          <>
            <input
              type="text"
              placeholder="Enter title"
              value={title}
              style={{
                border: "none",
                borderRadius: "15px",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)" /* Glassy effect */,
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)",
                transition: "background 0.3s ease, color 0.3s ease",
                color: "white",
                fontSize: "16px",
                outline: "none",
                height: 40,
                margin: "10px",
                paddingLeft: 15,
                width: "25%",
              }}
              className={css`
                ::placeholder {
                  color: rgba(255, 255, 255, 0.8);
                  opacity: 1; /* Firefox */
                }
              `}
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
            <input
              type="text"
              value={price}
              placeholder="Enter amount"
              className={css`
                ::placeholder {
                  color: rgba(255, 255, 255, 0.8);
                  opacity: 1; /* Firefox */
                }
              `}
              style={{
                border: "none",
                borderRadius: "15px",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)" /* Glassy effect */,
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)",
                transition: "background 0.3s ease, color 0.3s ease",
                color: "white",
                fontSize: "16px",
                outline: "none",
                height: 40,
                margin: "10px",
                paddingLeft: 15,
                width: "25%",
              }}
              onChange={(e) => setPrice(e.currentTarget.value)}
            />
            <div
              style={{
                border: "none",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)" /* Glassy effect */,
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)",
                transition: "background 0.3s ease, color 0.3s ease",
                color: "white",
                fontSize: "16px",
                outline: "none",
                height: 35,
                width: 35,
                marginTop: "14px",
                marginLeft: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: isHovered1
                  ? "rgba(255,255,255,0.3)"
                  : "rgba(255,255,255,0.1)",
                cursor: "pointer",
              }}
              onMouseEnter={() => setIsHovered1(true)} // Set hover state to true on mouse enter
              onMouseLeave={() => setIsHovered1(false)} // Set hover state to false on mouse leave
              onClick={() => {
                setPrice("");
                setTitle("");
                const date = new Date();
                const day = date.getDay();
                const month = date.getMonth();
                const year = date.getFullYear();
                const newArray = [
                  {
                    title: title,
                    date: `${day}/${month}/${year}`,
                    price: price,
                  },
                  ...dataArray,
                ];
                setData(newArray);
              }}
            >
              <AddIcon />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <a
              className="btn btn-primary"
              style={{
                display: "inline-block",
                padding: "10px 10px",
                textDecoration: "none",
                borderRadius: "15px",
                backgroundColor: isHovered2
                  ? "rgba(255,255,255,0.3)"
                  : "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(30px)",
                color: "rgba(255,255,255,0.8)",
                fontSize: "14px",
                letterSpacing: "2px",
                cursor: "pointer",
                textTransform: "uppercase",
                transition: "background-color 0.3s ease", // Adding transition for smooth effect
                position: "absolute",
                margin: 10,
                left: 0,
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)",
              }}
              onMouseEnter={() => setIsHovered2(true)} // Set hover state to true on mouse enter
              onMouseLeave={() => setIsHovered2(false)} // Set hover state to false on mouse leave
              onClick={() => {
                setIsHovered2(false);
                setPage(page - 1);
              }}
            >
              <ArrowBackIosIcon style={{ marginBlock: -3, fontSize: 16 }} />
              Back
            </a>
          </>
        );
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#17202A",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            color: "wheat",
            background: "rgba(255, 255, 255, 0.16)",
            borderRadius: 16,
            minHeight: "90vh",
            minWidth: "90vw",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(5.4px)",
            WebkitBackdropFilter: "blur(5.4px)",
            border: "1px solid rgba(255, 255, 255, 0.17)",
            display: "flex",
          }}
        >
          {renderElement()}
          <a
            className="btn btn-primary"
            style={{
              display: page === 1 ? "none" : "inline-block",
              padding: "10px 10px",
              textDecoration: "none",
              borderRadius: "15px",
              backgroundColor: isHovered
                ? "rgba(255,255,255,0.3)"
                : "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(30px)",
              color: "rgba(255,255,255,0.8)",
              fontSize: "14px",
              letterSpacing: "2px",
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "background-color 0.3s ease", // Adding transition for smooth effect
              position: "absolute",
              margin: 10,
              right: 0,
              boxShadow:
                "0 4px 6px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
            onClick={() => setPage(page + 1)}
          >
            Analyze
            <NavigateNext style={{ marginBlock: -6 }} />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
          }}
        >
          {renderMainElement()}
        </div>
      </div>
    </>
  );
}
