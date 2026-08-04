# Kelixo Bio Link

A fast, mobile-first static bio-link page for Kelixo.

## Included

- TikTok link
- Discord invite
- Live Discord server name and online count from the public widget API
- Expandable Discord widget preview
- Komunity link placeholder
- Responsive dark design
- Vercel configuration
- No framework or build command required

## Add the Komunity URL

Open `index.html`, find:

```html
<a class="link-card" id="komunity-link" href="#" data-needs-url="true">
```

Replace it with your real URL and remove `data-needs-url="true"`, for example:

```html
<a class="link-card" id="komunity-link" href="https://your-link-here.com" target="_blank" rel="noreferrer">
```

## Add your real Kelixo logo

The current avatar is a CSS `K` monogram. To use your PNG logo:

1. Create an `assets` folder.
2. Put your image at `assets/kelixo-logo.png`.
3. Replace this in `index.html`:

```html
<div class="avatar" aria-hidden="true">
  <span>K</span>
</div>
```

with:

```html
<div class="avatar">
  <img src="assets/kelixo-logo.png" alt="Kelixo logo" />
</div>
```

Then add this to `styles.css`:

```css
.avatar img {
  width: 76%;
  height: 76%;
  object-fit: contain;
}
```

## Deploy to Vercel

### Vercel dashboard

1. Extract the ZIP.
2. Upload the folder to a GitHub repository.
3. In Vercel, select **Add New → Project**.
4. Import the repository.
5. Leave Framework Preset as **Other**.
6. Deploy. No build command is needed.

### Vercel CLI

```bash
npm i -g vercel
cd kelixo-bio-link
vercel
```

## Local preview

You can open `index.html` directly, or run:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.
