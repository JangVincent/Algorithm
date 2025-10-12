#include <iostream>

using namespace std;

int main() {
  short arr[] = {6, 8, 4, 2};
  long long n;
  cin >> n;

  if (n == 0) {
    cout << 1;
    return 0;
  }

  cout << arr[n % 4];

  return 0;
}
