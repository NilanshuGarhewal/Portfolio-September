import { motion, Variants } from "framer-motion";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  const anim = (variants: Variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity: Variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  // const slide: Variants = {
  //   initial: { top: "100%" },
  //   animate: {
  //     top: "0%",
  //     transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  //   },
  //   exit: {
  //     top: "-100%",
  //     transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  //   },
  // };

  // const slide2: Variants = {
  //   initial: {
  //     top: "100vh",
  //   },
  //   enter: {
  //     top: "100vh",
  //   },
  //   exit: {
  //     top: "0",
  //     transition: {
  //       duration: 1.5,
  //       delay: 0.2,
  //       ease: [0.76, 0, 0.24, 1],
  //     },
  //   },
  // };

  // const prespective: Variants = {
  //   initial: {
  //     y: 0,
  //     scale: 1,
  //     opacity: 1,
  //   },
  //   enter: {
  //     y: 0,
  //     scale: 1,
  //     opacity: 1,
  //   },
  //   exit: {
  //     y: -100,
  //     scale: 0.9,
  //     opacity: 0.5,

  //     transition: {
  //       duration: 1.2,
  //       ease: [0.76, 0, 0.24, 1],
  //     },
  //   },
  // };

  return (
    <div className="inner">
      {/* <motion.div {...anim(slide)} className="slide"></motion.div>
      <motion.div {...anim(slide2)} className="slide2"></motion.div> */}
      {/* <motion.div {...anim(prespective)} className="page"> */}
      <motion.div {...anim(opacity)}>
        {children}
      </motion.div>
      {/* </motion.div> */}
    </div>
  );
}
