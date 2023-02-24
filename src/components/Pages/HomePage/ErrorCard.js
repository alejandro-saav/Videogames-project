import classes from "./ErrorCard.module.css";

const ErrorCard = () => {
  return (
    <div className={classes.error_card}>
      <h2>ERROR</h2>
      <p>
        Sorry, there was an error processing your request. Please try again
        later.
      </p>
    </div>
  );
};

export default ErrorCard;
