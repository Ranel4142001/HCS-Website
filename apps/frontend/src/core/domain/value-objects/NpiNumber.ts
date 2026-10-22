export class NpiNumber {
  private readonly value: string;

  constructor(npi: string) {
    const cleaned = npi.trim();
    if (!/^\d{10}$/.test(cleaned)) {
      throw new Error('Invalid NPI Number format. NPI must be exactly 10 digits.');
    }
    this.value = cleaned;
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: NpiNumber): boolean {
    return this.value === other.getValue();
  }
}
