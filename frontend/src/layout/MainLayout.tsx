import type { ReactNode } from "react";
import "./MainLayout.css";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h1 className="logo">📚 Study Time</h1>

        <nav className="menu">
          <button className="menu-item">Home</button>
          <button className="menu-item">Matérias</button>
          <button className="menu-item">Sessões de estudo</button>
        </nav>
      </aside>

      <div className="content-area">
        <header className="header">
          <span>Bem-vinda, Thayane ✨</span>
        </header>

        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}

