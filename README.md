# Khet Sathi — Farm Equipment Rental

A static website connecting Indian farmers who own machinery (tractors, harvesters, rotavators, sprayers, etc.) with farmers who need to rent it. No backend, no build step — plain HTML/CSS/JS, ready for GitHub Pages.

## What it does

- **Browse equipment** by category, search by district/state, sort by price
- **Book** — tapping "Book" slides up a panel with the owner's name and phone number (call or copy — booking happens by phone, not through the site)
- **List equipment** — anyone can add their own machine with price, location, and contact details; it appears in search immediately

## Run it locally

No install needed. Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Push this folder to a new GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Save — your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Current data model (demo-only)

Listings are stored in the visitor's own browser via `localStorage`, seeded with 8 sample listings across categories and states. That means:

- Listings you add are visible to you, on that device, in that browser — not to other visitors.
- To make listings shared across everyone (a real marketplace), you'll need a backend. Good low-effort options:
  - **Supabase** or **Firebase** (free tier, a few hours of work) — swap the `localStorage` calls in `script.js` for API calls.
  - A simple **Google Sheet + Apps Script** as a free "database" if you want something quick and non-technical.

## Files

- `index.html` — page structure and content
- `style.css` — design system (colors, type, layout)
- `script.js` — categories, sample data, filtering, form handling, the contact panel

## Customizing

- **Categories & icons**: edit the `CATEGORIES` array at the top of `script.js`.
- **States list**: edit `STATES` in `script.js`.
- **Colors/fonts**: edit the CSS custom properties at the top of `style.css` (`:root`).
- **Sample listings**: edit or remove `SEED_LISTINGS` in `script.js`.
