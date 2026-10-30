# Study App

Generate MCQs, summaries, flashcards and explanations from your PDF lectures using Gemini.

![Desktop screenshot](docs/screenshot-desktop.png)

## Laptop (Windows installer)
    npm install
    npm start          # run for testing
    npm run dist       # builds release/StudyApp Setup 1.0.0.exe

## Mobile (installable web app via GitHub Pages)
1. Create a GitHub repo and push this folder to the `main` branch.
2. Repo > Settings > Pages > Source: **GitHub Actions**.
3. Wait for the "Deploy web app" action to finish. Your link: https://USERNAME.github.io/REPO/
4. On the phone open the link in Chrome (Android) or Safari (iPhone):
   - Android: menu > Install app / Add to Home screen
   - iPhone: Share > Add to Home Screen

The Gemini API key is entered inside the app (🔑 button) and is stored only on your device.
