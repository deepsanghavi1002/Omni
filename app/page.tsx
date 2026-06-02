import { ConsentCard } from '@/components/ConsentCard';
import { IndiaResidencyCard } from '@/components/IndiaResidencyCard';
import { VerificationSteps } from '@/components/VerificationSteps';

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">
          <span className="brand-mark">O</span>
          <span>Omni India</span>
        </div>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#privacy">Privacy</a>
          <a href="#residency">India data</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">India-only private proof of personhood</p>
          <h1>One human. One private proof. Data stays in India.</h1>
          <p className="hero-text">
            Omni India is a World-style identity and humanity verification concept built for India: biometric login through device passkeys, consent-first onboarding, and India-region infrastructure.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#start">Start verification</a>
            <a className="secondary-button" href="#privacy">See privacy promise</a>
          </div>
          <p className="disclaimer">
            MVP note: Aadhaar biometric authentication is not enabled. It should only be added after regulatory approval.
          </p>
        </div>

        <div className="orb-card" aria-label="Omni biometric proof visual">
          <div className="orb">
            <div className="orb-inner" />
          </div>
          <div className="status-panel">
            <span className="status-dot" />
            <span>Passkey ready</span>
          </div>
          <div className="identity-card">
            <p>Proof status</p>
            <strong>Not verified yet</strong>
            <span>Private credential will appear here</span>
          </div>
        </div>
      </section>

      <section id="start" className="section grid-3">
        <ConsentCard />
        <IndiaResidencyCard />
        <div className="card dark-card">
          <h2>Biometric login</h2>
          <p>
            Use Face ID, Touch ID, Android biometrics, or a security key through passkeys. The app does not need to receive your raw fingerprint or face scan.
          </p>
          <button className="wide-button">Create biometric passkey</button>
        </div>
      </section>

      <section id="how" className="section split">
        <div>
          <p className="eyebrow">Simple user journey</p>
          <h2>World-like experience, Indian privacy design.</h2>
          <p>
            The goal is to prove that a user is a unique real person without building a dangerous central biometric database.
          </p>
        </div>
        <VerificationSteps />
      </section>

      <section id="privacy" className="section privacy-section">
        <p className="eyebrow">Privacy promise</p>
        <h2>Designed to minimize sensitive data.</h2>
        <div className="privacy-grid">
          <div>
            <h3>No raw biometrics on server</h3>
            <p>Use device biometrics only to unlock a passkey. Store proof records, not face, iris, or fingerprint images.</p>
          </div>
          <div>
            <h3>Consent log</h3>
            <p>Every permission is recorded with purpose, time, version, and revocation status.</p>
          </div>
          <div>
            <h3>India-region only</h3>
            <p>App servers, database, logs, backups, and encryption keys should remain in Indian regions.</p>
          </div>
          <div>
            <h3>Regulated Aadhaar path</h3>
            <p>Aadhaar can be added only through compliant, approved flows. The MVP keeps it disabled.</p>
          </div>
        </div>
      </section>

      <section id="residency" className="section residency-band">
        <div>
          <p className="eyebrow">Deployment rule</p>
          <h2>Border-controlled infrastructure</h2>
        </div>
        <p>
          Production should enforce India-only regions, India-only backups, India-only KMS keys, audit logging, strict access control, and vendor contracts that prevent cross-border support access to personal data.
        </p>
      </section>

      <footer>
        <span>Omni India</span>
        <span>Private proof-of-personhood MVP</span>
      </footer>
    </main>
  );
}
