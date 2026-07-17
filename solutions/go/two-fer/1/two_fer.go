// Package twofer contains a function to share with a name
package twofer

// ShareWith returns a string like one for (given name), one for me
func ShareWith(name string) string {
	friend := name
	if friend == "" {
		friend = "you"
	}

	return "One for " + friend + ", one for me."
}
