# 🚀 My First Fullstack App : Auth, Todo & Poké-API

Ce projet est un exercice d'apprentissage visant à maîtriser les trois piliers du développement web moderne : la gestion d'identité (**Auth**), la manipulation de données locales (**CRUD**) et la consommation de données distantes (**API**).

## 🎯 Objectifs Pédagogiques

* **Authentification :** Comprendre le flux de connexion et la persistance d'une session (LocalStorage).
* **Gestion d'État (CRUD) :** Manipuler une liste d'éléments (Ajouter, Lire, Modifier, Supprimer).
* **Appels API :** Gérer les requêtes asynchrones avec `fetch` ou `axios`.
* **Routing :** Protéger des routes pour qu'elles ne soient accessibles qu'aux utilisateurs connectés.

---

## 🛠️ Fonctionnalités

### 1. Authentification (Basique)
- Formulaire de connexion.
- Stockage d'un faux token dans le `localStorage`.
- Bouton de déconnexion pour nettoyer la session.

### 2. Todo List (Maîtrise du State)
- Ajout de tâches via un input.
- Marquage d'une tâche comme "terminée".
- Suppression d'une tâche.
- *Bonus :* Filtrage par statut (Toutes / En cours / Terminées).

### 3. Poké-Explorer (Communication API)
- Appel à la [PokeAPI](https://pokeapi.co/).
- Affichage d'un indicateur de chargement pendant la requête.
- Rendu d'une liste de cartes Pokémon (Nom + Image).

---

## 🏗️ Architecture du Projet

```text
src/
├── components/        # Composants réutilisables (Button, Input, Card)
├── views/             # Pages (Login, Dashboard, Pokedex)
├── services/          # Appels API (pokemonService.js)
├── hooks/             # Logique partagée (useAuth, useTodo)
└── App.js             # Gestion du Routing
```
---

## 🚀 Installation et Lancement
Cloner le dépôt

```Bash

git clone [https://github.com/ton-pseudo/nom-du-projet.git](https://github.com/ton-pseudo/nom-du-projet.git)
cd nom-du-projet
```
Installer les dépendances

```Bash

npm install
```
Lancer l'application

```Bash

npm start
```
---

## 📚 Ressources utilisées
Documentation NextJs.

PokeAPI : https://pokeapi.co/
