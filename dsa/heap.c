#include <stdio.h>
#include <stdlib.h>

int parent(int i)
{
  return i / 2;
}

int left(int i)
{
  return i * 2;
}

int right(int i)
{
  return i * 2 + 1;
}

int is_heap(int heap[], int heap_size)
{
  for (int i = heap_size; i > 1; i--) {
    int p = parent(i);

    if (heap[i] > heap[p]) {
      return 0;
    }
  }

  return 1;
}

void max_heapify(int heap[], int heap_size, int i)
{
  int l = left(i);
  int r = right(i);

  int largest;

  if (l <= heap_size && heap[l] > heap[i]) {
    largest = l;
  } else {
    largest = i;
  }

  if (r <= heap_size && heap[r] > heap[largest]) {
    largest = r;
  }

  if (i != largest) {
    int temp = heap[i];
    heap[i] = heap[largest];
    heap[largest] = temp;

    max_heapify(heap, heap_size, largest);
  }

}

void build_max_heap(int heap[], int heap_size) {
  for (int i = heap_size / 2; i >= 1; i--) {
    max_heapify(heap, heap_size, i);
  }
}

void print_heap(int heap[], int heap_size)
{
  for (int i = 1; i <= heap_size; i++) {
    printf("%d  ", heap[i]);
  }
  printf("\n");
}

int main(int argc, char const *argv[])
{
  int heap[] = {0, 1, 2, 3, 4, 5, 65, 30, 99};

  print_heap(heap, sizeof(heap) / sizeof(heap[0]) - 1);

  build_max_heap(heap, sizeof(heap) / sizeof(heap[0]) - 1);

  print_heap(heap, sizeof(heap) / sizeof(heap[0]) - 1);

  printf("%d\n", is_heap(heap, sizeof(heap) / sizeof(heap[0]) - 1));

  return 0;
}
