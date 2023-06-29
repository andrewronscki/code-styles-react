import { PersonEntity, PersonRepository } from "@/domain";

export class FindPeople {
	constructor(private readonly personRepository: PersonRepository) {}

	async execute(): Promise<PersonEntity[]> {
		const peopleFound = await this.personRepository.findAll();

		return peopleFound;
	}
}