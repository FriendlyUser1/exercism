// Package weather provides a tool to show the current weather in a city.
package weather

var (
	// CurrentCondition represents the current weather conditions.
	CurrentCondition string
	// CurrentLocation represents a location in Goblinocus to be forecasted.
	CurrentLocation string
)

// Forecast returns a sentence containing the given current condition for the given city.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
