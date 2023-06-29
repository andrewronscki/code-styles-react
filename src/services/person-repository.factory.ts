import { AxiosHttpClient } from "@/services";

import { PersonRepository } from "@/domain";

import { AxiosPersonRepository, FakePersonRepository } from "@/services";

export function PersonRepositoryFactory(): PersonRepository {
	if (import.meta.env.VITE_PUBLIC_API_MOCKING === 'enabled') {
		return new FakePersonRepository();
	} else {
		const httpClient = new AxiosHttpClient();
		return new AxiosPersonRepository(httpClient);
	}
}