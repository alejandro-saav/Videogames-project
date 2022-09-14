import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import classes from "./SliderContainer.module.css";

const SliderContainer = (props) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    //   console.log(carousel.current);
    //   console.log(carousel.current.scrollWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    //   // setWidth(carousel.current.offsetWidth);
  }, []);
  return (
    <motion.div className={classes.carousel} ref={carousel}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -2430 }}
        className={classes.innercarousel}
      >
        {props.children}
      </motion.div>
    </motion.div>
  );
};

export default SliderContainer;
