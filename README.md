# À-Table Voting System — Plateforme de Vote Culinaire (Angular + Spring Boot + JWT)

**À-Table Voting System** est une application web full-stack moderne permettant aux utilisateurs de voter quotidiennement pour leur plat préféré.
La plateforme gère plusieurs rôles **— User, Owner, Admin —** et propose une gestion complète des restaurants, des plats, du menu du jour et du workflow de validation.

Ce projet illustre une architecture professionnelle basée sur **Angular 17 côté frontend** et **Spring Boot côté backend**, avec une **sécurité** avancée reposant sur **JWT stateless authentication**.

---

## Technologies utilisées

🟦 ***Frontend***
- **Angular 17**
- **TailwindCSS** pour un design moderne et responsive
- **Angular Routing avancé** (multi-layouts architecture: Auth, User, Owner)
- **JWT Interceptor** (ajout automatique du token aux requêtes protégées)
- **Composants UI réutilisables**

🟩 ***Backend***
- **Spring Boot**
- **Spring Security + JWT** (authentication stateless)
- **AuthenticationManager + Custom JwtAuthFilter**
- **JPA / Hibernate**
- **Global Exception Handling (ControllerAdvice)**
- **Architecture REST** propre et modulable
- Validation des données, services métier structurés
- Séparation claire des responsabilités **(Controller → Service → Repository)**

🟨 ***Base de données***
- **MySQL**
- **Modèle relationnel complet :**
  - Users
  - Roles
  - Restaurants
  - Dishes
  - DailyItems
  - Votes

This frontend communicates with a **Spring Boot** backend secured with **JWT authentication**.

---

## 🎯 Fonctionnalités principales

### 👤 Espace Utilisateur (USER)
- Connexion sécurisée via email + mot de passe
- Accès au menu du jour
- Vote pour un seul plat par jour
- Consultation des résultats des votes
- Interface fluide et responsive

---

### 🧑‍🍳 Espace Propriétaire (OWNER)
Un tableau de bord puissant pour gérer son restaurant :
***Gestion des restaurants***
- Création / édition d’un restaurant
- Upload d’images HD (branding & couverture)
- Catégorie, adresse, description, contact…

***Gestion des plats***
- Ajout, modification, suppression
- Gestion du prix, description, image
- Filtrage par restaurant
  
***Planification du menu du jour***
- Création des Daily Items
- Sélection des plats du jour
- Gestion des votes associés
   
***Statistiques***
- Top plats de la semaine
- Nombre de votes
- Analyse des performances
- Statuts des demandes (PENDING / APPROVED / REJECTED)
---

### 🛡️ Espace Administrateur (ADMIN)
- Gestion de la modération
- Validation des nouveaux restaurants
- Validation des nouveaux plats
- Révision et rejet des éléments non conformes
- Supervision globale de la plateforme

---

## 🔐 Sécurité
- **JWT Authentication**
- Filtre personnalisé : **JwtAuthFilter**
- Mot de passe sécurisé avec **BCrypt**
- **CORS** configuré pour Angular (localhost:4200)
- Règles d’autorisation strictes selon les rôles
- CSRF désactivé (API REST)

---

## 🧱 Project Architecture
### Backend
### Frontend

## Démarrer le projet
### 

