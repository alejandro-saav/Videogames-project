import classes from "./ErrorCard.module.css";

const ErrorCard = (props) => {
  const error = props.message ? props.message.startsWith("Cors") : false;
  console.log(props.message);
  return (
    <div className={classes.error_card}>
      <h2>ERROR</h2>
      {/* <a href="www.google.com">{props.message}</a> */}
      {error ? (
        <p>
          Dear user, we kindly ask you to follow this link{" "}
          <a
            href="https://cors-anywhere.herokuapp.com/corsdemo"
            target="_blank"
          >
            https://cors-anywhere.herokuapp.com/corsdemo
          </a>
          and click on the button "Request temporary access to the demo server"
          in order to show the necessary data. After that please reload the
          page. Thank you for your cooperation and understanding.
        </p>
      ) : (
        props.message
      )}
    </div>
  );
};

export default ErrorCard;
