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
    vector<vector<int>> ans{};
    ans.push_back(vector<int>{1});
    if (numRows == 1) {
      return ans;
    }

    ans.push_back(vector<int>{1, 1});
    if (numRows == 2) {
      return ans;
    }

    for (int l = 3; l <= numRows; l++) {
      vector<int> before = ans[l - 2];
      vector<int> current = vector<int>{};

      current.push_back(1);

      for (int e = 0; e < before.size() - 1; e++) {
        current.push_back(before[e] + before[e + 1]);
      }
      current.push_back(1);

      ans.push_back(current);
    }

    return ans;
  }
};

int main() {

  Solution sol{};

  vector<vector<int>> v = sol.generate(30);

  print2D_bracketed(v);

  return 0;
}
