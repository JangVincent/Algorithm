#include <iostream>

using namespace std;

int main() {

  int m[5][5];

  int startI, startJ;

  for(short i = 0; i<=4; i++) {
    for(short j = 0; j<=4; j++) {
      cin >> m[i][j];

      if(m[i][j] == 1) {
        startI = i + 1;
        startJ = j + 1;
      }
    }
  }


  short move = abs(3-startI) + abs(3-startJ);

  cout << move;

  return 0;
}
