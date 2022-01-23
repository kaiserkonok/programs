#include <stdio.h>


void change (int *n)
{
	*n = 20;
	printf("%d\n", *n);
}

int main () 
{
	int a = 10;
	change(&a);
	printf("%d\n", a);
	return 0;
}
