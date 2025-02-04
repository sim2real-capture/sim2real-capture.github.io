import React, { useState, useEffect } from "react";
import { Container, Typography, Link, Button, Box } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../styles/theme"; // Import the styles object
import { Margin } from "@mui/icons-material";

export default function BibTeX() {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch("files/bibtex.bib") // Path to the file in the static folder
      .then((response) => response.text())
      .then((text) => setCode(text));
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ ...styles.subTitle, ...{ textAlign: "center" } }}
        >
          BibTeX
        </Typography>
        <Box
          sx={{
            backgroundColor: "#f0f0f0", // Change this to the desired background color
            padding: "30px", // Add padding for better spacing
          }}
        >
          <Typography
            component="pre"
            sx={{ fontSize: "14px", fontFamily: "monospace", color: "032F62" }}
          >
            <code>{code}</code>
          </Typography>
        </Box>
      </Container>
    </>
  );
}
