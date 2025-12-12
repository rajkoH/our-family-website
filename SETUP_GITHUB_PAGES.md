# Quick Setup Guide for GitHub Pages

## Step 1: Enable GitHub Pages (Do This First!)

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/rajkoH`
2. Click **"Settings"** tab (top right)
3. Click **"Pages"** in the left sidebar
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"** (NOT "Deploy from a branch")
5. That's it for settings!

## Step 2: Update Your Astro Config

Open `astro.config.ts` and add these two lines after `output: 'static',`:

```typescript
export default defineConfig({
  output: 'static',
  site: 'https://YOUR_USERNAME.github.io',
  base: '/rajkoH',

  integrations: [
    // ... rest stays the same
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

For example, if your username is `johndoe`:
```typescript
site: 'https://johndoe.github.io',
base: '/rajkoH',
```

## Step 3: Commit and Push

```bash
git add astro.config.ts
git commit -m "Configure site for GitHub Pages"
git push origin main
```

## Step 4: Watch It Deploy

1. Go to the **"Actions"** tab in your GitHub repo
2. You'll see a workflow running called "Deploy to GitHub Pages"
3. Wait 1-2 minutes for it to complete (green checkmark ✓)

## Step 5: Access Your Site! 🎉

Your site will be live at:
```
https://rajkoh.github.io/our-family-website/
```

---

## If You See a 404 Error:

1. Wait another minute (sometimes takes a bit longer)
2. Check the Actions tab to ensure deployment succeeded
3. Verify you selected "GitHub Actions" (not "Deploy from a branch") in Settings > Pages
4. Make sure `base: '/rajkoH'` matches your repository name exactly

## Future Updates:

Every time you push code to the main branch:
- GitHub Actions automatically rebuilds
- Your site updates in 1-2 minutes
- No manual steps needed!

---

## Need Help?

Check the Actions tab for detailed error logs if something goes wrong.

