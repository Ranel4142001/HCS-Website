export class Notification {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly title: string,
    public readonly message: string,
    public readonly type: 'info' | 'warning' | 'success' | 'error',
    public readonly isRead: boolean,
    public readonly createdAt: Date
  ) {}
}
