#include <iostream>

using namespace std;

int main() {

  int n, k;
  cin >> n >> k;

  while (k > 0) {
    n = (n % 10 == 0) ? n / 10 : n - 1;
    k--;
  }

  cout << n;

  return 0;
}
