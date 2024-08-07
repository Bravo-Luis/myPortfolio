import { Button, Typography } from "@mui/material";

function NavigationButton({ title, index, selected, setSelected }) {
  return (
    <Button
      key={index}
      variant="text"
      onClick={() => {
        setSelected(title);
      }}
      className={`button-hover animated-button off-screen`}
      style={{
        animationDelay: `${0.25 + index * 0.1}s`,
      }}
      sx={{
        backgroundColor: selected === title ? "gray" : "background.default",
        boxShadow: 5,
        p: 2,
        mt: 2.5,
        mr: 2,
        border: "gray 3px solid",
        "&:hover": {
          backgroundColor: "primary.dark",
        },
      }}
    >
      <Typography
        className="typography-hover"
        sx={{
          color: selected === title ? "white" : "gray",
          fontWeight: "bold",
        }}
      >
        {title.toUpperCase()}
      </Typography>
      <style>
        {`
@keyframes bounceDown {
  0% {
    opacity: 0;
    transform: translateY(-50px); /* Start slightly above the view area */
    transition-timing-function: ease-out;
  }
  10% {
    opacity: 0.2;
    transform: translateY(-30px); /* Initial fall towards the middle */
    transition-timing-function: ease-in-out;
  }
  20% {
    opacity: 0.4;
    transform: translateY(-10px); /* Continue falling */
    transition-timing-function: ease-in-out;
  }
  40% {
    opacity: 0.6;
    transform: translateY(15px); /* First overshoot */
    transition-timing-function: ease-out;
  }
  55% {
    opacity: 0.75;
    transform: translateY(-5px); /* Bounce back up slightly */
    transition-timing-function: ease-in;
  }
  70% {
    opacity: 0.85;
    transform: translateY(10px); /* Settle down after bounce */
    transition-timing-function: ease-out;
  }
  85% {
    opacity: 0.95;
    transform: translateY(0px); /* Almost at final position */
    transition-timing-function: ease-in-out;
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Final position */
    transition-timing-function: ease-out;
  }
}


          .animated-button {
            animation: bounceDown 0.5s ease-out;
            animation-fill-mode: forwards; /* Ensure the final state persists after the animation */
          }
          .button-hover:hover .typography-hover {
            color: #fff !important;
          }
          .reset-animation {
            animation: none !important;
          }
          .off-screen {
            transform: translateY(-100vh); /* Position off-screen */
            opacity: 0; /* Ensure the button is not visible */
          }
        `}
      </style>
    </Button>
  );
}

export default NavigationButton;
