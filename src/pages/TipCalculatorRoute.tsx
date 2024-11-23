import {
  Box,
  Button,
  Card,
  CardContent,
  FilledInput,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  styled,
  SwipeableDrawer,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { useMemo, useState } from "react";

const tipValues = [12, 15, 18, 20, 22];
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

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.grey[300],
  borderRadius: 3,
  position: "absolute",
  marginBottom: 10,
  top: 8,
  left: "calc(50% - 15px)",
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.grey[900],
  }),
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.grey[800],
  }),
}));

const steps = [
  {
    label: "Enter Bill Total",
    name: "total",
    description:
      "Enter the total amount of the bill. By default, the tip will be calculated based on the total amount, but optionally you can enter the subtotal.",
  },
  {
    label: "Select Tip Percentage",
    name: "percentage",
    description: "Select the tip percentage you would like to calculate.",
  },
  {
    label: "Split Between (Optional)",
    name: "split",
    description:
      "Enter the number of people you would like to split the bill between. Default is 1.",
  },
];

const TipCalculatorRoute = () => {
  const [percentage, setPercentage] = useState(0);
  const [subTotal, setSubTotal] = useState("");
  const [splitBetween, setSplitBetween] = useState("");
  const [drawerOpen, setDrawerIsOpen] = useState(false);
  const [total, setTotal] = useState("");
  const [activeStep, setActiveStep] = useState(0);

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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const toggleDrawer = () => {
    setDrawerIsOpen(!drawerOpen);
  };

  return (
    <>
      <SwipeableDrawer
        anchor={"bottom"}
        open={drawerOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        swipeAreaWidth={56}
        disableSwipeToOpen={false}
      >
        <StyledBox
          sx={{
            position: "absolute",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
        </StyledBox>
        <Stack spacing={2} margin={2} marginTop={4}>
          {tipValues.map((value) => (
            <Button
              key={value}
              variant={"outlined"}
              onClick={() => {
                setPercentage(value);
                toggleDrawer();
                handleNext();
              }}
            >
              {value}%
            </Button>
          ))}
        </Stack>
      </SwipeableDrawer>
      <Grid container spacing={2} justifyContent="center" margin={2}>
        <Grid size={{ xs: 12, sm: 6 }} marginTop={3}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === steps.length - 1 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Stack spacing={2}>
                    <Typography>{step.description}</Typography>
                    {step.name === "total" && (
                      <OutlinedInput
                        type="number"
                        placeholder="Total"
                        value={total}
                        inputMode="decimal"
                        onChange={(e) => setTotal(e.target.value)}
                      />
                    )}
                    {step.name === "split" && (
                      <OutlinedInput
                        type="number"
                        placeholder="Split Between"
                        value={splitBetween}
                        inputMode="numeric"
                        onChange={(e) => setSplitBetween(e.target.value)}
                      />
                    )}
                    <Box sx={{ mb: 2 }}>
                      <Button
                        variant="contained"
                        onClick={
                          step.name === "percentage" ? toggleDrawer : handleNext
                        }
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </Box>
                  </Stack>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}

          <Card>
            <CardContent>
              <Stack spacing={2} alignContent="left">

                  <Typography variant="h4">$250.00</Typography>
                  <Typography variant="body1">
                    {calculateTip.tipAmountRoundDown}
                  </Typography>
              </Stack>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default TipCalculatorRoute;
