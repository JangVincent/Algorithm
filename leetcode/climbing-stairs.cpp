#include <iostream>

using namespace std;

class Solution {
 public:
  int climbStairs(int n) {
    if (n <= 2) return n;
    long long a = 1, b = 2;

    for (int i = 3; i <= n; i++) {
      long long temp = a + b;
      a = b;
      b = temp;
    }

    return b;
  }
};

int main() {
  Solution sol = {};
  cout << 45 << " : " << sol.climbStairs(45) << endl;
}
