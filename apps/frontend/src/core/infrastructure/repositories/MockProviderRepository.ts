import { IProviderRepository } from '@/domain/interfaces/IProviderRepository';
import { Provider } from '@/domain/entities/Provider';
import { CredentialStatus } from '@/domain/enums/CredentialStatus';
import { NpiNumber } from '@/domain/value-objects/NpiNumber';

/**
 * In-memory mock repository for development and testing.
 * Drop-in replacement for HttpProviderRepository — same interface, no HTTP calls.
 * Use this until the backend API is ready.
 */
export class MockProviderRepository implements IProviderRepository {
  private readonly providers: Provider[] = [
    new Provider(
      'prov-001',
      'Sarah',
      'Jenkins',
      'sarah.jenkins@practice.com',
      '(555) 123-4567',
      'Internal Medicine',
      new NpiNumber('1234567890'),
      CredentialStatus.VERIFIED,
      new Date('2024-01-15')
    ),
    new Provider(
      'prov-002',
      'James',
      'Carter',
      'james.carter@clinic.com',
      '(555) 987-6543',
      'Family Medicine',
      new NpiNumber('0987654321'),
      CredentialStatus.IN_REVIEW,
      new Date('2024-03-10')
    ),
    new Provider(
      'prov-003',
      'Maria',
      'Lopez',
      'maria.lopez@hospital.org',
      '(555) 555-0001',
      'Emergency Medicine',
      new NpiNumber('1122334455'),
      CredentialStatus.ACTION_REQUIRED,
      new Date('2024-06-01')
    ),
  ];

  async getById(id: string): Promise<Provider | null> {
    return this.providers.find((p) => p.id === id) ?? null;
  }

  async getAll(): Promise<Provider[]> {
    return [...this.providers];
  }

  async save(provider: Provider): Promise<void> {
    const index = this.providers.findIndex((p) => p.id === provider.id);
    if (index >= 0) {
      this.providers[index] = provider;
    } else {
      this.providers.push(provider);
    }
  }
}


