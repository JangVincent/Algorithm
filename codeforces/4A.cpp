#include <iostream>
using namespace std;

int main() {
  int wm = 0;
  cin >> wm;
  cout << ((wm != 2 && wm % 2 == 0) ? "YES" : "NO");

  return 0;
}
