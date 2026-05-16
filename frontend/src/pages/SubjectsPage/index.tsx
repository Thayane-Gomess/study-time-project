import { MainLayout } from "../../layout/MainLayout";
import { SubjectForm } from "../../components/SubjectForm";
import { SubjectList } from "../../components/SubjectList";
import { useSubjects } from "../../hooks/useSubjects";

export function SubjectsPage() {
  const { subjects } = useSubjects();

  return (
    <MainLayout>
      <h2>Matérias</h2>
      <p>Cadastre e visualize suas matérias.</p>

      <div style={{ marginTop: 24 }}>
        <SubjectForm />
        <SubjectList subjects={subjects} />
      </div>
    </MainLayout>
  );
}
