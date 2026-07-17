import 'dart:math';

class DifferenceOfSquares {
  int squareOfSum(int n) {
    int total = 0;
    for (var i = 1; i <= n; i++) {
      total += i;
    }
    return pow(total, 2).toInt();
  }

  int sumOfSquares(int n) {
    int total = 0;
    for (var i = 1; i <= n; i++) {
      total += pow(i, 2).toInt();
    }
    return total;
  }

  int differenceOfSquares(int n) {
    return squareOfSum(n) - sumOfSquares(n);
  }
}
