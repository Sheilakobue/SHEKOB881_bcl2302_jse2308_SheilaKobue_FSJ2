import Link from "next/link"; // Import the Link component from the 'next/link' module.

import classes from "./main-header.module.css"; // Import styles from a CSS module.

/**
 * Functional component representing the main header of a web page.
 * This header typically contains a logo and navigation links.
 *
 * @returns {JSX.Element} JSX element representing the main header.
 */
function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        {/* Create a navigation link to the homepage */}
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            {/* Create a navigation link to the 'events' page */}
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader; // Export the MainHeader component as the default export.
