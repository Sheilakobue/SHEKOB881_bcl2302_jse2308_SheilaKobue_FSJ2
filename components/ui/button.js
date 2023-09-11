/**
 * Button Component
 *
 * This component renders a button or a link based on the provided props.
 *
 * @param {object} props - The properties for the Button component.
 * @param {string} [props.link] - The URL to link to (optional).
 * @param {function} [props.onClick] - The click handler function (optional).
 * @param {ReactNode} props.children - The content to be displayed inside the button.
 * @returns {ReactNode} - The rendered button or link element.
 */
import Link from "next/link";

import classes from "./button.module.css";

export default function Button(props) {
  // If a link is provided, render a Link component.
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }

  // If no link is provided, render a button element with an optional onClick handler.
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}


