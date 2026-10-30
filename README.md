# Michael Simmons — Portfolio

Personal portfolio site: projects, skills, and contact info.

**Live:** https://michaelsimmons2004.github.io

Plain HTML, CSS, and JavaScript — no framework or build step. Hosted on GitHub Pages, which redeploys automatically on every push to `main`.

## Files

| File | What it is |
| --- | --- |
| `index.html` | All the page content (edit this to change text, projects, links) |
| `styles.css` | Colors, fonts, layout. Light and dark theme colors are at the top under `:root` |
| `script.js` | Theme toggle, mobile menu, project filters, copy-email button, scroll fade-in |
| `favicon.svg` | Browser tab icon |

## Editing

- **Add a project:** in `index.html`, find the comment `Add another project`, copy the template block, and fill it in. Set `data-cat` to any of `security ai systems web` so the filter buttons pick it up.
- **Add a resume:** put `resume.pdf` in this folder and uncomment the Resume button in the hero.
- **Experience:** each job is an `<li class="job">` in the `timeline` list in `index.html`; copy one to add another.
- **Security+:** when you pass, change its badge in the certifications list from `Dec 2026` to `Earned` and add `done` to its class.

## Preview locally

Open `index.html` in a browser, or run `python -m http.server` in this folder and visit http://localhost:8000.

## Publish changes

```bash
git add .
git commit -m "Update site"
git push
```

The live site updates about a minute later.
