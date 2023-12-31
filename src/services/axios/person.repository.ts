import { HttpClient, PersonEntity, PersonRepository } from "@/domain";

export class AxiosPersonRepository implements PersonRepository {
	constructor(private httpRequest: HttpClient) {}

	async findAll(): Promise<PersonEntity[]> {
		const people = await this.httpRequest.request({
			method: "get",
			url: "api/v1/people"
		});

		return people.body;
	}
}