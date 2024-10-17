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

const VideoBlock = ({ name, method, videoSize }) => {
  return (
    <Grid size={{ xs: 6, md: 6, lg: 3 }}>
      <video
        muted
        autoPlay
        loop
        style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        controls
      >
        <source
          src={`/videos/${name}_${method}_${videoSize}.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </Grid>
  );
};

const radioStyle = {
  "& .MuiTypography-root": {
    fontFamily: "Myriad-Pro", // Customize the font family
    fontSize: "20px", // Customize the font size
    color: "#4A4A4A",
  },
};

export default function ScoopExp() {
  const [scoopObject, setScoopObject] = useState("celery");

  // List of videos and their captions
  const methodList = ["ad", "ed", "tn", "dr"];
  const videoSize = "xs";

  // Handle radio button change
  const handleChange = (event) => {
    setScoopObject(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" sx={styles.subTitle}>
        Object Scooping Experiments
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <FormControl component="fieldset" sx={{ justifyContent: "center" }}>
          <RadioGroup
            row
            name="video-selector"
            value={scoopObject}
            onChange={handleChange}
          >
            <FormControlLabel
              value="celery"
              control={<Radio />}
              sx={radioStyle}
              label="Celery"
            />
            <FormControlLabel
              value="carrot"
              control={<Radio />}
              sx={radioStyle}
              label="Carrot"
            />
            <FormControlLabel
              value="eggplant"
              control={<Radio />}
              label="Eggplant"
              sx={radioStyle}
            />
          </RadioGroup>
        </FormControl>
      </Box>

      {/* Conditionally render the selected video */}
      <Grid container spacing={2}>
        {methodList.map((item) => (
          <VideoBlock
            key={`${scoopObject}_${item}`}
            name={scoopObject}
            method={item}
            videoSize={videoSize}
          />
        ))}
      </Grid>
      <Container maxWidth="md" sx={{ marginTop: "24px" }}>
        <Typography
          variant="body1"
          sx={{ ...styles.body1, ...{ textAlign: "center" } }}
        >
          Comparison of continuous object scooping results across iterations.
        </Typography>
        {scoopObject === "celery" && (
          <StaticImage
            src="../images/exp_scoop_celery_result.png"
            alt="Pipeline"
            placeholder="blurred"
            layout="fullWidth"
          />
        )}
        {scoopObject === "carrot" && (
          <StaticImage
            src="../images/exp_scoop_carrot_result.png"
            alt="Pipeline"
            placeholder="blurred"
            layout="fullWidth"
          />
        )}
        {scoopObject === "eggplant" && (
          <StaticImage
            src="../images/exp_scoop_eggplant_result.png"
            alt="Pipeline"
            placeholder="blurred"
            layout="fullWidth"
          />
        )}
      </Container>
    </Container>
  );
}
