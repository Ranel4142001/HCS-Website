import { CredentialStatus } from '@/domain/enums/CredentialStatus';

export class Credential {
  constructor(
    public readonly id: string,
    public readonly providerId: string,
    public readonly payorName: string,
    public readonly payorId: string,
    public readonly status: CredentialStatus,
    public readonly submittedAt: Date,
    public readonly estimatedCompletionDate: Date | null,
    public readonly completedAt: Date | null
  ) {}

  get isPending(): boolean {
    return this.status === CredentialStatus.PENDING;
  }

  get isCompleted(): boolean {
    return this.status === CredentialStatus.VERIFIED;
  }

  get turnaroundDays(): number | null {
    if (!this.completedAt) return null;
    const diff = this.completedAt.getTime() - this.submittedAt.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }
}
