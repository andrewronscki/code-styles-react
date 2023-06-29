import { useEffect, useState } from "react";

import { FindPeople, PersonRepositoryFactory} from "@/services";
import { PersonEntity } from "@/domain";
import { PersonCard } from "@/components";

export function ListPeople() {
	const [people, setPeople] = useState<PersonEntity[]>([]);

	const personRepository = PersonRepositoryFactory();
	
	useEffect(() => {
		const findPeople = async () => {
			const peopleFound = await new FindPeople(personRepository).execute();
			setPeople(peopleFound);
		}

		findPeople();
	}, [])

  return (
    <div className="flex flex-wrap w-320 gap-6">
      {people.map((card) => (
        <PersonCard
          key={card.id}
          id={card.id}
          name={card.name}
          role={card.role}
          points={card.points}
        />
      ))}
    </div>
  );
}
