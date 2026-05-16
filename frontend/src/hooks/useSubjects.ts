import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Subject } from "../types/Subject2";

export function useSubjects() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get<Subject[]>("/subjects")
      .then((res) => setSubjects(res.data))
      .catch((err) => console.error("Erro ao buscar matérias", err))
      .finally(() => setLoading(false));
  }, []);

  return { subjects, setSubjects, loading };
}
