import * as React from "react";
import { Container, Typography, Link, Button } from "@mui/material";
// import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
// import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../styles/theme"; // Import the styles object
// import { Margin } from "@mui/icons-material";

export default function Abstract() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ ...styles.subTitle, ...{ textAlign: "center" } }}
        >
          Abstract
        </Typography>
        <Typography sx={styles.body1}>
          Sim-to-real transfer remains a significant challenge in robotics due
          to the discrepancies between simulated and real-world dynamics.
          Traditional methods like Domain Randomization often fail to capture
          fine-grained dynamics, limiting their effectiveness for precise
          control tasks. In this work, we propose a novel approach that
          dynamically adjusts simulation environment parameters online using
          in-context learning. By leveraging past interaction histories as
          context, our method adapts the simulation environment dynamics to
          match real-world dynamics without requiring gradient updates,
          resulting in faster and more accurate alignment between simulated and
          real-world performance. We validate our approach across two tasks:
          object scooping and table air hockey. In the sim-to-sim evaluations,
          our method significantly outperforms the baselines on environment
          parameter estimation by 80% and 42% in the object scooping and table
          air hockey setups, respectively. Furthermore, our method achieves at
          least 70% success rate in sim-to-real transfer on object scooping
          across three different objects. By incorporating historical
          interaction data, our approach delivers efficient and smooth system
          identification, advancing the deployment of robots in dynamic
          real-world scenarios.
        </Typography>
      </Container>
    </>
  );
}
