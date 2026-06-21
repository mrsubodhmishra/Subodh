# Subodh Mishra — Portfolio Website (Brutalist Edition)

A raw, brutalist-style personal portfolio website for Subodh Mishra.
Thick black borders, monospace type, a stamped/ticketed trekking log, zero rounded corners, and high-contrast red/yellow accents on a stark black-and-white base.

**Finance · Tax · Trekking · Photography** | Kathmandu, Nepal 🇳🇵

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
   - On the repository page, click **"uploading an existing file"** or **"Add file → Upload files"**
   - Drag and drop ALL files from this ZIP (unzip first):
     - `index.html`
     - `style.css`
     - `script.js`
     - `README.md`
   - Click **"Commit changes"**

3. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages** (left sidebar)
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
# Copy all files here
git add .
git commit -m "Brutalist portfolio launch"
git push origin main
```

---

## 📁 File Structure

```
subodh-portfolio/
├── index.html      ← Main HTML (all sections)
├── style.css       ← All brutalist styles
├── script.js       ← Animations & interactions
└── README.md       ← This file
```

---

## 🎨 Design System

| Token | Value | Use |
|---|---|---|
| `--black` | `#000000` | Text, borders, primary surfaces |
| `--white` | `#ffffff` | Background |
| `--red` | `#ff2d00` | Primary accent — CTAs, key data |
| `--yellow` | `#ffe600` | Secondary accent — highlights, hover |
| `--gray` | `#efefef` | Image placeholders |
| Display font | `Archivo` (900 weight) | Headlines, ALL CAPS |
| Body/mono font | `JetBrains Mono` | Body copy, data tables, labels |

Structural rules: **no border-radius, no soft shadows, no gradients.** All borders are solid 1px or 3px black. The trekking section uses a "customs declaration / ticket" motif (stamps, perforated dividers, log tables) tying Subodh's accounting background into the trekking content.

---

## ✏️ Customization Guide

| What to change | Where |
|---|---|
| Name, bio, contact info | `index.html` |
| Colors & fonts | `style.css` → `:root` variables |
| Profile/hero image | Replace the `src` URLs in `index.html` |
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

Built not designed. 🚀
