export function isPangram(s: string): boolean {
	return new Set(s.trim().toLowerCase().replace(/[^a-z]/g, "")).size === 26;
}
