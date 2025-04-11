import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  Container,
  CssBaseline,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import chair from "../../public/dental-chair.png";
import zIndex from "@mui/material/styles/zIndex";
import banner from "../../public/banner_new.png";

export default function Hero(props) {
  // const GridItem = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));
  const LeftContent = (
    <Grid
      sx={{ flexGrow: 1 }}
      item
      container
      md={6}
      xs={12}
      justifyContent="center"
      spacing={0}
      alignItems="center"
      direction="column"
      justifySelf="center"
      // alignItems="center",
      //     direction="column",
      // justifyContent="center"
    >
      <Stack spacing={6} sx={{ zIndex: 10, marginTop: "200px" }}>
        <Stack spacing={3}>
          <Typography
            variant="h1"
            sx={{
              lineHeight: 1.2,
              fontWeight: 500,
              color: "#798C77",
              textShadow: "2px 2px 2px white",

              // alignItems: "center",
            }}
          >
            DentaFlex
          </Typography>
          <Typography
            variant="h6"
            sx={{
              lineHeight: 1.2,
              fontWeight: 500,
            }}
          >
            We help you hire temporary workers on short notice from near your
            area.
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
  const RightContent = (
    <Grid
      sx={{ flexGrow: 1 }}
      item
      container
      md={6}
      xs={12}
      justifyContent="center"
      alignItems="center"
    >
      <img
        src={banner}
        alt="banner-img"
        style={{
          position: "fixed",
          // right: -100,
          top: 90,
          opacity: 0.3,
          zIndex: 1,
          maxWidth: "100%",
          height: "auto",
          padding: 0,
          margin: 0,
        }}
      />
    </Grid>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={{ xs: 15, md: 2 }} sx={{ flexGrow: 1 }}>
        {LeftContent}
        {RightContent}
      </Grid>
    </React.Fragment>
  );
}
