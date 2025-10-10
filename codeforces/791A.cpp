#include <iostream>

using namespace std;

int main() {

  unsigned int limak, bob;
  cin >> limak >> bob;

  int year = 0;
  while (limak <= bob) {
    limak *= 3;
    bob *= 2;
    year++;
  }

  cout << year;

  return 0;
}
