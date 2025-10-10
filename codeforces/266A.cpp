#include <iostream>
#include <string>

using namespace std;

int main() {

  short n;
  string s;

  cin >> n >> s;

  char before;
  short cnt = 0;

  for (int i = 0; i < s.size(); i++) {
    if (i > 0) {
      if (before == s[i]) {
        cnt++;
      }
    }
    before = s[i];
  }

  cout << cnt;

  return 0;
}
