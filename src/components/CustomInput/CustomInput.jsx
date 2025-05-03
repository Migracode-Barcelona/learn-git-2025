import { useState } from "react";
import styles from "./CustomInput.module.css";

export const CustomInput = () => {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Say something.."
      className={styles.input}
    />
  );
};
