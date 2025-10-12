#include <iostream>
#include <string>

using namespace std;

int main() {

  string s;
  cin >> s;

  string k = "hello";

  for (int i = 0; i < s.size() && k.length() > 0; i++) {
    if (k[0] == s[i]) {
      k.erase(0, 1);
    }
  }

  if (k.length() == 0) {
    cout << "YES";
  } else {
    cout << "NO";
  }

  return 0;
}
