const steps = [
  {
    title: 'Create passkey',
    text: 'User creates a device-bound passkey protected by phone biometrics.',
  },
  {
    title: 'Give consent',
    text: 'User approves India-only processing and sees data-use purpose.',
  },
  {
    title: 'Verify uniqueness',
    text: 'A regulated verification partner or approved flow confirms one-person-one-proof.',
  },
  {
    title: 'Receive private proof',
    text: 'User gets a reusable credential without exposing raw biometric data.',
  },
];

export function VerificationSteps() {
  return (
    <div className="steps">
      {steps.map((step, index) => (
        <div className="step" key={step.title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
