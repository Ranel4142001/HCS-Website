export class UpdateProvider {
  async execute(id: string, _updates: Record<string, unknown>): Promise<void> {
    // TODO: implement with IProviderRepository.update when backend is ready
    console.log('UpdateProvider:', id);
  }
}
