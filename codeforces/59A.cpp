#include <iostream>
#include <string>

using namespace std;

int main() {

  string s;
  cin >> s;

  short lc = 0;
  short uc = 0;
  for (int i : s) {
    if (i < 97) {
      uc++;
    } else {
      lc++;
    }
  }

  for (int j = 0; j < s.length(); j++) {
    if (lc > uc && s[j] < 97) {
      s[j] += 32;
    } else if (lc < uc && s[j] >= 97) {
      s[j] -= 32;
    } else if (lc == uc && s[j] < 97) {
      s[j] += 32;
    }
  }

  cout << s;

  return 0;
}
