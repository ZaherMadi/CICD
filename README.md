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

## Résolution des erreurs ESLint

Certaines règles d’accessibilité (a11y) ont été suivies, notamment :

- Suppression des `role` implicites sur les balises (`form`, `button`)
- Utilisation de `data-testid` pour simplifier les tests unitaires

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

## Auteur

- Zaher Islah Madi
- Étudiant en M1 - Smart Energy