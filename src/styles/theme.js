const primeColor = "#363636";
const SecondColor = "#4A4A4A";

const styles = {
  authorLink: {
    fontFamily: "Myriad-Pro",
    fontSize: "20px",
    color: "#00B803",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  title: {
    fontSize: "48px",
    fontFamily: "Myriad-Pro",
    textAlign: "center",
    fontWeight: "bold",
    color: primeColor,
    marginBottom: "24px",
  },
  subTitle: {
    fontSize: "32px",
    fontFamily: "Myriad-Pro",
    textAlign: "center",
    fontWeight: "bold",
    color: primeColor,
    marginTop: "30px",
    marginBottom: "10px",
  },
  body1: {
    fontSize: "20px",
    fontFamily: "Myriad-Pro",
    color: SecondColor,
  },
  body2: {
    fontSize: "16px",
    fontFamily: "Myriad-Pro",
    color: SecondColor,
  },
};

export default styles;
