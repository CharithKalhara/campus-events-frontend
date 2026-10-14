import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventCard from "./components/EventCard";

interface Event {
 id: number;
 title: string;
 location: string;
 price: number;
}

const events: Event[] = [
 { id: 1, title: "Campus Tech Conference", location: "Main Campus Hall", price: 15 },
 { id: 2, title: "Sports Day", location: "University Sports Centre", price: 5 },
];

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
