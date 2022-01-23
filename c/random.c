#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(int argc, char const *argv[]) {
  srand(time(NULL));

  int n = rand() % 10 + 1;
  int guess;

  printf("Enter a number between 0 and 10\n");

  while (1) {
    printf("Enter a number: ");
    scanf("%d", &guess);

    if (n == guess) {
      printf("You have won the game!\n");
      break;
    } else {
      printf("Incorrect number!! Please try again!\n");
    }
  }

  return 0;
}
