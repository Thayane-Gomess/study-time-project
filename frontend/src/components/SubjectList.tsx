export function SubjectList({ subjects }: { subjects: any[] }) {
  return (
    <div>
      <h3>Matérias cadastradas</h3>

      {subjects.length === 0 && <p>Nenhuma matéria cadastrada ainda.</p>}

      <ul style={{ marginTop: 12 }}>
        {subjects.map((s) => (
          <li key={s.id} style={{ marginBottom: 6 }}>
            {s.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
