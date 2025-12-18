# 🚀 Next.js + Electron Standalone App

**Application desktop moderne avec UI Web & accès système**

Ce projet est un exercice d’apprentissage visant à comprendre comment transformer une application web **Next.js** en une **application desktop standalone** grâce à **Electron**, tout en respectant la séparation des responsabilités entre l’interface et le système.

---

## 🎯 Objectifs pédagogiques

### 🧠 Architecture Electron

* Comprendre la séparation **Processus de rendu / Processus principal**
* Découvrir la communication sécurisée via **IPC**

### 🖥️ Application standalone

* Créer une application **installable**
* Fonctionnant **sans serveur externe**
* Utilisable **hors ligne**

### 🌐 UI moderne avec Next.js

* Utiliser Next.js comme moteur d’interface
* Gérer le routing et l’état côté client
* Build et export statique pour Electron

---

## 🧩 Concepts clés

### 1. Processus de rendu (Renderer)

* Application **Next.js**
* Affichage de l’interface (pages, formulaires, listes)
* Aucun accès direct au système

👉 Équivalent d’un onglet Chrome, mais **dans Electron**

---

### 2. Processus principal (Main)

* Environnement **Node.js**
* Création et gestion de la fenêtre Electron
* Accès au système :

  * fichiers
  * système d’exploitation
  * stockage local

---

### 3. Passerelle IPC (Inter-Process Communication)

* Canal sécurisé entre le Renderer et le Main
* Le Renderer **demande**
* Le Main **exécute**

```
Next.js (UI)
   ↓ IPC
Electron Main (Node.js)
   ↓
Système d’exploitation
```

---

## 🛠️ Fonctionnalités

### 1. Interface Next.js

* Routing côté client
* Pages statiques exportées
* Composants UI réutilisables

### 2. Application desktop standalone

* Fonctionne sans backend distant
* Toutes les ressources sont embarquées
* Lancement via Electron

### 3. Accès système (via IPC)

* Lecture / écriture de fichiers locaux
* Stockage persistant sur la machine
* Sécurité assurée par le Processus Principal

---

## 🏗️ Architecture du projet

```
.
├── electron/
│   ├── main.js            # Processus principal Electron
│   ├── preload.js         # Pont sécurisé IPC
│
├── next-app/
│   ├── app/               # Pages Next.js
│   ├── components/        # Composants UI
│   ├── services/          # Logique métier & IPC
│   └── public/
│
├── out/                   # Build statique Next.js
├── package.json
└── README.md
```

---

## 🔄 Flux de fonctionnement

1. Next.js est buildé en statique
2. Electron charge les fichiers HTML générés
3. L’interface s’affiche dans une fenêtre desktop
4. Les actions système passent par IPC

```
Utilisateur
   ↓
Next.js (Renderer)
   ↓ IPC
Electron Main
   ↓
OS
```

---

## 🚀 Installation et lancement

### 1. Cloner le dépôt

```
git clone https://github.com/ton-pseudo/next-electron-standalone.git
cd next-electron-standalone
```

### 2. Installer les dépendances

```
npm install
```

### 3. Build Next.js (export statique)

```
npm run build
npm run export
```

### 4. Lancer l’application Electron

```
npm run electron
```

---

## 📦 Build de l’application (optionnel)

Générer une application installable (Windows / macOS / Linux) :

```
npm run dist
```

---

## 🧠 Ce que ce projet permet de comprendre

* Différence entre **application web** et **application desktop**
* Rôle du **Processus Principal** dans Electron
* Pourquoi l’UI ne doit jamais accéder directement au système
* Comment créer une application **autonome (standalone)**

---

## 📚 Ressources

* Documentation officielle Next.js
* Documentation officielle Electron

---

## ✅ À retenir

> **Electron = architecture (Renderer / Main / IPC)**
> **Standalone = mode de déploiement**
> **Next.js = interface utilisateur moderne**

---

Si tu veux, je peux aussi te fournir :

* un **template de repo**
* une **version débutant**
* ou un README **orienté sécurité IPC**
