export interface Event {
  id: number;
  title: string;
  location: string;
  price: number;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Campus Tech Conference",
    location: "Main Campus Hall",
    price: 15,
  },
  {
    id: 2,
    title: "Sports Day",
    location: "University Sports Centre",
    price: 5,
  },
];
