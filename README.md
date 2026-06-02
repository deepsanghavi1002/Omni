# Omni India

A mobile-first India-only proof-of-personhood starter app inspired by the user flow of World ID, but designed for Indian data-residency and privacy-first biometric authentication.

## Important legal/product position

This project is **not** an Aadhaar clone and does **not** store Aadhaar biometrics. Aadhaar biometric authentication should only be integrated after formal approval as a permitted requesting entity / authentication user agency under applicable UIDAI and MeitY rules.

The safer MVP pattern is:

1. User installs app.
2. User consents to India-only processing.
3. App creates a device-bound passkey using the phone biometric sensor.
4. Optional offline/partner verification happens later.
5. Server stores only a pseudonymous proof record, not raw face, iris, or fingerprint images.
6. All user data is stored and processed in Indian cloud regions.

## MVP features included

- World-like landing page for India-only digital humanity proof.
- Biometric/passkey login call-to-action.
- Consent-first onboarding.
- Privacy dashboard copy.
- Architecture notes for Indian data residency.
- Placeholder API routes for verification status.

## Recommended stack

- Frontend: Next.js + React + TypeScript
- Authentication: WebAuthn / passkeys for phone biometric unlock
- Backend: Node.js API routes initially, later NestJS/FastAPI if needed
- Database: PostgreSQL in India region only
- Secrets: India-region KMS/HSM
- Hosting: Indian cloud region only
- Audit: immutable event log without raw biometrics

## Do not store these in MVP

- Raw fingerprint image
- Raw iris scan
- Raw face scan
- Aadhaar number unless absolutely necessary
- Aadhaar photocopy
- Passport/PAN images unless a regulated KYC use case requires it

## Folder structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
  api/verification/status/route.ts
components/
  ConsentCard.tsx
  IndiaResidencyCard.tsx
  VerificationSteps.tsx
lib/
  privacy.ts
  verification.ts
```

## Local run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Next build steps

1. Add real WebAuthn/passkey registration.
2. Add PostgreSQL schema for users, consent, devices, and verification proofs.
3. Add India-only deployment controls.
4. Add DPIA / privacy impact assessment.
5. Add Aadhaar only if approved by UIDAI/MeitY for the exact use case.
