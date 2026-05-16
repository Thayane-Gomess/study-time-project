export function StudySessionList({ sessions }: { sessions: any[] }) {
  return (
    <div>
      <h2>Sessões registradas</h2>

      {sessions.length === 0 && <p>Nenhuma sessão registrada ainda.</p>}

      <ul style={{ marginTop: 12 }}>
        {sessions.map((session) => (
          <li key={session.id} style={{ marginBottom: 10 }}>
            <strong>{session.subject?.name}</strong> — {session.duration} min
            <br />
            {session.notes && <em>{session.notes}</em>}
          </li>
        ))}
      </ul>
    </div>
  );
}
