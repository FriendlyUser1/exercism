class Bob {
  String response(String msg) {
    msg = msg.trim();
    if (msg == "") return "Fine. Be that way!";
    bool s = !RegExp("[a-z]").hasMatch(msg);
    bool q = msg.substring(msg.length - 1) == "?";
    if (!RegExp("[A-z]").hasMatch(msg)) {
      if (q)
        return "Sure.";
      else
        return "Whatever.";
    }

    if (s && q) return "Calm down, I know what I'm doing!";
    if (s) return "Whoa, chill out!";
    if (q) return "Sure.";
    return "Whatever.";
  }
}
