import { apiClient } from '../api/apiClient';
import { IProviderRepository } from '@/domain/interfaces/IProviderRepository';
import { Provider } from '@/domain/entities/Provider';
import { CredentialStatus } from '@/domain/enums/CredentialStatus';
import { NpiNumber } from '@/domain/value-objects/NpiNumber';

/**
 * HTTP implementation of IProviderRepository.
 * Maps raw API JSON responses into domain entities.
 * This is the ONLY place in the app that knows about the API response shape.
 */
export class HttpProviderRepository implements IProviderRepository {
  async getById(id: string): Promise<Provider | null> {
    try {
      const response = await apiClient.get<ProviderApiDto>(`/providers/${id}`);
      return this.toDomain(response.data);
    } catch {
      return null;
    }
  }

  async getAll(): Promise<Provider[]> {
    const response = await apiClient.get<ProviderApiDto[]>('/providers');
    return response.data.map((dto) => this.toDomain(dto));
  }

  async save(provider: Provider): Promise<void> {
    await apiClient.post('/providers', {
      firstName: provider.firstName,
      lastName: provider.lastName,
      email: provider.email,
      phone: provider.phone,
      specialty: provider.specialty,
      npiNumber: provider.npiNumber.getValue(),
    });
  }

  /** Maps raw API DTO → Domain Entity */
  private toDomain(dto: ProviderApiDto): Provider {
    return new Provider(
      dto.id,
      dto.firstName,
      dto.lastName,
      dto.email,
      dto.phone,
      dto.specialty,
      new NpiNumber(dto.npiNumber),
      dto.status as CredentialStatus,
      new Date(dto.createdAt)
    );
  }
}

/** Shape of the raw API response for a Provider */
interface ProviderApiDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialty: string;
  npiNumber: string;
  status: string;
  createdAt: string;
}


