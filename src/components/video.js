import * as React from "react";
import { Container, Typography, Link, Box } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../styles/theme"; // Import the styles object
import { Margin } from "@mui/icons-material";
import LazyYouTube from "./lazyYouTube";

export default function Video() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ ...styles.subTitle, ...{ textAlign: "center" } }}
        >
          Video
        </Typography>

        {/* <iframe
            src="https://www.youtube.com/embed/vz-jqNjhikU?si=PfrnbQyclcvMzsW-"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          /> */}
        <LazyYouTube videoId="yIqI-jtfcYY?si=rWWpqF1PHek7Ah2C" />
        {/* <LazyYouTube videoId="xm4iHdFoZVE?si=0G0pmurI7dpnJWab" /> */}
      </Container>
    </>
  );
}