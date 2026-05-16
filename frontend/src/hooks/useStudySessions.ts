import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { StudySession } from "../types/StudySession";

export function useStudySessions() {
  const [sessions, setSessions] = useState<StudySession[]>([]);

  useEffect(() => {
    api
      .get<StudySession[]>("/studySessions")
      .then((res) => setSessions(res.data))
      .catch((err) => console.log("Erro ao buscar sessões", err));
  }, []);

  const totalMinutes = sessions.reduce((acc, s) => acc + (s.duration || 0), 0);

  return { sessions, setSessions, totalMinutes };
}
