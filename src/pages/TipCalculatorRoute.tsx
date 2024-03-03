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
const numberOfPeople = [2, 3, 4, 5, 6, 7, 8, 9, 10];

type SummaryProps = {
  tip: number;
  total: number;
  label: string;
  splitBetween: number;
};

const Summary = (props: SummaryProps) => {
  return (
    <>
      <Divider textAlign="right">
        <Chip label={props.label} />
      </Divider>
      Tip: ${props.tip.toFixed(2)}
      <br />
      Total: ${props.total.toFixed(2)}
      <br />
      {props.splitBetween > 1 ? (
        <>
          Total per person: ${(props.total / +props.splitBetween).toFixed(2)}
          <br />
        </>
      ) : null}
    </>
  );
};

const TipCalculatorRoute = () => {
  const [percentage, setPercentage] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [splitBetween, setSplitBetween] = useState(0);
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
      mt={"4vh"}
      container
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      direction="column"
    >
      <Grid xs={12} sm={6}>
        <Typography variant={"h3"}>Tip Calculator</Typography>
      </Grid>
      <Grid xs={12} sm={6}>
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
      <Grid xs={12} sm={6}>
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
      <Grid xs={12} sm={6}>
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
      <Grid xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="percetange-drop-down-label">
            Split Between (Optional)
          </InputLabel>
          <Select
            value={splitBetween}
            label="Split Between (Optional)"
            onChange={(event) => {
              setSplitBetween(+event.target.value);
            }}
          >
            <MenuItem value={1}>Do not split</MenuItem>
            {numberOfPeople.map((people) => (
              <MenuItem value={people}>{people}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={12} sm={6}>
        <Typography variant={"body1"}>
          <Summary
            tip={calculateTip.rawTipAmount}
            total={calculateTip.rawtotalAmount}
            splitBetween={splitBetween}
            label="RAW"
          />
          <Summary
            tip={calculateTip.tipAmountRoundDown}
            total={calculateTip.totalRoundedDown}
            splitBetween={splitBetween}
            label="ROUNDED DOWN"
          />
          <Summary
            tip={calculateTip.tipAmountRoundUp}
            total={calculateTip.totalRoundedUp}
            splitBetween={splitBetween}
            label="ROUNDED UP"
          />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TipCalculatorRoute;
