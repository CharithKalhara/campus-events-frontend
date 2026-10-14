import type { Event } from "../types/Event";

const API_URL = "http://localhost:5229/api/events";

export async function getEvents(signal?: AbortSignal): Promise<Event[]> {
  const response = await fetch(API_URL, { signal });

  if (!response.ok) {
    throw new Error(`Failed to fetch events: ${response.status}`);
  }

  return (await response.json()) as Event[];
}
