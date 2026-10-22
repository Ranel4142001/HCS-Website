export class Appointment {
  constructor(
    public readonly id: string,
    public readonly providerId: string,
    public readonly organizationId: string,
    public readonly title: string,
    public readonly description: string,
    public readonly scheduledAt: Date,
    public readonly durationMinutes: number,
    public readonly status: 'scheduled' | 'completed' | 'cancelled'
  ) {}

  get isUpcoming(): boolean {
    return this.scheduledAt > new Date() && this.status === 'scheduled';
  }
}
