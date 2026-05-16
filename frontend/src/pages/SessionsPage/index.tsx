import { MainLayout } from "../../layout/MainLayout";
import { StudySessionForm } from "../../components/StudySessionForm";
import { StudySessionList } from "../../components/StudySessionList";
import { useStudySessions } from "../../hooks/useStudySessions";

export function SessionsPage() {
  const { sessions } = useStudySessions();

  return (
    <MainLayout>
      <h2>Sessões de Estudo</h2>
      <p>Registre e visualize suas sessões de estudo.</p>

      <div style={{ marginTop: 24 }}>
        <StudySessionForm />
        <StudySessionList sessions={sessions} />
      </div>
    </MainLayout>
  );
}
