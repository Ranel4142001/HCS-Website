import { IProviderRepository } from '@/domain/interfaces/IProviderRepository';
export class GetProviders {
  constructor(private readonly repo: IProviderRepository) {}
  async execute() { return this.repo.getAll(); }
}
