import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useSubjects() {
  const [subjects, setSubjects] = useState<any[]>([]);

  useEffect(() => {
    async function loadSubjects() {
      const response = await api.get("/subjects");
      setSubjects(response.data);
    }

    loadSubjects();
  }, []);

  return { subjects, setSubjects };
}
