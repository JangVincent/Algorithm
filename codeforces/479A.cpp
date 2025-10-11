#include <iostream>
#include <vector>

using namespace std;

int main() {

  short x, y, z;
  cin >> x >> y >> z;

  int s0, s1, s2, s3, s4, s5;
  s0 = x + y + z;
  s1 = x * y * z;
  s2 = (x + y) * z;
  s3 = x * (y + z);
  s4 = x + y * z;
  s5 = x * y + z;

  int max = 0;
  vector<int> v = {s0, s1, s2, s3, s4, s5};

  for (short i = 0; i < v.size(); i++) {
    max = max < v[i] ? v[i] : max;
  }

  cout << max;

  return 0;
}
