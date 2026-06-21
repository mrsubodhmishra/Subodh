# Subodh Mishra — Portfolio Website
### Neomorphism × Skeuomorphism × Spatial UI

A tactile, dimensional portfolio combining three design languages:
- **Neomorphism** — soft, pressed/raised surfaces using dual-light shadows (buttons, cards, form fields all look physically embossed into the page)
- **Skeuomorphism** — realistic material details: polaroid photos, a leather "passport" trekking page with stitched dashed borders, a wax seal, photo-stand mat frames
- **Spatial UI** — floating frosted-glass nav dock, layered glass chips, ambient parallax background blobs, mouse-tilt hero portrait

**Finance · Tax · Trekking · Photography** | Kathmandu, Nepal 🇳🇵

---

## 🖼️ About the images (IMPORTANT — read this)

Every image on this site is now a **local file inside `assets/images/`** — nothing is loaded from your old website anymore, so nothing can silently fail or hide.

Right now those files are **soft illustrated placeholders** (mountain/portrait shapes), not real photos, so the site always looks complete even before you add anything.

### To upload your own real photos:

1. Open the `assets/images/` folder in this ZIP
2. Replace each file below with your own photo, **keeping the exact same filename**:

| Filename | Used for | Suggested size |
|---|---|---|
| `hero-portrait.svg` → replace with `hero-portrait.jpg` | Top banner photo | 800×1000px portrait |
| `about-photo.svg` → replace with `about-photo.jpg` | About section photo | 1000×1200px portrait |
| `trek-tilicho.svg` → replace with `trek-tilicho.jpg` | Featured Tilicho Lake photo | 1200×900px landscape |
| `trek-rara.svg` → replace with `trek-rara.jpg` | Rara Lake polaroid | 800×600px landscape |
| `trek-janakpur.svg` → replace with `trek-janakpur.jpg` | Janakpurdham polaroid | 800×600px landscape |

3. **If you change the file extension** (e.g. `.svg` → `.jpg`), also update the matching `src="assets/images/...".` line in `index.html` to match the new filename.
   - Use Ctrl+F / Cmd+F to find each filename and update it.
4. Save, re-zip, and re-upload to GitHub (see below).

> 💡 Tip: keep file sizes under 500KB each (compress at [tinypng.com](https://tinypng.com)) so the site loads fast.

---

## 🚀 Deploy on GitHub Pages (Step-by-Step)

### Option A — Upload ZIP (Easiest)

1. **Create a GitHub repository**
   - Go to [github.com](https://github.com) → sign in
   - Click **"New repository"**
   - Name it: `your-username.github.io` (replace with your GitHub username)
   - Set to **Public**
   - Click **"Create repository"**

2. **Upload files**
   - Unzip this download first
   - On the repository page, click **"Add file → Upload files"**
   - Drag and drop everything: `index.html`, `style.css`, `script.js`, `README.md`, and the entire `assets/` folder
   - Click **"Commit changes"**

3. **Enable GitHub Pages**
   - Go to repository **Settings → Pages**
   - Under **Source**, select **"Deploy from a branch"**
   - Branch: `main` | Folder: `/ (root)`
   - Click **Save**

4. **Your site is live!**
   - Wait 1–2 minutes
   - Visit: `https://your-username.github.io`

---

### Option B — Git CLI

```bash
git clone https://github.com/your-username/your-username.github.io
cd your-username.github.io
# Copy all files (including the assets/ folder) here
git add .
git commit -m "Neomorphic/skeuomorphic/spatial portfolio launch"
git push origin main
```

---

## 📁 File Structure

```
subodh-portfolio/
├── index.html              ← Main HTML (all sections)
├── style.css                ← All styles
├── script.js                 ← Animations & interactions
├── README.md                 ← This file
└── assets/
    └── images/
        ├── hero-portrait.svg   ← Replace with your photo
        ├── about-photo.svg     ← Replace with your photo
        ├── trek-tilicho.svg    ← Replace with your photo
        ├── trek-rara.svg       ← Replace with your photo
        └── trek-janakpur.svg   ← Replace with your photo
```

---

## 🎨 Design System

| Token | Value | Use |
|---|---|---|
| `--paper` | `#EDE7DD` | Base background (neomorphic surface) |
| `--ink` | `#3D3528` | Primary text |
| `--brass` | `#B8915A` | Accent — buttons, highlights |
| `--leather` | `#5C4A33` | Trekking section background |
| Display font | `Fraunces` | Headlines (soft optical serif) |
| Body font | `Inter` | Body copy, labels |

**Neomorphic shadow recipe** (used throughout): `8px 8px 18px #c9c0ac, -8px -8px 18px #ffffff` for raised elements, inverted (`inset`) for pressed/active states.

---

## ✏️ Customization Guide

| What to change | Where |
|---|---|
| Name, bio, contact info | `index.html` |
| Colors & fonts | `style.css` → `:root` variables |
| Photos | `assets/images/` folder (see image guide above) |
| Work experience | `index.html` → `#experience` section |
| Trekking log entries | `index.html` → `#trekking` section |
| Social links | `index.html` → hero socials + footer |

---

## 🌐 Custom Domain (optional)

If you own `subodhmishra.com.np`:
1. Go to repo **Settings → Pages → Custom domain**
2. Enter your domain and save
3. Add a `CNAME` file with your domain name
4. Update your DNS: add a CNAME record pointing to `your-username.github.io`

---

Designed with care. 🚀
