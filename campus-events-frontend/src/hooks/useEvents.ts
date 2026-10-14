import { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";
import type { Event } from "../types/Event";

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadEvents() {
      try {
        setLoading(true);
        setError(null);

        const data = await getEvents(controller.signal);
        setEvents(data);
      } catch (err) {
        if (controller.signal.aborted) return;

        setError("Unable to load events.");
        console.error(err);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadEvents();

    return () => controller.abort();
  }, []);

  return { events, loading, error };
}
