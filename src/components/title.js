import * as React from "react";
import { Container, Typography, Link, Button } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../styles/theme"; // Import the styles object
// import { Margin } from "@mui/icons-material";

export default function Title() {
  // Generic button component
  const CustomButton = ({ label, icon }) => {
    return (
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "30px",
          fontSize: "16px",
        }}
        startIcon={icon}
      >
        {label}
      </Button>
    );
  };

  const ArxivButton = () => {
    return (
      <CustomButton
        label="arxiv"
        icon={
          <img
            src="./images/arxiv-logomark-small-white.svg"
            alt="arXiv"
            style={{ width: "20px", height: "20px" }}
          />
        }
      />
    );
  };

  const PDFButton = () => {
    return <CustomButton label="PDF" icon={<PictureAsPdfIcon />} />;
  };

  const CodeButton = () => {
    return <CustomButton label="Code" icon={<GitHubIcon />} />;
  };

  return (
    <>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography variant="h1" sx={styles.title}>
          Dynamics as Prompts: In-Context Learning for Sim-to-Real System
          Identifications
        </Typography>
      </Container>

      {/* Author list */}
      <Container maxWidth="md">
        <Typography
          variant="body1"
          sx={{
            ...styles.body1,
            ...{
              textAlign: "center",
            },
          }}
        >
          <Link
            href={"https://xilunzhangrobo.github.io/"}
            sx={styles.authorLink}
          >
            Xilun Zhang
          </Link>
          <sup>*1</sup>,{" "}
          <Link href={"https://shiqiliu-67.github.io/"} sx={styles.authorLink}>
            Shiqi Liu
          </Link>
          <sup>*1</sup>,{" "}
          <Link href={"https://peidehuang.github.io/"} sx={styles.authorLink}>
            Peide Huang
          </Link>
          <sup>1</sup>,{" "}
          <Link href={"https://willxxy.github.io/"} sx={styles.authorLink}>
            William Jongwon Han
          </Link>
          <sup>1</sup>,{" "}
          <Link href={"https://yiqilyu.me/"} sx={styles.authorLink}>
            Yiqi Lyu
          </Link>
          <sup>1</sup>,{" "}
          <Link href={"https://mxu34.github.io/"} sx={styles.authorLink}>
            Mengdi Xu
          </Link>
          <sup>1</sup>,{" "}
          <Link
            href={
              "https://www.meche.engineering.cmu.edu/directory/bios/zhao-ding.html"
            }
            sx={styles.authorLink}
          >
            Ding Zhao
          </Link>
          <sup>1</sup>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            ...styles.body1,
            ...{
              textAlign: "center",
            },
          }}
        >
          <sup>1</sup>Carnegie Mellon University; <sup>*</sup>Equal Contribution
        </Typography>
      </Container>

      {/* Links */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <ArxivButton />
        <PDFButton />
        <CodeButton />
      </div>
    </>
  );
}
