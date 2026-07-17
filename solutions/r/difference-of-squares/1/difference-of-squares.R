difference_of_squares <- function(natural_number) {
  if (natural_number == 0) return(0)
  sq <- 0
  su <- 0
  for (i in 1:natural_number) {
    su <- su + i^2
    sq <- sq + i
  }
  return(sq^2 - su)
}

