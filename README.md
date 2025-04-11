# Printerhive Dokumentace

Tento repozitář obsahuje zdrojové soubory pro oficiální dokumentaci [Printerhive](https://printerhive.com).

## Instalace

```bash
# Naklonujte repozitář
git clone https://github.com/váš-uživatel/printerhive-docs.git
cd printerhive-docs

# Nainstalujte závislosti
npm install
```

## Vývojový server

Pro spuštění vývojového serveru:

```bash
npm run docs:dev
```

Tím se spustí místní vývojový server na adrese `http://localhost:5173`.

## Sestavení pro produkci

Pro sestavení stránek pro produkci:

```bash
npm run docs:build
```

Pro náhled produkčního sestavení:

```bash
npm run docs:preview
```

## Technologie

Dokumentace je postavena na [VitePress](https://vitepress.dev/), moderním SSG generátoru webových stránek, který využívá Vue 3. 