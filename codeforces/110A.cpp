#include <iostream>
#include <string>

using namespace std;

int main() {
  string str;
  cin >> str;

  long long cnt = 0;
  for (char c : str) {
    if (c == '4' || c == '7') {
      cnt++;
    }
  }

  if (cnt == 4 | cnt == 7) {
    cout << "YES";
  } else {
    cout << "NO";
  }

  return 0;
}
