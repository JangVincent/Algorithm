#include <iostream>
#include <vector>

using namespace std;

int main() {
  short wc;
  cin >> wc;

  vector<string> strs;
  strs.reserve(wc);

  for (short i = 1; i <= wc; i++) {
    string str;
    cin >> str;
    strs.push_back(str);
  }

  for (string t : strs) {
    if (t.length() <= 10) {
      cout << t << endl;
    } else {
      cout << t[0] << (t.length() - 2) << t[t.length() - 1] << endl;
    }
  }

  return 0;
}
