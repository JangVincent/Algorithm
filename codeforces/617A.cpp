#include <iostream>

using namespace std;

int main() {

  int d;
  cin >> d;

  cout << (int)(d / 5) + ((d % 5) > 0 ? 1 : 0);

  return 0;
}
