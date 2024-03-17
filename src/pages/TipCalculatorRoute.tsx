import { Alert, CardContent, Paper, Stack, styled } from "@mui/material";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#eceff1",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Summary = (props: SummaryProps) => {
  return (
    <>
      <CardContent>
        <Stack spacing={1}>
          <Stack direction="row" spacing={1}>
            <Typography variant="h6">{props.label}:</Typography>
            <Typography variant="h6">${props.total.toFixed(2)}</Typography>
          </Stack>
          <Stack
            spacing={1}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Item>Tip: ${props.tip.toFixed(2)}</Item>
            {props.splitBetween > 1 ? (
              <Item>
                Amount Per Person: $
                {(props.total / +props.splitBetween).toFixed(2)}
              </Item>
            ) : null}
          </Stack>
        </Stack>
      </CardContent>
    </>
  );
};

const TipCalculatorRoute = () => {
  const [percentage, setPercentage] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [splitBetween, setSplitBetween] = useState(0);
  const [total, setTotal] = useState("");

  const calculateTip = useMemo(() => {
    const percent = +percentage / 100;
    const calculatedTip = isNaN(+subTotal)
      ? +total * percent
      : +subTotal * percent;
    const final = +total + calculatedTip;

    return {
      rawtotalAmount: final,
      rawTipAmount: calculatedTip,
      tipAmountRoundDown: Math.floor(final) - +total,
      totalRoundedDown: Math.floor(final),
      tipAmountRoundUp: Math.ceil(final) - +total,
      totalRoundedUp: Math.ceil(final),
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
            value={splitBetween > 1 ? splitBetween : undefined}
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
        <Alert severity="info">
          <Typography variant={"body1"}>
            This tip caclulator generates the tip amount as a percentage of the
            subtotal when present, otherwise it uses the total.
          </Typography>
        </Alert>
      </Grid>
      <Grid xs={12} sm={6}>
        <Typography variant={"body1"}>
          <Summary
            tip={calculateTip.rawTipAmount}
            total={calculateTip.rawtotalAmount}
            splitBetween={splitBetween}
            label="Total"
          />
          <Summary
            tip={calculateTip.tipAmountRoundDown}
            total={calculateTip.totalRoundedDown}
            splitBetween={splitBetween}
            label="Rounded Down"
          />
          <Summary
            tip={calculateTip.tipAmountRoundUp}
            total={calculateTip.totalRoundedUp}
            splitBetween={splitBetween}
            label="Rounded Up"
          />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TipCalculatorRoute;
