Airdrop Tetris — Mini App (prototype)
====================================

Qué hay:
- index.html : App estática (single-file) con un Tetris minimal y tema "Airdrop / Coinbase blue".
- .well-known/farcaster.json : Manifest template (edita los URLs y pon tu dominio).
- README.md : estás leyendo la versión corta. Sigue las instrucciones abajo.

Objetivo:
- Tener una mini-app rápida y sencilla que puedas hospedar en cualquier hosting estático (Vercel, Netlify, GitHub Pages).
- Luego registrar el dominio como Mini App en Farcaster (manifest) para lanzarla dentro del feed.

Pasos rápidos (resumen):
1) Hospeda la carpeta en Vercel / Netlify / GH Pages. Necesitas un dominio público HTTPS.
2) Actualiza `.well-known/farcaster.json` cambiando los campos iconUrl, homeUrl, splashImageUrl por las URLs reales de tu host.
3) Ve al *Farcaster Manifest Tool* (https://farcaster.xyz/~/developers/mini-apps/manifest) y registra tu dominio. Sigue los pasos para "Claim Ownership" y copia el `accountAssociation` que te devuelven dentro del farcaster.json (reemplaza el contenido del archivo en tu server).
4) Vuelve a desplegar para que `https://TU_DOMINIO/.well-known/farcaster.json` sirva la versión firmada.
5) Abre Warpcast (https://warpcast.com) y prueba: crea un cast que incluya tu URL o usa el composer desde la mini-app.

Instrucciones detalladas y recursos:
- Documentación de Mini Apps / Frames (Farcaster): https://docs.farcaster.xyz/ (ver sección Mini Apps). 
- Guía de publicación y manifest: https://miniapps.farcaster.xyz/docs/guides/publishing
- Plantilla quickstart y cómo convertir web app: https://docs.base.org/mini-apps/quickstart/create-new-miniapp
- Para conectar MetaMask a Base (RPC y chainId): Base Mainnet RPC: https://mainnet.base.org (Chain ID: 8453).
- Coinbase blue: color comúnmente usado: #0052FF (útil para tema y botones). 

Recomendaciones para comenzar rápido:
- Si no quieres dominio propio, despliega a Netlify o Vercel. Copia la URL temporal (https://xxx.netlify.app) y úsala para registrar el manifest.
- Empieza sin integrar on-chain (sin recompensas). Cuando quieras añadir TOSHI/reclamos, te preparo el backend + contrato.
- Para que los usuarios compartan puntuaciones en Warpcast, el botón "Share" abre el composer con texto pre-llenado.

Qué puedo hacer ahora (elige una opción):
1) Generar una versión con build (React) y un repo listo para Vercel.
2) Añadir un icono y splash (gráficos) y personalizar look.
3) Preparar el manifiesto completo con `accountAssociation` y pasos exactos para "Claim Ownership" (te guío en cada click).
4) Implementar la versión con rewards (oracle + contrato en Base) cuando estés listo.

NOTA: No puedo desplegar en tu cuenta por ti (no tengo acceso a tus claves). Lo que sí hago: generar todo el código listo y darte los comandos exactos para que lo subas y registres en Farcaster/warpcast.

