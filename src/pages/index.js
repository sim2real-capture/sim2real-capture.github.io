import * as React from "react";
import { Container, Typography } from "@mui/material";

import Title from "../components/title";
import Pipeline from "../components/pipeline";
import Abstract from "../components/abstract";
import ScoopExp from "../components/scoopExp";
import AirHockeyExp from "../components/airHockeyExp";
import BibTeX from "../components/bibtex";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "50px", marginBottom: "20vh" }}>
      <Title />
      <Pipeline />
      <Abstract />
      <ScoopExp />
      <AirHockeyExp />
      <BibTeX />
    </Container>
  );
}
