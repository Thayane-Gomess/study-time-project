import { FormEvent, useState } from "react";
import { api } from "../services/api";
import { useSubjects } from "../hooks/useSubjects";

export function SubjectForm() {
  const [name, setName] = useState("");
  const { subjects, setSubjects } = useSubjects();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name.trim()) return;

    try {
      const response = await api.post("/subjects", { name });
      setSubjects([...subjects, response.data]);
      setName("");
    } catch (err) {
      console.log("Erro ao adicionar matéria:", err);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h2>Nova matéria</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ex: Matemática"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
