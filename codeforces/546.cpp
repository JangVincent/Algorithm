#include <iostream>

using namespace std;

int main() {

  int k, n, w;

  cin >> k >> n >> w;

  long long s = k * ((w * (w + 1)) / 2);

  if (n > s) {
    cout << 0;
  } else {
    cout << abs(n - s);
  }

  return 0;
}
