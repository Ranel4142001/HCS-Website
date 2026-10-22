import { IProviderRepository } from '@/domain/interfaces/IProviderRepository';
import { Provider } from '@/domain/entities/Provider';
import { NpiNumber } from '@/domain/value-objects/NpiNumber';
import { CredentialStatus } from '@/domain/enums/CredentialStatus';
export interface CreateProviderInput {
  firstName: string; lastName: string; email: string;
  phone: string; specialty: string; npiNumber: string;
}
export class CreateProvider {
  constructor(private readonly repo: IProviderRepository) {}
  async execute(input: CreateProviderInput): Promise<void> {
    const provider = new Provider(
      crypto.randomUUID(), input.firstName, input.lastName,
      input.email, input.phone, input.specialty,
      new NpiNumber(input.npiNumber), CredentialStatus.PENDING, new Date()
    );
    await this.repo.save(provider);
  }
}
