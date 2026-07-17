public class Bob {
	public String hey(String msg) {
		msg = msg.trim();

		if (msg.equals(""))
			return "Fine. Be that way!";

		Boolean q = msg.substring(msg.length() - 1).equals("?");
		Boolean s = msg.matches("[^a-z]+");

		if (msg.matches("[^A-z]+")) {
			if (q)
				return "Sure.";
			return "Whatever.";
		}

		if (q && s)
			return "Calm down, I know what I'm doing!";
		if (q)
			return "Sure.";
		if (s)
			return "Whoa, chill out!";

		return "Whatever.";
	}
}