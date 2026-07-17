export function isPangram(s: string): boolean {
	return (
		(
			s
				.trim()
				.toLowerCase()
				.match(/([a-z])(?!.*\1)/g) ?? []
		).length === 26
	);
}
