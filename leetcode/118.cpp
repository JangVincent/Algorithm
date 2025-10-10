#include <iostream>
#include <vector>

using namespace std;

template <class T> void print2D_bracketed(const vector<vector<T>> &a) {
  cout << "[\n";
  for (const auto &row : a) {
    cout << "  [";
    for (size_t j = 0; j < row.size(); ++j) {
      if (j)
        cout << ", ";
      cout << row[j];
    }
    cout << "]";
    cout << '\n';
  }
  cout << "]\n";
}

class Solution {
public:
  vector<vector<int>> generate(int numRows) {
    vector<vector<int>> ans;
    if (numRows == 1) {
      ans.push_back(vector<int>{1});
    }

    if (numRows == 2) {
      ans.push_back(vector<int>{1});
      ans.push_back(vector<int>{1, 1});
    }

    // TODO

    return ans;
  }
};

int main() {

  Solution sol{};

  vector<vector<int>> v = sol.generate(1);

  print2D_bracketed(v);

  return 0;
}
