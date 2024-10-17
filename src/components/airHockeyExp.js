import React, { useState } from "react";

import {
  Container,
  Typography,
  Box,
  Link,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../styles/theme"; // Import the styles object
import { Margin } from "@mui/icons-material";
import { StaticImage } from "gatsby-plugin-image";

const radioStyle = {
  "& .MuiTypography-root": {
    fontFamily: "Myriad-Pro", // Customize the font family
    fontSize: "20px", // Customize the font size
    color: "#4A4A4A",
  },
};

export default function AirHockeyExp() {
  const [method, setMethod] = useState("ad");
  const methodName = {
    ad: "CAPTURE (Ours)",
    ed: "Expert Distillation",
    tn: "TuneNet",
    dr: "Domain Randomization",
  };

  const videoDes = {
    ad: "Comparison of puck simulation and real-world trajectory across iterations, with environmental parameters identified by CAPTURE.",
    ed: "Comparison of puck simulation and real-world trajectory across iterations, with environmental parameters identified by Expert Distillation.",
    tn: "Comparison of puck simulation and real-world trajectory across iterations, with environmental parameters identified by TuneNet.",
    dr: "Comparison of puck simulation and real-world trajectory across iterations, using an agent trained with domain randomization.",
  };

  // List of videos and their captions
  const videoSize = "lg";

  // Handle radio button change
  const handleChange = (event) => {
    setMethod(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" sx={styles.subTitle}>
        Table Air Hockey Experiments
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <FormControl component="fieldset" sx={{ justifyContent: "center" }}>
          <RadioGroup
            row
            name="video-selector"
            value={method}
            onChange={handleChange}
          >
            <FormControlLabel
              value="ad"
              control={<Radio />}
              sx={radioStyle}
              label={methodName.ad}
            />
            <FormControlLabel
              value="ed"
              control={<Radio />}
              sx={radioStyle}
              label={methodName.ed}
            />
            <FormControlLabel
              value="tn"
              control={<Radio />}
              sx={radioStyle}
              label={methodName.tn}
            />
            <FormControlLabel
              value="dr"
              control={<Radio />}
              sx={radioStyle}
              label={methodName.dr}
            />
          </RadioGroup>
        </FormControl>
      </Box>

      {/* Conditionally render the selected video */}
      <Container maxWidth="lg">
        <video
          muted
          autoPlay
          loop
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
          controls
          key={`airhockey_${method}`}
        >
          <source
            src={`/videos/airhockey_${method}_${videoSize}.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Typography sx={{ ...styles.body1, ...{ textAlign: "center" } }}>
          {videoDes[method]}
        </Typography>
      </Container>
    </Container>
  );
}
