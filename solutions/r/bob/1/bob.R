bob <- function(i) {
  i <- trimws(i)
  if (i == "") return("Fine. Be that way!")
  n <- nchar(i)
  q <- substr(i, n, n) == '?'
  
  if (length (grep ("[A-Z]", i, value = TRUE)) > 0 &&
      length (grep ("[a-z]", i, value = TRUE)) == 0) {
    if (q) {
      return("Calm down, I know what I'm doing!")
    }
    return("Whoa, chill out!")
  }
  
  if (q) return("Sure.")
  
  "Whatever."
}

