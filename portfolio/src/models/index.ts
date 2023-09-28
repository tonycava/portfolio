export type AnimationScript = {
	start: number;
	end: number;
	do: (delta: number) => void
}