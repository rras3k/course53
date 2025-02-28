
import { Cpu, MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { set, get } from 'idb-keyval';
import { useState, useEffect} from 'react';

import {
	ToggleGroup,
	ToggleGroupItem,
} from "@/components/ui/toggle-group"

const modeDefault = "light"

const ChoixLuminosite = () => {
	const [modeLuminosite, setModeLuminosite] = useState(modeDefault);

	const changeMode = (mode: string) => {
		setTheme(mode)
		set("mode-lum", mode)
		setModeLuminosite(mode)
	}
	
	useEffect(() => {
		get("mode-lum")
			.then((modeSvg) => {
				setModeLuminosite(modeSvg)
			})
			.catch(e => {
				set("mode-lum", modeDefault)
				setModeLuminosite(modeDefault)
				console.log(e)
			})
	})

	const { setTheme } = useTheme()

	return (
		<ToggleGroup type="single" size="lg" variant="outline" value={modeLuminosite} onValueChange={(value) => {
			if (value) setModeLuminosite(value);
		}}  className="h-12 ">

			<ToggleGroupItem onClick={() => changeMode("light")} value="light" aria-label="Toggle bold">
				<Sun size="40" className="" />
			</ToggleGroupItem>
			<ToggleGroupItem onClick={() => changeMode("dark")} value="dark" aria-label="Toggle bold">
				<MoonIcon className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem onClick={() => changeMode("system")} value="system" aria-label="Toggle bold">
				<Cpu className="h-4 w-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	)
}
export default ChoixLuminosite