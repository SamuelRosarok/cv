import React from 'react';
import { useState } from 'react';
import './App.css';



// Composant pour une ligne d'expérience ou de formation
function CvItem({ title, subtitle, date, description }) {
  return (
    <div className="cv-item">
      <div className="cv-item-header">
        <h3>{title}</h3>
        <span className="cv-date">{date}</span>
      </div>
      <h4>{subtitle}</h4>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="cv-layout">
      {/* Barre latérale (Sidebar) */}
      <aside className="cv-sidebar">
        <div className="profile-section">
          <div className="profile-avatar">👤</div>
          <h2>Votre Nom</h2>
          <p className="profile-title">Développeur Front-End / Réact</p>
        </div>
        
        <div className="info-section">
          <h3>Contact</h3>
          <p>📧 samuelrivpro@gmail.com</p>
          <p>📱 06 15 14 59 87</p>
          <p>📍 Liévin, France</p>
          <p>🔗 https://github.com/SamuelRosarok</p>
        </div>

        <div className="info-section">
          <h3>Compétences</h3>
          <ul className="skills-list">
          
            <select className="menu-deroulant">
                <option value="">-- React / JSX --</option>
                <option value="france">Projet 1</option>
                <option value="belgique">Projet 2</option>
                <option value="allemagne">Projet 3</option>
            </select>
         
                <select className="menu-deroulant">
                    <option value="">-- JavaScript (ES6) --</option>
                    <option value="france">Projet 1</option>
                    <option value="belgique">Projet 2</option>
                   <option value="allemagne">Projet 3</option>
                </select>
          
            <select className="menu-deroulant">
                <option value="">-- HTML5 / CSS3 --</option>
                <option value="france">Projet 1</option>
                <option value="belgique">Projet 2</option>
                <option value="allemagne">Projet 3</option>
            </select>
              <select className="menu-deroulant"
  onChange={(event) => {
    if (event.target.value) {
      window.location.href = event.target.value;
    }
  }}
>
  <option value="">-- Python --</option>
  <option value="https://github.com/SamuelRosarok/Commande-restaurant">Menu de Restaurant</option>
  <option value="https://www.youtube.com">YouTube</option>
  <option value="https://www.wikipedia.org">Wikipedia</option>
</select>


            <li>Git / GitHub</li>
            
          </ul>
        </div>
      </aside>

      {/* Contenu principal */}
      <main className="cv-main">
        <section className="cv-section">
          <h2>À propos de moi</h2>
          <hr />
          <p>
            Passionné par le développement web moderne, je me spécialise dans la création d'applications interactives avec React. Rigoureux et curieux, j'aime donner vie à des maquettes et optimiser l'expérience utilisateur.
          </p>
        </section>

        <section className="cv-section">
          <h2>Expériences Professionnelles</h2>
          <hr />
          <CvItem 
            title="Développeur Web React" 
            subtitle="Entreprise Alpha" 
            date="2025 - Présent" 
            description="Création de composants réutilisables, intégration de designs responsifs et connexion aux API REST. Optimisation des performances des applications."
          />
          <CvItem 
            title="Développeur Front-End Junior" 
            subtitle="Studio Digital" 
            date="2023 - 2025" 
            description="Intégration de maquettes HTML/CSS complexes. Maintenance de sites web et collaboration avec l'équipe de design."
          />
        </section>

        <section className="cv-section">
          <h2>Formations</h2>
          <hr />
          <CvItem 
            title="Titre Professionnel Développeur Web" 
            subtitle="École du Code" 
            date="2023" 
            description="Formation intensive axée sur JavaScript, les architectures d'applications web et les bonnes pratiques de développement."
          />
        </section>
      </main>
    </div>
  );
}

export default App;
