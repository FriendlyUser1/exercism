parse_phone_number <- function(number_string) {
  ns <- unlist(regmatches(number_string, gregexpr('[0-9]', number_string)))
  
  if (length(ns) == 10) {
    for (i in list(1,4)) {
      if (as.numeric(ns[i]) < 2) {
        return(NULL)
      }
    }
    
    return(paste(ns,collapse=""))
  }
  
  if (length(ns) == 11 & ns[1] == '1') {
    ns <- ns[-1]
    return(paste(ns,collapse=""))
  }
  
  return(NULL)
}

regmatches("2234567890", gregexpr('\\(?[0-9,.]+', "2234567890"))
