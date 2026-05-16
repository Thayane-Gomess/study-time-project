import { FormEvent, useState } from "react";
import { api } from "../services/api";
import { useStudySessions } from "../hooks/useStudySessions";
import { useSubjects } from "../hooks/useSubjects";

export function StudySessionForm() {
  const [duration, setDuration] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [notes, setNotes] = useState("");

  const { sessions, setSessions } = useStudySessions();
  const { subjects } = useSubjects();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!duration || !subjectId) return;

    try {
      const response = await api.post("/sessions", {
        duration: Number(duration),
        subjectId,
        notes,
      });

      setSessions([...sessions, response.data]);

      setDuration("");
      setSubjectId("");
      setNotes("");
    } catch (err) {
      console.log("Erro ao registrar sessão:", err);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h2>Nova sessão de estudo</h2>

      <select
        value={subjectId}
        onChange={(e) => setSubjectId(e.target.value)}
      >
        <option value="">Selecione uma matéria</option>
        {subjects.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Duração (minutos)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <textarea
        placeholder="Anotações (opcional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button type="submit">Registrar</button>
    </form>
  );
}
