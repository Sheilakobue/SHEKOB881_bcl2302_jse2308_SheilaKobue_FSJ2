/**
 * Import the Layout component and global styles.
 * @module MyApp
 */

import Layout from "../components/layout/layout"; // Import the Layout component
import "../styles/globals.css"; // Import global styles

/**
 * The main application component.
 * @function MyApp
 * @param {Object} props - The component's props.
 * @param {React.Component} props.Component - The current page component to render.
 * @param {Object} props.pageProps - Props specific to the current page component.
 * @returns {JSX.Element} JSX element representing the entire application.
 */
export default function MyApp({ Component, pageProps }) {
  /**
   * Render the application layout with the current page component and its props.
   * @returns {JSX.Element} JSX element representing the rendered application.
   */
  return (
    <Layout>
      {/* Render the current page component with its props */}
      <Component {...pageProps} />
    </Layout>
  );
}

