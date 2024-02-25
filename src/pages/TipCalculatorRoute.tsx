import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/system/Unstable_Grid";
import { useMemo, useState } from "react";

const percentages = [10, 12, 15, 18, 20, 22, 25];

const TipCalculatorRoute = () => {
  const [percentage, setPercentage] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [total, setTotal] = useState("");

  const calculateTip = useMemo(() => {
    const tip = +subTotal * (+percentage / 100);
    return {
      rawtotalAmount: +total + +tip,
      rawTipAmount: tip,
      tipAmountRoundDown: Math.floor(tip),
      totalRoundedDown: +total + +Math.floor(tip),
      tipAmountRoundUp: Math.ceil(tip),
      totalRoundedUp: +total + +Math.ceil(tip),
    };
  }, [subTotal, total, percentage]);

  return (
    <Grid
      mt={12}
      container
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      direction="column"
    >
      <Grid xs={12} sm={4}>
        <Typography variant={"h3"}>Tip Calculator</Typography>
      </Grid>
      <Grid xs={12} sm={4}>
        <TextField
          fullWidth
          label="Bill Sub-Total (USD)"
          value={subTotal}
          onChange={(e) => setSubTotal(e.target.value)}
          InputProps={{
            type: "number",
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Grid>
      <Grid xs={12} sm={4}>
        <TextField
          fullWidth
          label="Bill Total (USD)"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          InputProps={{
            type: "number",
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Grid>
      <Grid xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel id="percetange-drop-down-label">
            Tip Percentage
          </InputLabel>
          <Select
            value={percentage}
            label="Tip Percentage"
            onChange={(event) => {
              setPercentage(event.target?.value);
            }}
          >
            {percentages.map((percent) => (
              <MenuItem value={percent}>{percent}%</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={12} sm={4}>
        <Typography variant={"body1"}>
          <Divider textAlign="right">
            <Chip label="RAW" />
          </Divider>
          Tip: ${calculateTip.rawTipAmount.toFixed(2)}
          <br />
          Total: ${calculateTip.rawtotalAmount.toFixed(2)}
          <br />
          <Divider textAlign="right">
            <Chip label="ROUNDED DOWN" />
          </Divider>
          Tip: ${calculateTip.tipAmountRoundDown.toFixed(2)}
          <br />
          Total: ${calculateTip.totalRoundedDown.toFixed(2)}
          <br />
          <Divider textAlign="right">
            <Chip label="ROUNDED UP" />
          </Divider>
          Tip: ${calculateTip.tipAmountRoundUp.toFixed(2)}
          <br />
          Total: ${calculateTip.totalRoundedUp.toFixed(2)}
          <br />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TipCalculatorRoute;
