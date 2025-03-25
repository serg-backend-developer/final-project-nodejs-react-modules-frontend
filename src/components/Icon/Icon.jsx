import cx from "classnames";

import styles from "./Icon.module.css";

const Icon = ({ iconId, width = "16", height = "16", stroke = "#000", customStyle = "" }) => {
  return (
    <>
      {iconId && (
        <svg
          className={cx(styles.icon, customStyle)}
          width={width}
          height={height}
          stroke={stroke}
          aria-hidden="true"
        >
          <use href={`#${iconId}`} />
        </svg>
      )}
    </>
  );
};

export default Icon;
