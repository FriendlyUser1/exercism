import 'dart:math';

class ArmstrongNumbers {
  bool isArmstrongNumber(int num) {
    var digits = num.toString().split("");    
    return num == digits.map((digit) => pow(int.parse(digit),digits.length),).reduce((value, element) => value+element);
  }
}
