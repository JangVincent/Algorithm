#include <iostream>
#include <vector>

using namespace std;

int main() {
  int pc;
  cin >> pc;

  vector<int> v;
  v.reserve(pc * 3);


  for(int i = 1; i<=pc * 3; i++) {
    bool b;
    cin >> b;
    v.push_back((int) b);
  }

  int solved = 0;
  for(int i=0; i<=v.size()-3; i+=3) {
    short sum = v[i] + v[i+1] + v[i+2];

    if(sum >= 2) {
      solved++;
    }
  }

  cout << solved;

  return 0;
}
