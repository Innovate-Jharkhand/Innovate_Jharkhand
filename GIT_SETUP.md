# Git & Repository Setup Guide

## ⚠️ IMPORTANT: Before Pushing to GitHub

### 1. Remove Sensitive Data from Git History

```bash
# Check current git status
git status

# Remove .env from git tracking (if already committed)
git rm --cached backend/.env
git rm --cached frontend/.env

# Add to gitignore (already done)
echo ".env" >> .gitignore

# Commit the change
git commit -m "Remove .env files from tracking"
```

### 2. Set Up Environment Variables Locally

```bash
# Backend
cp backend/.env.example backend/.env
# Edit backend/.env with your REAL credentials

# Frontend  
cp frontend/.env.example frontend/.env
# Edit frontend/.env if needed
```

### 3. GitHub Secrets for CI/CD

If you plan to use GitHub Actions for deployment:

1. Go to: **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Add these secrets:
   - `MONGO_URI` - Your MongoDB connection string
   - `JWT_SECRET` - Your JWT secret key
   - `RAZORPAY_KEY_ID` - Your Razorpay key
   - `RAZORPAY_KEY_SECRET` - Your Razorpay secret
   - `DEPLOYMENT_KEY` (if using SSH for deployment)

### 4. Initial Git Setup (if not already done)

```bash
# Navigate to project root
cd Innovate_Jharkhand

# Initialize git (if not already initialized)
git init

# Add remote repository
git remote add origin https://github.com/yourusername/Innovate_Jharkhand.git

# Or with SSH:
git remote add origin git@github.com:yourusername/Innovate_Jharkhand.git

# Verify remote
git remote -v
```

### 5. Make Initial Commit

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: Full-stack tourism booking platform"

# Push to GitHub
git branch -M main
git push -u origin main
```

## 📋 Checklist Before Publishing

- [ ] All `.env` files are in `.gitignore`
- [ ] No credentials in code files
- [ ] `.env.example` files have placeholder values
- [ ] Backend and frontend `.gitignore` files are updated
- [ ] Root `.gitignore` is configured
- [ ] `bookings/` folder is ignored
- [ ] `node_modules/` is ignored
- [ ] `dist/` and build folders are ignored
- [ ] GitHub secrets are configured (if using Actions)
- [ ] README.md is complete
- [ ] DEPLOYMENT.md is included
- [ ] Docker files are tested

## 🔍 Verify No Secrets are Exposed

```bash
# Search for common secret patterns
git log --all -S "mongodb+srv://" --oneline
git log --all -S "RAZORPAY" --oneline
git log --all -S "JWT_SECRET" --oneline

# If found, use git-filter-repo to remove them:
# pip install git-filter-repo
# git filter-repo --invert-paths --path-regex '^backend/.env$'
```

## 📚 GitHub Repository Settings

### Recommended Settings:

1. **General**
   - Set default branch to `main`
   - Enable branch protection rules
   - Require pull request reviews before merging

2. **Security**
   - Enable private repository (recommended)
   - Set up code scanning (GitHub Advanced Security)
   - Enable secret scanning notifications

3. **Actions**
   - Enable GitHub Actions (for CI/CD)
   - Add branch protection: "Require status checks to pass"

## 🚀 After Push to GitHub

### 1. Verify Repository
```bash
# Clone from GitHub to verify
git clone https://github.com/yourusername/Innovate_Jharkhand.git test-clone
cd test-clone
cat backend/.env  # Should not exist or only show .env.example
```

### 2. Set Up Branch Protection
1. Go to Settings → Branches
2. Add rule for `main` branch
3. Check: "Require a pull request before merging"
4. Check: "Dismiss stale reviews when new commits"

### 3. Configure Deployment
- Choose your hosting platform
- Link GitHub repository
- Add secrets from your `.env` files
- Enable automatic deployments

## 🔐 Security Best Practices

✅ DO:
- Use environment variables for all secrets
- Rotate credentials regularly
- Use strong JWT secrets
- Enable 2FA on GitHub account
- Review collaborator access
- Audit logs for unauthorized access

❌ DON'T:
- Commit `.env` files
- Use default credentials
- Share secrets in chat/email
- Push to public repo with test credentials
- Hardcode API keys
- Share GitHub tokens with others

## 📞 Troubleshooting

### Accidentally Committed .env?

```bash
# View history containing .env
git log --full-history -- backend/.env

# Remove from history (dangerous - rewrites history!)
git filter-repo --invert-paths --path backend/.env

# Force push (only if no one else has pulled)
git push -f origin main
```

### Push Rejected - Permission Denied?

```bash
# Check SSH key is added
ssh -T git@github.com

# If not working, add SSH key to GitHub
# Settings → SSH and GPG keys → New SSH key

# Or use personal access token for HTTPS
git remote set-url origin https://<token>@github.com/user/repo.git
```

## 📖 Resources

- [GitHub Security](https://docs.github.com/en/code-security)
- [Managing Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Branch Protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule)

---

**🎉 Ready to deploy? Follow the DEPLOYMENT.md guide next!**
