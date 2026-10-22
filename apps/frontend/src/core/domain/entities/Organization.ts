export class Organization {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly taxId: string,
    public readonly npi: string,
    public readonly address: string,
    public readonly city: string,
    public readonly state: string,
    public readonly zip: string,
    public readonly phone: string,
    public readonly email: string,
    public readonly providerCount: number,
    public readonly createdAt: Date
  ) {}

  get displayAddress(): string {
    return `${this.address}, ${this.city}, ${this.state} ${this.zip}`;
  }
}
