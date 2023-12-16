import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import background from "../assets/profile.jpg";

const Section = styled(Paper)(({ theme }) => ({
  display: "block",
  padding: theme.spacing(4),
  borderRadius: 0,
}));

const Home = () => {
  return (
    <>
      <Grid container columns={{ xs: 12 }}>
        <Grid xs={12}>
          <Section
            elevation={0}
            sx={{
              backgroundImage: `url(${background})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.45)",
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="95vh"
            >
              <Typography variant="h3">
                You don't have to grow through it alone.
              </Typography>
            </Box>
          </Section>
        </Grid>
        {/* todo: implement this */}
        {/* <Grid xs={12}>
          <Section
            elevation={0}
            sx={{ 
              height: "20vh", 
              // backgroundColor: "#173F2F" 
              backgroundColor: "#668476",
              // backgroundColor: "#D16014"
              // backgroundColor: "#362816"
              // backgroundColor: "#FEFCF3"
              boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.25)",

            }}
            id="socials"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h3">
                Socials
              </Typography>
            </Box>
          </Section>
        </Grid> */}
        {/* <Grid xs={12}>
          <Section elevation={0} sx={{ height: "80vh" }} id="about">
            <h1>About</h1>
          </Section>
        </Grid> */}
      </Grid>
    </>
  );
};

export default Home;
