#include <iostream>

using namespace std;

int main() {

  int n, m;
  cin >> n >> m;

  int minSteps = n / 2 + ((n % 2 > 0) ? 1 : 0);
  int maxSteps = n;

  int cnt = 1;
  int ans = -1;
  while (cnt * m <= maxSteps) {
    if (cnt * m >= minSteps && cnt * m <= maxSteps) {
      ans = cnt * m;
      break;
    }

    cnt++;
  }

  cout << ans;

  return 0;
}
