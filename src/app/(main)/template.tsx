"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./template.module.scss";

export default function MainTemplate({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.Wrapper}
    >
      {children}
    </motion.div>
  );
}
