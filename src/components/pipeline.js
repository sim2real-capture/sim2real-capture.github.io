import * as React from "react";
import { Container, Typography, Link, Button } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import styles from "../styles/theme"; // Import the styles object

export default function Pipeline() {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "24px" }}>
        {/* PipeLine */}
        <StaticImage
          src="../images/pipeline_highlevel.svg" // Path to the image
          alt="Pipeline"
          placeholder="blurred"
          layout="fullWidth" // or "constrained" or "fullWidth"
          //   width={300} // You can control the size
        />
        <Typography
          variant="body1"
          sx={{ ...styles.body1, ...{ marginTop: "10px" } }}
        >
          CAPTURE aims to take the history information to predict the next step
          environment parameters. SysID causal transformer adapts the simulation
          environment parameters to match the real-world performance on the fly
          via next-token prediction. CAPTURE takes three iterations to identify
          the correct center of mass of celery.
        </Typography>
      </Container>
    </>
  );
}
