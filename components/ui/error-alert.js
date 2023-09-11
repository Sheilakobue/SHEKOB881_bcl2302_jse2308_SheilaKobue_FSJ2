/**
 * Import the CSS module for styling the ErrorAlert component.
 * @module './error-alert.module.css'
 */
import classes from "./error-alert.module.css";

/**
 * Represents an ErrorAlert component that displays an error message.
 * @function ErrorAlert
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The child elements to be displayed inside the ErrorAlert.
 * @returns {ReactElement} A React component that displays an error message.
 */
export default function ErrorAlert(props) {
  /**
   * Render an error alert div with the specified CSS class.
   * @returns {ReactElement} A div element styled as an error alert.
   */
  return <div className={classes.alert}>{props.children}</div>;
}


