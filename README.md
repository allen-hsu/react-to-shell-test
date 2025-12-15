# Vulnerable Next.js App - React2Shell Test Target

This is an **intentionally vulnerable** Next.js application for testing the React2Shell scanner.

## Vulnerability Info

- **CVE**: CVE-2025-55182 & CVE-2025-66478
- **Security Advisory**: https://nextjs.org/blog/security-update-2025-12-11
- **Severity**: Critical (RCE)

## Versions (Vulnerable)

| Package | Version |
|---------|---------|
| Next.js | 15.0.4 |
| React | 19.0.0 |
| React DOM | 19.0.0 |

## Patched Versions

- Next.js >= 15.1.2
- Next.js >= 14.2.25
- Next.js >= 13.5.9

## Usage

```bash
npm install
npm run dev
```

Runs on http://localhost:3001

## Warning

This application is **FOR TESTING AND DEMONSTRATION PURPOSES ONLY**.

Do NOT deploy this to production or expose it to the public internet.
