import { Provider } from '@/domain/entities/Provider';

export interface IProviderRepository {
  getById(id: string): Promise<Provider | null>;
  getAll(): Promise<Provider[]>;
  save(provider: Provider): Promise<void>;
}

