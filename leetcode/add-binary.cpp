#include <iostream>

using namespace std;

class Solution {
 public:
  string addBinary(string& a, string& b) {
    string sum{""};

    int i = a.length() - 1;
    int j = b.length() - 1;
    short c = 0;

    while (i >= 0 || j >= 0 || c == 1) {
      int targetA = (i >= 0) ? a[i] - '0' : 0;
      int targetB = (j >= 0) ? b[j] - '0' : 0;

      int currentSum = targetA + targetB + c;
      sum = to_string(currentSum % 2) + sum;
      c = currentSum / 2;

      i--;
      j--;
    }

    return sum;
  };
};

int main() {
  string a = "1010";
  string b = "1011";

  Solution sol = {};
  string result = sol.addBinary(a, b);
  cout << result;
}
