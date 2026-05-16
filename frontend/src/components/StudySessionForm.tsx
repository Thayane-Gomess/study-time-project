import { FormEvent, useState } from "react";
import { api } from "../services/api";
import { useSubjects } from "../hooks/useSubjects";
import { useStudySessions } from "../hooks/useStudySessions";

export function StudySessionForm() {
  const { subjects } = useSubjects();
  const { sessions, setSessions } = useStudySessions();
  const [subjectId, setSubjectId] = useState<number | "">("");
  const [duration, setDuration] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!subjectId || !duration) return;

    const newSession = {
      subjectId: Number(subjectId),
      duration: Number(duration),
      date: new Date().toISOString(),
    };

    try {
      const response = await api.post("/studySessions", newSession);
      setSessions([...sessions, response.data]);
      setDuration("");
      setSubjectId("");
    } catch (error) {
      console.error("Erro ao salvar sessão", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar estudo</h2>

      <select
        value={subjectId}
        onChange={(e) => setSubjectId(Number(e.target.value))}
      >
        <option value="">Selecione uma matéria</option>
        {subjects.map((subject) => (
          <option key={subject.id} value={subject.id}>
            {subject.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duração em minutos"
      />

      <button type="submit">Salvar sessão</button>
    </form>
  );
}
