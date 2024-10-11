import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

export default function Aide() {
	return (
		<Accordion type="single" collapsible className="w-full p-3">
			<AccordionItem value="item-1" className="text-md">
				<AccordionTrigger className="text-lg text-sky-900">Installation de l'application</AccordionTrigger>
				<AccordionContent className="text-lg">
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger className="text-lg text-sky-900">Filtrer les courses</AccordionTrigger>
				<AccordionContent className="text-lg">
					Yes. It comes with default styles that matches the other
					components&apos; aesthetic.
				</AccordionContent>
			</AccordionItem>
			
		</Accordion>
	)
}


