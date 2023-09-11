/**
 * This module represents the homepage of the application.
 * @module HomePage
 */

import { getFeaturedEvents } from "../dummy-data"; // Import the function to fetch featured events data.
import EventList from "../components/events/event-list"; // Import the EventList component.

/**
 * Represents the homepage of the application.
 * @function
 * @returns {JSX.Element} JSX representing the homepage content.
 */
export default function HomePage() {
  // Fetch the featured events data using the getFeaturedEvents function.
  const featuredEvents = getFeaturedEvents();

  // Return JSX representing the homepage content.
  return (
    <div>
      {/* Render the EventList component and pass the featured events data as items prop. */}
      <EventList items={featuredEvents} />
    </div>
  );
}


