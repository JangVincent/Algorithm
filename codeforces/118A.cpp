#include <iostream>
#include <string>

using namespace std;

int main() {

  string s;
  cin >> s;

  string a = "";
  for (int i = 0; i < s.length(); i++) {
    char c = s[i];
    c = tolower(c);

    if (c == 'a' || c == 'o' || c == 'y' || c == 'e' || c == 'u' || c == 'i') {
      continue;
    } else {
      a.push_back('.');
      a.push_back(c);
    }
  }

  cout << a;

  return 0;
}
