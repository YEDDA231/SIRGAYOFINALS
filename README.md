# Static Portfolio

This project now includes static pages that can be deployed directly to GitHub Pages:

- `index.html` (portfolio)
- `resume.html` (resume page)
- `wwwroot/css/site.css`
- `wwwroot/js/site.js`

## Run locally (static)

You can open `index.html` directly in a browser, or use a local static server.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, go to **Settings > Pages**.
3. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or your branch), `/ (root)`
4. Save, then wait for Pages deployment.
5. Your site URL will be shown in the Pages settings.

## API usage

- Browser: `wwwroot/js/site.js` sends `docs` payloads to your Flowise upsert endpoint.
- Python: run `flowise_api_test.py` to call the same API with `requests`.
