import { Input, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";

const TipCalculatorRoute = () => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"} spacing={2}>
      <Grid>
        <Typography variant={"h3"}>Tip Calculator</Typography>
      </Grid>
      <Grid>
        <Input placeholder={"Bill amount"} />
      </Grid>
    </Grid>
  );
};

export default TipCalculatorRoute;
