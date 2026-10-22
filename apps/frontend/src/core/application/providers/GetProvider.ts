import { IProviderRepository } from '@/domain/interfaces/IProviderRepository';
export class GetProvider {
  constructor(private readonly repo: IProviderRepository) {}
  async execute(id: string) { return this.repo.getById(id); }
}
