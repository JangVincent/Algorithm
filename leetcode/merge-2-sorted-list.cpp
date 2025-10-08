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
  if (cur == nullptr) {
    cout << "NULLPTR" << endl;
    return;
  }

  while (cur) {
    cout << cur->val;
    if (cur->next) cout << " -> ";
    cur = cur->next;
  }
  cout << endl;
}

class Solution {
 public:
  /*
  ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {

    ListNode* curA = list1;
    ListNode* curB = list2;
    ListNode* ans = nullptr;
    ListNode* tailAns = ans;

    if (curA == nullptr && curB == nullptr) {
      return nullptr;
    } else if (curA == nullptr && curB != nullptr) {
      ans = new ListNode(curB->val);
      curB = curB->next;
      tailAns = ans;
    } else if (curA != nullptr && curB == nullptr) {
      ans = new ListNode(curA->val);
      curA = curA->next;
      tailAns = ans;
    } else {
      int a = curA->val;
      int b = curB->val;
      if (a < b) {
        ans = new ListNode(a);
        curA = curA->next;
        tailAns = ans->next;
      } else if (b < a) {
        ans = new ListNode(b);
        curB = curB->next;
        tailAns = ans->next;
      } else {
        ans = new ListNode(a);
        curA = curA->next;

        ans->next = new ListNode(b);
        curB = curB->next;
        tailAns = ans->next;
      }
    }

    while (true) {
      int a = curA == nullptr ? -1000 : curA->val;
      int b = curB == nullptr ? -1000 : curB->val;

      cout << a << ',' << b << endl;

      if (a == -1000 && b == -1000) {
        break;
      }

      if (a > b) {
        if (b == -1000) {
          tailAns->next = new ListNode(a);
          tailAns = tailAns->next;

          curA = curA->next;
          continue;
        }
        tailAns->next = new ListNode(b);
        tailAns = tailAns->next;

        curB = curB->next;
      } else if (b > a) {
        if (a == -1000) {
          tailAns->next = new ListNode(b);
          tailAns = tailAns->next;

          curB = curB->next;
          continue;
        };

        tailAns->next = new ListNode(a);
        tailAns = tailAns->next;

        curA = curA->next;
      } else {
        if (a == -1000) continue;
        tailAns->next = new ListNode(a);
        tailAns = tailAns->next;

        if (b == -1000) continue;
        tailAns->next = new ListNode(a);
        tailAns = tailAns->next;

        curA = curA->next;
        curB = curB->next;
      }
    }

    return ans;
  }
    */

  ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
    ListNode dummy;
    ListNode* tail = &dummy;

    while (list1 && list2) {
      if (list1->val < list2->val) {
        tail->next = list1;
        list1 = list1->next;
      } else {
        tail->next = list2;
        list2 = list2->next;
      }
      tail = tail->next;
    }

    tail->next = list1 ? list1 : list2;

    return dummy.next;
  }
};

int main() {
  vector<int> numsA = {2};
  ListNode* a = buildList(numsA);

  vector<int> numsB = {1};
  ListNode* b = buildList(numsB);

  Solution sol = {};
  ListNode* ans = sol.mergeTwoLists(a, b);
  printList(ans);

  return 0;
}
