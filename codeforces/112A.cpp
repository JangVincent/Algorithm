#include <iostream>
#include <string>

using namespace std;

int main() {

  string str1, str2;

  cin >> str1 >> str2;

  short l = str1.length();


  short result = 0;
  for(short i = 0; i < l; i++) {
    if(tolower(str1[i]) == tolower(str2[i])) continue; 

    if(tolower(str1[i]) < tolower(str2[i])) { result--; break; }
    else { result++; break; }
  }
  
  cout << result;

  return 0;
}

