interface StudySummaryProps {
  sessions: any[];
}

export default function StudySummary({ sessions }: StudySummaryProps) {
  const totalMinutes = sessions.reduce(
    (acc, session) => acc + (session.minutes || 0),
    0
  );

  return (
    <div>
      <h2>Resumo</h2>
      <p>Total de minutos estudados: {totalMinutes}</p>
    </div>
  );
}
