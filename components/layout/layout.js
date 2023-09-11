/**
 * Represents the Layout component of the application.
 * This component defines the overall layout structure with a header and main content area.
 *
 * @param {object} props - The properties passed to the Layout component.
 * @param {ReactNode} props.children - The child elements/content to be rendered within the main content area.
 * @returns {JSX.Element} - A JSX element representing the layout structure.
 */
import { Fragment } from "react";
import MainHeader from "./main-header";

export default function Layout(props) {
  return (
    <Fragment>
      {/* Render the MainHeader component as the header of the layout */}
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}


