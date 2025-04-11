# Git Workflow Guide for Junior Developers

This guide is for junior developers working on the Drupal project. Follow these steps to manage your branches, commit code properly, and stay in sync with the `main` branch.

---

## ✅ PART 1: First-Time Setup (Creating Your Branch)

### 🔄 Step-by-step

1. **Switch to the `main` branch and pull the latest code**

```bash
git checkout main
git pull origin main
```

2. **Create your personal feature branch**

For Abdul Rehman:
```bash
git checkout -b feature/abdul
```

For Jahangir:
```bash
git checkout -b feature/jahangir
```

3. **Push your branch to the remote**

```bash
git push -u origin feature/abdul  # Or replace with your name
```

---

## ↺ PART 2: Daily/Regular Workflow (While Working in Your Branch)

### 💻 Step-by-step

1. **Make your changes in your feature branch (code, templates, config, etc.)**

2. **Add and commit your changes**

```bash
drush cex
git add .
git commit -m "feat: Added custom slider on product page"
```

### ✅ Commit message guidelines

| Type   | When to use it              | Example                                 |
|--------|------------------------------|-----------------------------------------|
| feat   | For new features             | `feat: Added new variation image slider`|
| fix    | For bug fixes                | `fix: Fixed add-to-cart JS bug`         |
| config | For config changes           | `config: Exported updated taxonomy view`|
| chore  | For misc. changes (e.g. composer) | `chore: Updated Drupal core to 10.2.6`|

2A. **Stop Npm running in the theme**


3. **Stay updated with `main`**

```bash
git checkout main
git pull origin main

git checkout feature/abdul  # Or your branch name
git merge main
```

4. **Resolve conflicts if needed, then run:**

```bash
composer install
drush cr
drush cim -y
```

4A. **Run: npm run sass**


5. **Push your changes to GitHub**

```bash
git push origin feature/abdul
```

---

### 🔗 Tips

- Never commit directly to `main`.
- Always work in your personal feature branch.
- Use clear and meaningful commit messages.

---

Happy coding! 🚀

