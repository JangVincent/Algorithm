#include <iostream>
#include <vector>

#define YES "YES"
#define NO "NO"

using namespace std;

int main() {

  int n;
  cin >> n;

  vector<vector<int>> vectors;

  for (int i = 1; i <= n; i++) {
    int x, y, z;
    cin >> x >> y >> z;
    vectors.push_back(vector<int>{x, y, z});
  }

  int x = 0, y = 0, z = 0;

  for (int i = 0; i < n; i++) {
    vector<int> v = vectors[i];
    x += v[0];
    y += v[1];
    z += v[2];
  }

  if (x == 0 && y == 0 && z == 0) {
    cout << YES;
  } else {
    cout << NO;
  }

  return 0;
}
