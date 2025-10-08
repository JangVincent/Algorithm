#include <iostream>
#include <vector>
#include <string>

using namespace std;
int main() {

  short cc;
  cin >> cc;

  vector<string> cmds;

  for(short i=1; i<=cc; i++) {
    string cmd;
    cin >> cmd;
    cmds.push_back(cmd);
  }

  int x = 0;
  string sumOp {"X++"};
  string sumOp2 {"++X"};

  for(string cmd : cmds) {
    if(cmd.compare("X++") == 0 || cmd.compare("++X") == 0 ){
      x++;
    } else {
      x--;
    }
  }

  cout << x;

  return 0;
}
