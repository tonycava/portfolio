export type AnimationScript = {
	start: number;
	end: number;
	do: (data: { delta: number, scrollPercent: number }) => void
}