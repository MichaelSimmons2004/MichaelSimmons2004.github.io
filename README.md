# Michael Simmons — Portfolio

Personal portfolio site: projects, skills, and contact info.

**Live:** https://michaelsimmons2004.github.io

Plain HTML, CSS, and JavaScript — no framework or build step. Hosted on GitHub Pages, which redeploys automatically on every push to `main`.

## Files

| File | What it is |
| --- | --- |
| `index.html` | All the page content (edit this to change text, projects, links) |
| `styles.css` | Colors, fonts, layout. Theme colors are at the top under `:root` |
| `script.js` | Terminal typing animation, mobile menu, scroll fade-in |
| `favicon.svg` | Browser tab icon |

## Editing

- **Add a project:** in `index.html`, find the comment `Add another project`, copy the template block, and fill it in.
- **Add a resume:** put `resume.pdf` in this folder and uncomment the Resume button in the hero.
- **Experience:** each job is an `<li>` in the `timeline` list in `index.html`; copy one to add another.

Search `index.html` for `TODO` to find everything that still needs personal details.

## Preview locally

Open `index.html` in a browser — no server needed.

## Publish changes

```bash
git add .
git commit -m "Update site"
git push
```

The live site updates about a minute later.
