# Favicon & Social Media Preview Instructions

## Current Setup

I've updated your site with:

1. **Favicon**: A warm, family-oriented design with two hearts (representing you both) and a small heart in the middle (representing your future child)
2. **Social Media Preview**: Uses one of your beautiful wedding photos (Chapter2-1.jpg)
3. **Theme Color**: Warm terracotta (#D08C64) matching your site design

## What Shows Up Where

### Social Media (Facebook, LinkedIn, WhatsApp, etc.)

When someone shares your link, they'll see:

- Your wedding photo as the preview image
- Title: "Dylan & Ryan - Our Journey to Parenthood"
- Description: Your warm, welcoming message

### Browser Tab

- Custom favicon with hearts design
- "Dylan & Ryan" text

### Mobile Home Screen

- Heart icon if they save your site to their phone

## To Customize Further

### Option 1: Use Your Own Photo as Favicon

1. Choose your favorite photo together
2. Crop it to a square (180x180px minimum)
3. Use a free tool like:
   - https://favicon.io/ (upload image → generate favicons)
   - https://realfavicongenerator.net/ (more advanced)
4. Replace files in `src/assets/favicons/`:
   - `favicon.ico`
   - `apple-touch-icon.png`
   - `favicon.svg`

### Option 2: Create Custom Design

Use Canva or similar to create:

- **Size**: 512x512px square
- **Design ideas**:
  - Your initials (D & R) in a heart
  - Simple family/home icon
  - Baby footprints
  - Two figures holding hands
- **Colors**: Use warm tones (#D08C64, #DEA582, #F5D5C0)

### Option 3: Change Social Media Preview Image

Edit `src/config.yaml`:

```yaml
openGraph:
  images:
    - url: '/our-family-website/images/YOUR-PHOTO.jpg'
```

## Testing Your Changes

After updating:

1. Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
2. Test social preview: https://www.opengraph.xyz/
3. Paste your URL: https://rajkoh.github.io/our-family-website/about/

## Current Colors

- Primary: #D08C64 (warm terracotta)
- Secondary: #DEA582 (soft coral)
- Accent: #B47864 (warm brown)
- Light: #FEFBF7 (cream)
