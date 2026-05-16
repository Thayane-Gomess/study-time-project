import { SubjectForm } from "../components/SubjectForm";
import { SubjectList } from "../components/SubjectList";
import { StudySessionForm } from "../components/StudySessionForm";
import { StudySummary } from "../components/StudySummary";

export function Home() {
  return (
    <div style={{ padding: 24 }}>
      <header>
        <h1>Study Time Tracker</h1>
        <p>Acompanhe seu tempo de estudo sem frescura.</p>
      </header>

      <main style={{ display: "flex", gap: 32, marginTop: 24 }}>
        <section style={{ flex: 1 }}>
          <SubjectForm />
          <SubjectList />
        </section>

        <section style={{ flex: 1 }}>
          <StudySessionForm />
          <StudySummary />
        </section>
      </main>
    </div>
  );
}
