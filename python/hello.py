def add(arr:list, last_index):
    if last_index < 0:
        return 0

    res = 0
    res += arr[last_index] + add(arr, last_index - 1)

    return res


arr = [1, 2, 3]

print(add(arr, len(arr) - 1))
