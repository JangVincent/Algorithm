#include <iostream>
#include <string>
#include <set>

using namespace std;
int main() {

  set<char> s;
  string str;

  cin >> str;

  for(char c : str) {
    s.insert(c);
  }

  cout << (s.size()%2 == 0 ? "CHAT WITH HER!" : "IGNORE HIM!") << endl;


  return 0;
}
