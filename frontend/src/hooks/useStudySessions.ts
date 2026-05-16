import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useStudySessions() {
  const [sessions, setSessions] = useState<any[]>([]);

  useEffect(() => {
    async function loadSessions() {
      const response = await api.get("/sessions");
      setSessions(response.data);
    }

    loadSessions();
  }, []);

  return { sessions, setSessions };
}
