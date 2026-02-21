import { Avatar, Chip, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import avatarImage from "../assets/avatar-david.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledDiv = styled("div")(() => ({
  display: "grid",
  overflowX: "hidden",
  overflowY: "hidden",
  color: "black",
  width: "100vw",
  height: "90vh",
  margin: 0,
  padding: 0,
}));

const Home = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showResume, setShowResume] = useState(false);

  const handleAvatarClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= 7) {
      setShowResume(true);
    }
  };

  const getAvatarSx = () => {
    if (clickCount >= 4 && clickCount < 7) {
      return {
        width: 56,
        height: 56,
        cursor: "pointer",
        border: "3px solid #00ff00",
        boxShadow: "0 0 15px #00ff00, 0 0 25px #00ff00",
        transition: "all 0.3s ease",
        animation: "pulse 1s infinite",
      };
    }
    return { width: 56, height: 56, cursor: "pointer" };
  };

  const getHintMessage = () => {
    switch (clickCount) {
      case 3:
        return "🤔 Hmm, something feels different...";
      case 4:
        return "✨ Ooh, sparkly! Keep going!";
      case 5:
        return "🔥 You're getting warmer...";
      case 6:
        return "🎯 Almost there! One more click!";
      default:
        return null;
    }
  };

  return (
    <StyledDiv>
      {/* Keyframe animation for pulse effect */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 15px #00ff00, 0 0 25px #00ff00;
          }
          50% {
            box-shadow: 0 0 25px #00ff00, 0 0 35px #00ff00, 0 0 45px #00ff00;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
      >
        <Grid>
          <Avatar
            alt="David Reyes"
            src={avatarImage}
            sx={getAvatarSx()}
            onClick={handleAvatarClick}
          />
        </Grid>
        <Grid>
          <Stack sx={{ mb: 1, mt: 3 }}>
            <Typography variant="h5">Hi there! My name is David</Typography>
            <Typography variant="subtitle1" lineHeight="1">
              Software Engineer
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Chip
              label="Linkedin"
              color="primary"
              component="a"
              href="https://www.linkedin.com/in/david-joshua-reyes-7aa50ab3/"
              clickable
            />
            <Chip
              label="Github"
              component="a"
              href="https://github.com/dajomareyes"
              clickable
            />
            {showResume && (
              <Chip
                label="Resume"
                color="secondary"
                component={Link}
                to="/resume"
                clickable
                sx={{
                  animation: "fadeIn 0.5s ease-in",
                }}
              />
            )}
          </Stack>
        </Grid>
      </Grid>

      {/* Hint Message */}
      {getHintMessage() && (
        <Typography
          variant="body2"
          sx={{
            position: "fixed",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(0, 255, 0, 0.1)",
            border: "2px solid #00ff00",
            borderRadius: "20px",
            padding: "0.75rem 1.5rem",
            boxShadow: "0 0 20px rgba(0, 255, 0, 0.3)",
            animation: "fadeIn 0.3s ease-in",
            fontWeight: 500,
            color: "#00cc00",
          }}
        >
          {getHintMessage()}
        </Typography>
      )}
    </StyledDiv>
  );
};

export default Home;
