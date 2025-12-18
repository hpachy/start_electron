# 🚀 Nextron Poké-Todo : Apprentissage Desktop Next.js + Electron

Ce projet est un exercice pratique pour maîtriser la création d'applications desktop modernes. Nous utilisons **Next.js** pour l'interface utilisateur et **Electron** comme moteur d'exécution natif.

---

## 🏗️ Architecture
- **Frontend (Renderer) :** Next.js (React) avec Tailwind CSS.
- **Backend Local (Main) :** Node.js via Electron pour la logique système.
- **Communication :** IPC (Inter-Process Communication) via un script de `preload`.

---

## 🎯 Objectifs de l'exercice

### 1. Authentification Basique
- Créer une page de login dans Next.js.
- Envoyer les identifiants au processus Main via IPC.
- Simuler une validation "admin/admin" côté Node.js.

### 2. Liste Pokémon (Appel API)
- Utiliser la `PokeAPI` pour récupérer les 151 premiers Pokémon.
- Afficher les données sous forme de cartes élégantes avec les composants React.

### 3. To-Do List Persistante
- Ajouter/Supprimer des tâches.
- **Défi Pro :** Sauvegarder la liste dans un fichier `.json` local sur l'ordinateur (via Node.js) pour qu'elle ne disparaisse pas au redémarrage.

---

## 📂 Structure du Projet (Cible)
```text
├── main/               # Logique Electron (Node.js)
│   └── main.js
├── renderer/           # Application Next.js (React)
│   ├── pages/
│   └── components/
├── preload.js          # Le pont sécurisé (Bridge)
└── package.json
```
---

## 🛠️ Commandes utiles
npm run dev : Lance Next.js et Electron en mode développement.

npm run build : Exporte Next.js en statique et build l'exécutable (.exe ou .app).
