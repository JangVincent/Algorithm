#include <iostream>

using namespace std;

class Solution {
 public:
  int mySqrt(int x) {
    if (x < 2) return x;

    int left = 1, right = x / 2;
    int ans = 0;

    while (left <= right) {
      long long mid = (left + right) / 2;
      if (mid * mid <= x) {
        ans = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return ans;
  }
};

int main() {
  Solution sol = {};
  cout << 1510227509 << " : " << sol.mySqrt(1510227509) << endl;
}
