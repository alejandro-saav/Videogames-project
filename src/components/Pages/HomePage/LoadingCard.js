import classes from "./LoadingCard.module.css";

const LoadingCard = () => {
  return (
    // <div className={classes.container}>
    <div className={classes.loadwrapp}>
      <div className={classes.load5}>
        <div className={classes.ring2}>
          <div className={classes.ballholder}>
            <div className={classes.ball}></div>
          </div>
        </div>
        <p className={classes.text}>Loading</p>
      </div>
    </div>
    // </div>
  );
};

export default LoadingCard;
