#include <iostream>
#include <vector>

using namespace std;

int main() {

  int n,k;
  vector<short> scores;

  cin >> n >> k;

  scores.reserve(n);

  for(short i = 1; i<=n; i++) {
    short score;
    cin >> score;
    scores.push_back(score);
  }

  short base = scores[k-1];
  int nextRound = 0;
  for(short score : scores) {
    if(score > 0 && score >= base) {
      nextRound++;
    }
  }

  cout << nextRound;

  return 0;
}
