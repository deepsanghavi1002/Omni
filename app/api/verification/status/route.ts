import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    app: 'Omni India',
    verificationStatus: 'not_started',
    biometricStorage: 'device_only_passkey_model',
    dataResidency: 'india_only_required',
    aadhaarBiometricAuth: 'disabled_until_regulatory_approval',
  });
}
