export function IndiaResidencyCard() {
  return (
    <div className="card">
      <span className="pill">India only</span>
      <h2>Data stays within Indian borders.</h2>
      <p>
        The production architecture should keep personal data, logs, backups, and encryption keys in India-region infrastructure.
      </p>
      <ul>
        <li>India cloud region</li>
        <li>India KMS keys</li>
        <li>India-only backups</li>
      </ul>
    </div>
  );
}
