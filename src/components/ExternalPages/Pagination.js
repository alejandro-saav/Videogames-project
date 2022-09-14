import classes from "./Pagination.module.css";
import { useEffect, useState } from "react";
const Pagination = (props) => {
  const pageNumbers = [];
  const [pageIncremental, setPageIncremental] = useState(1);
  useEffect(() => {
    if (props.current <= 10) {
      setPageIncremental(1);
      return;
    }
    if (props.current <= 19) {
      setPageIncremental(10);
      return;
    }
    if (props.current <= 29) {
      setPageIncremental(20);
      return;
    }
  }, [props.current]);
  for (let i = pageIncremental; i <= pageIncremental + 9; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={classes.maincontainer}>
      <ul>
        <li
          onClick={() => {
            if (pageIncremental === 1) return;
            setPageIncremental((prev) => prev - 10);
            // props.paginate((prev) => pageIncremental - 10);
          }}
        >
          <a>Prev</a>
        </li>
        {pageNumbers.map((item) => {
          if (item >= props.maxPages) return;
          return (
            <li
              onClick={() => {
                window.scrollTo(0, 0);
                props.paginate(item);
              }}
              className={props.current === item ? classes.active : ""}
            >
              <a>{item}</a>
            </li>
          );
        })}
        <li
          onClick={() => {
            if (pageIncremental === 21) return;
            setPageIncremental((prev) => prev + 10);
            // props.paginate((prev) => pageIncremental + 10);
          }}
        >
          <a>Next</a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
