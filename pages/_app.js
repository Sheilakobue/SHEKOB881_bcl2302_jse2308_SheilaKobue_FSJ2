/**Imports */
import Layout from "@/components/layout/layout";
import "@/styles/globals.css";

/**
 * The main App component.
 *
 * @param {Object} props - The component's props.
 * @param {Component} props.Component - The component to be rendered as the main content.
 * @param {Object} props.pageProps - The page-specific props.
 * @returns {JSX.Element} - Returns a JSX element representing the App component.
 */
export default function App({ Component, pageProps }) {
  return (
    /**
     * Render the Layout component as the outermost container.
     * The Layout component typically defines the overall structure and styling of the page.
     * It wraps the main content component specified by the "Component" prop.
     * The "pageProps" prop is spread into the "Component" to pass page-specific data.
     */
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
