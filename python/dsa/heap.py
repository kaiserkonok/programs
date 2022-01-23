left = lambda i: i * 2
right = lambda i: i * 2 + 1
parent = lambda i : i // 2

def is_heap(heap):
    for i in range(2, len(heap)):
        p = parent(i)
        if heap[i] > heap[p]:
            return False

    return True

def max_heapify(heap, i):
    print("hello world")


heap = [0, 2, 3, 1, 4, 5]

print(is_heap(heap))
