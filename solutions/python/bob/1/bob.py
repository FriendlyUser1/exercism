import re


def response(hey_bob):
    hey_bob = hey_bob.strip()

    if (hey_bob == ""):
        return "Fine. Be that way!"

    q = hey_bob[-1] == "?"
    s = hey_bob == hey_bob.upper()

    if (re.search("[A-z]", hey_bob)):
        if (s and q):
            return "Calm down, I know what I'm doing!"

        if (s):
            return "Whoa, chill out!"

    if (q):
        return "Sure."

    return "Whatever."
