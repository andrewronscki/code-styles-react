import { Label, Text } from "@/components";

type Props = {
	label: string;
	text: string;
}

export function Information({ text, label }: Props) {
	return (
		<div className="flex flex-col justify-start items-start gap-1">
			<Label text={label} />
			<Text text={text} />
		</div>
	)
}