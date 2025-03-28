# CICD - React App avec Formulaire et Déploiement GitHub Pages

Projet développé dans le cadre du cours d'intégration continue.  
Ce dépôt contient une application React avec un formulaire complet, des tests, une configuration CI/CD et un déploiement automatique via GitHub Pages.

## Fonctionnalités

- Formulaire avec validation en temps réel :
  - Nom, prénom, date de naissance, ville, code postal, email
- Validation avec fonctions personnalisées (`validation.js`)
- Feedback utilisateur en cas d’erreur
- Tests unitaires avec `@testing-library/react`
- CI/CD avec GitHub Actions (build + test à chaque push)
- Déploiement automatique sur GitHub Pages

## Technologies utilisées

- React 19
- React Scripts 5
- Babel + ESLint
- Jest + Testing Library
- GitHub Actions
- GitHub Pages (`gh-pages`)

## Installation

```bash
npm install
```

## Lancer en local

```bash
npm start
```

## Lancer les tests

```bash
npm test
```

## Build pour la prod

```bash
npm run build
```

## Déploiement

Le site est automatiquement déployé sur :  
[https://zahermadi.github.io/CICD/](https://zahermadi.github.io/CICD/)

> Le déploiement est fait à chaque push sur `main` via GitHub Actions.

## Nom de version
PS: Le versionnage commence réellement à la version 2, avant cela je n'avais pas encore compris la notion de major minor patch. Donc je mettais des numéros au hasard.  
Prenez donc compte de la version 4 en tant que version 1 obsolète. Le projet démarre proprement à la version 2.

## Arborescence du projet

```
├── src/
│   ├── App.js
│   ├── Formulaire.jsx
│   ├── validation.js
│   ├── index.js
│   ├── App.test.js
│   └── ...
├── public/
│   └── index.html
├── package.json
├── .github/workflows/deploy.yml
├── README.md
```

## Bonnes pratiques

Les tests ont été écrits en respectant le principe **DRY (Don't Repeat Yourself)**.  
Pour éviter les répétitions de code, des fonctions comme `fillForm()` ont été créées pour centraliser les opérations récurrentes (comme le remplissage de formulaire).

## Auteur

- Zaher Islah Madi - M1 DEV - SOPHIA YNOV CAMPUS

