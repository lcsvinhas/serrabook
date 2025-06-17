import React from "react";
import * as styles from "./Error.module.css";

export default function PageNotFound() {
  return (
    <div>
      <div class={styles.noise}></div>
      <div class={styles.overlay}></div>
      <div class={styles.terminal}>
        <h1>
          Error <span class={styles.errorcode}>404</span>
        </h1>
        <p class={styles.output}>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <p class={styles.output}>
          Please try to <a href="#1">go back</a> or{" "}
          <a href="#2">return to the homepage</a>.
        </p>
        <p class={styles.output}>Good luck.</p>
      </div>
    </div>
  );
}
