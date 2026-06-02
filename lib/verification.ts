export type VerificationStatus = 'not_started' | 'consent_given' | 'passkey_created' | 'verified' | 'revoked';

export type VerificationProfile = {
  status: VerificationStatus;
  countryScope: 'IN';
  storesRawBiometrics: false;
  aadhaarBiometricAuthEnabled: false;
};

export const defaultVerificationProfile: VerificationProfile = {
  status: 'not_started',
  countryScope: 'IN',
  storesRawBiometrics: false,
  aadhaarBiometricAuthEnabled: false,
};
