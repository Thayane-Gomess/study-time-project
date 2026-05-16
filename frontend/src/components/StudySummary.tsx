import { useStudySessions } from "../hooks/useStudySessions";

export function StudySummary() {
  const { totalMinutes, sessions } = useStudySessions();

  return (
    <div>
      <h2>Resumo</h2>
      <p>Total estudado: {totalMinutes} minutos</p>

      <h3>Últimas sessões</h3>
      <ul>
        {sessions.slice(-5).map((session) => (
          <li key={session.id}>
            {session.duration} min -{" "}
            {new Date(session.date).toLocaleString("pt-BR")}
          </li>
        ))}
      </ul>
    </div>
  );
}
