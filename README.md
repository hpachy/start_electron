# 🚀 Nestron Poke-Todo : Apprentissage de la Stack Desktop Pro

Ce projet est un exercice pédagogique visant à maîtriser l'intégration de **NestJS** (Logique métier) au sein d'une application **Electron** (Interface Desktop).

L'objectif est de s'éloigner du "spaghetti code" pour adopter une architecture **modulaire**, **testable** et **scalable**, identique à ce que l'on retrouve en entreprise.

---

## 🏗️ Architecture du Projet

Le projet utilise le pattern **"Standalone NestJS App"** à l'intérieur du processus principal d'Electron.

- **Processus Main (NestJS) :** Agit comme un "backend local". Il gère l'authentification, les appels API (PokeAPI) et la logique des données.
- **Processus Renderer (UI) :** L'interface utilisateur (HTML/JS ou Framework au choix).
- **IPC Bridge (Preload) :** La passerelle sécurisée qui permet à l'UI d'appeler des méthodes du service NestJS via `ipcRenderer.invoke`.

---

## 🎯 Fonctionnalités à réaliser

### 1. Authentification Basique (AuthModule)

- **Concept :** Services et Guards.
- **Exercice :** Créer un système de login simple (admin/admin). Si l'utilisateur est authentifié, le service NestJS renvoie un token ou un état `true`.

### 2. Liste Pokémon (PokemonModule)

- **Concept :** `HttpModule`, `Axios`, et gestion de l'asynchronisme.
- **Exercice :** Consommer l'API externe `https://pokeapi.co/api/v2/pokemon` et renvoyer la liste formatée au processus de rendu.

### 3. To-Do List (TodoModule)

- **Concept :** CRUD (Create, Read, Update, Delete) et persistance en mémoire.
- **Exercice :** Ajouter, supprimer et lister des tâches.

---

## 📂 Structure des fichiers cible

```text
.
├── src/
│   ├── main/                 # Coeur NestJS (Processus Main)
│   │   ├── app.module.ts
│   │   ├── main.ts           # Boot d'Electron + NestJS
│   │   └── modules/          # Auth, Pokemon, Todo
│   ├── renderer/             # Frontend (HTML/CSS/JS)
│   │   ├── index.html
│   │   └── renderer.js
│   └── preload.ts            # Bridge de communication IPC
├── package.json
└── tsconfig.json
```
