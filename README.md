# Prova Frontend Hackató Saló Ocupació

## Descripció del projecte

Aquest projecte consisteix en el desenvolupament d'una aplicació web que mostra activitats per realitzar en moments d'avorriment.
L'aplicació consumeix dades de l'API [Bored API](https://bored-api.appbrewery.com/) i presenta una interfície amigable i responsive, dissenyada per ser atractiva tant en dispositius mòbils com d'escriptori.

## Requisits tècnics

- **Connexió a l'API**: Les dades de les activitats es carreguen mitjançant l'API de Bored API.
- **Estil i disseny**: S'ha utilitzat CSS per crear una interfície atractiva, seguint les referències visuals proporcionades, tot i que no m'hi vaig fixar en que tant el logo com l'imatge eren proporcionades pel que vaig utilizar un component de la llibreria [React Icons](https://react-icons.github.io/react-icons/) i vaig generar una imatge d'una ostra amb intel·ligencia artificial.
- **Responsive**: L'aplicació ha sigut creada seguint el patró mobile-first, és totalment responsiva i optimitzada per funcionar en dispositius mòbils i d'escriptori.

## Demo

Podeu accedir a una demo de l'aplicació des del següent enllaç:

- [Demo en viu](https://hackato-sdo.netlify.app/activities/social)

## Pila tecnològica utilitzada

- **Framework**: React
- **Empaquetador**: Vite
- **Estat global**: Zustand
- **Proves**: Vitest
- **Servidor web**: Express.js (per al proxy del backend)
- **Llenguatge**: TypeScript
- **Estil**: CSS
- **Desplegament**: Netlify (frontend) i Render (backend)

## Instal·lació i execució del projecte

Per executar aquest projecte localment, clona el repositori, instal·la les dependencies, buildeja el servidor del back amb `npm run build-back` i posa'l a escoltar amb `npm run back-start`. Pots provar el projecte o bé localmente amb el comand `npm run dev` o `npm run build` + `npm run preview`, o a l'enllaç de netlify.
