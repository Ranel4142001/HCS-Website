import { NpiNumber } from '@/domain/value-objects/NpiNumber';
import { CredentialStatus } from '@/domain/enums/CredentialStatus';

export class Provider {
  constructor(
    public readonly id: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly phone: string,
    public readonly specialty: string,
    public readonly npiNumber: NpiNumber,
    public readonly status: CredentialStatus,
    public readonly createdAt: Date
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get isVerified(): boolean {
    return this.status === CredentialStatus.VERIFIED;
  }

  get requiresAction(): boolean {
    return this.status === CredentialStatus.ACTION_REQUIRED;
  }
}
