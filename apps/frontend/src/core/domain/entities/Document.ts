import { DocumentType } from '@/domain/enums/DocumentType';

export class Document {
  constructor(
    public readonly id: string,
    public readonly providerId: string,
    public readonly name: string,
    public readonly type: DocumentType,
    public readonly filePath: string,
    public readonly fileSizeBytes: number,
    public readonly mimeType: string,
    public readonly expiresAt: Date | null,
    public readonly uploadedAt: Date
  ) {}

  get isExpired(): boolean {
    if (!this.expiresAt) return false;
    return this.expiresAt < new Date();
  }

  get isExpiringSoon(): boolean {
    if (!this.expiresAt) return false;
    const thirtyDays = 30 * 24 * 60 * 60 * 1000;
    return !this.isExpired && this.expiresAt.getTime() - Date.now() < thirtyDays;
  }

  get fileSizeKb(): number {
    return Math.round(this.fileSizeBytes / 1024);
  }
}
