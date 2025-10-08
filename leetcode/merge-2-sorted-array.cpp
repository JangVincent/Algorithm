#include <iostream>

using namespace std;

class Solution {
 public:
  void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    vector<int> temp{};
    nums1.reserve(m + n);

    int i = 0, j = 0;
    while (i < m && j < n) {
      if (nums1[i] < nums2[j]) {
        temp.push_back(nums1[i]);
        i++;
      } else {
        temp.push_back(nums2[j]);
        j++;
      }
    }

    while (i < m) temp.push_back(nums1[i++]);
    while (j < n) temp.push_back(nums2[j++]);

    nums1 = move(temp);
  }
};

int main() {
  vector<int> numsA = {1};
  vector<int> numsB = {1};
  Solution sol = {};
  sol.merge(numsA, numsA.size(), numsB, numsB.size());

  for (int i = 0; i < numsA.size(); i++) {
    cout << numsA[i] << endl;
  }

  return 0;
}
