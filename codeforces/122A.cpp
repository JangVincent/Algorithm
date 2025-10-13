#include <iostream>

using namespace std;

int main() {
  int n;
  cin >> n;

  int ln[] = {4, 7, 44, 47, 74, 77, 444, 447, 474, 477, 744, 747, 774, 777};

  bool ok = false;
  for (int l : ln) {
    if (n % l == 0) {
      ok = true;
      break;
    }
  }

  cout << (ok ? "YES" : "NO");
  return 0;
}
