import { motion } from "framer-motion"

const SlideInOut = ({
  children,
  key,
  zIndex,
}: {
  children: React.ReactNode
  key: string
  zIndex?: number
}) => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  }
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      style={{ zIndex: zIndex }}
      transition={{ type: "linear", duration: 0.75 }}
    >
      <div key={key}>{children}</div>
    </motion.div>
  )
}

export default SlideInOut