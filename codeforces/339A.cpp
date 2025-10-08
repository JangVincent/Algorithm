#include <iostream>
#include <set>
#include <string>
#include <vector>

using namespace std;

int main() {
  string eq;
  cin >> eq;

  vector<string> numberString;

  string subStr = "";
  for (int i = 0; i <= eq.length(); i++) {
    if (eq[i] != '+' && eq[i] != '\0') {
      subStr += eq[i];
    } else {
      numberString.push_back(subStr);
      subStr = "";
    }
  }

  multiset<int> ms;
  for (string str : numberString) {
    ms.insert(stoi(str));
  }

  int i = 0;
  for (int number : ms) {
    if (i == 0)
      cout << number;
    else {
      cout << '+' << number;
    }
    i++;
  }

  return 0;
}
