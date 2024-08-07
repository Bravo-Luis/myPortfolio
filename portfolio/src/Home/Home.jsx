import { Container, Typography } from "@mui/material";
import './Home.css'; // Make sure to import the updated stylesheet

function Home() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        textAlign: "center", // Center text alignment
        backgroundColor: "white",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          width: "100vw",
        }}
      >
        <Typography variant="h1" component="div" sx={{ fontWeight: "bold" }}>
          <div className="text-container">
            <span className="shine-text">LUIS BRAVO</span>
          </div>
        </Typography>
        <Typography variant="h3" component="div" sx={{ fontWeight: "bold" }}>
          <div className="text-container">
            <span className="shine-text">Software Engineer</span>
          </div>
        </Typography>
      </Container>
    </Container>
  );
}

export default Home;
