/** @module HomePage */

/** Imports */
import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";

/**
 * Represents the HomePage component of the application.
 * @function
 * @returns {JSX.Element} JSX representing the homepage.
 */
export default function HomePage() {
  // Call the getFeaturedEvents function to retrieve featured events data
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      {/* Render the EventList component and pass the featured events data as items */}
      <EventList items={featuredEvents} />
    </div>
  );
}
