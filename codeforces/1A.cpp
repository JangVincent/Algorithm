#include <iostream>

using namespace std;

int main() {

  long long n, m, a;

  cin >> n >> m >> a;

  long long w = n / a + ((n % a == 0) ? 0 : 1);
  long long h = m / a + ((m % a == 0) ? 0 : 1);

  cout << w * h;

  return 0;
}
