raindrops <- function(number) {
  res <- ""
  i <- 1
  ps = list("Pling","Plang","Plong")
  for (f in list(3, 5, 7)) {
    if (number %% f == 0) {
      res <- paste(res,as.character(ps[i]),sep="")
    }
    i <- i+1
  }
  if (res == "") {
    res = as.character(number)   
  }
  res
}
