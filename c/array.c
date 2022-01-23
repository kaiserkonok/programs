#include <stdio.h>
#include <stdlib.h>


int main()
{

  int arr[4] = {1, 2, 3};

  size_t n = sizeof(arr) / sizeof(arr[0]);

  arr[3] = 4;

  for (int i = 0; i < n; i++) {
    printf("%d  ", arr[i]);
  }

  printf("\n");

  return 0;
}
