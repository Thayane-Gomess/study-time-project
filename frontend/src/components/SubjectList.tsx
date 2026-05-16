import { useSubjects } from "../hooks/useSubjects";

export function SubjectList() {
  const { subjects, loading } = useSubjects();

  if (loading) return <p>Carregando matérias...</p>;

  if (!subjects.length) {
    return <p>Nenhuma matéria cadastrada ainda.</p>;
  }

  return (
    <div>
      <h2>Matérias</h2>
      <ul>
        {subjects.map((subject) => (
          <li key={subject.id}>{subject.name}</li>
        ))}
      </ul>
    </div>
  );
}
