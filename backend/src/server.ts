import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Rotas
app.get("/subjects", async (req, res) => {
  const subjects = await prisma.subject.findMany({ include: { sessions: true } });
  res.json(subjects);
});

app.post("/subjects", async (req, res) => {
  const { name } = req.body;
  const subject = await prisma.subject.create({ data: { name } });
  res.json(subject);
});

app.get("/sessions", async (req, res) => {
  const sessions = await prisma.studySession.findMany({ include: { subject: true } });
  res.json(sessions);
});

app.post("/sessions", async (req, res) => {
  const { duration, subjectId, notes } = req.body;
  const session = await prisma.studySession.create({
    data: { duration, subjectId, notes },
  });
  res.json(session);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
