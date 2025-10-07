#include <iostream>

using namespace std;

struct ListNode {
  int val;
  ListNode* next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode* next) : val(x), next(next) {}
};

ListNode* buildList(const vector<int>& nums) {
  if (nums.empty()) return nullptr;

  ListNode* head = new ListNode(nums[0]);
  ListNode* cur = head;

  for (size_t i = 1; i < nums.size(); ++i) {
    cur->next = new ListNode(nums[i]);
    cur = cur->next;
  }

  return head;
}

void printList(ListNode* head) {
  ListNode* cur = head;
  while (cur) {
    cout << cur->val;
    if (cur->next) cout << " -> ";
    cur = cur->next;
  }
  cout << endl;
}

class Solution {
 public:
  ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
    ListNode* ans = (list1->val <= list2->val) ? new ListNode(list1->val)
                                               : new ListNode(list2->val);

    return ans;
  }
};

int main() {
  vector<int> numsA = {1, 2, 4};
  ListNode* a = buildList(numsA);

  vector<int> numsB = {1, 3, 4};
  ListNode* b = buildList(numsB);

  printList(a);
  printList(b);

  Solution sol = {};
  ListNode* ans = sol.mergeTwoLists(a, b);

  return 0;
}
