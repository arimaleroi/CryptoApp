import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { GitHub, LinkedIn, Telegram } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        p: 6,
        backgroundColor: "#1976d2",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              About
            </Typography>
            <Typography variant="body2" color="white">
              The project uses free API CoinGeecko. <br />
              Technologies used on the project: <br /> C#, ASP.NET, Javascript,
              React, HTML, CSS, MUI and some libraries for React
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Contacts
            </Typography>
            <Typography variant="body2" color="white">
              Email: dazy.shakespeare@gmail.com
            </Typography>
            <Typography variant="body2" color="white">
              Phone: +38 (099) 521-71-59
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              My Links
            </Typography>
            <Link href="https://github.com/arimaleroi" color="common.white">
              <GitHub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/notsaintsay/"
              color="common.white"
              sx={{ pl: 1, pr: 1 }}
            >
              <LinkedIn />
            </Link>
            <Link href="https://t.me/r0ninn" color="common.white">
              <Telegram />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="common.white" align="center">
            {"Copyright © "}
            <span color="common.white">CryptoApp</span>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
        {showScrollButton && (
          <Fab
            variant="extended"
            onClick={handleScrollToTop}
            sx={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              color: "white",
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#cfcfcf50",
              },
            }}
          >
            <NavigationIcon sx={{ mr: 1 }} />
            Up
          </Fab>
        )}
      </Container>
    </Box>
  );
};

export default Footer;
