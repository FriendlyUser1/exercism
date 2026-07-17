hamming <- function(s1, s2) {
  ns1 <- nchar(s1)
  ns2 <- nchar(s2)
  if (ns1 > ns2 | ns2 > ns1) stop("Mismatched length")
  hd <- 0L
  for (i in 1:ns1) {
    if (substr(s1,i,i) != substr(s2,i,i)) {
      hd <- hd + 1
    }
  }
  return(hd)
}