import React, { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { ThemeContext } from "../../../contexts/ThemeContext";

function Github() {
  const { theme } = useContext(ThemeContext);
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        backgroundColor: theme.primary,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Github!!</strong>
        </h1>
        <GitHubCalendar
          username="bristi07"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </div>
    </Row>
  );
}

export default Github;
