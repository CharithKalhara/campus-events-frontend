import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventCard from "./components/EventCard";
import { events } from "./types/Event";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <h2>Welcome to CampusEvents</h2>
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            location={event.location}
            price={event.price}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
