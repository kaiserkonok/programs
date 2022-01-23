class Node:
    def __init__(self, value=0, next=None):
        self.val = value
        self.next = next

def append(node, item):
    new_node = Node(item)
    if node is None:
        node = new_node
        return node

    current_node = node

    while current_node.next is not None:
        current_node = current_node.next

    current_node.next = new_node

    return node

def addTwoNumbers(l1, l2):
    l1_list = []
    l2_list = []

    current_node = l1

    while current_node is not None:
        l1_list.append(current_node.val)
        current_node = current_node.next

    current_node = l2

    while current_node is not None:
        l2_list.append(current_node.val)
        current_node = current_node.next

    l1_value = 0
    l2_value = 0

    for l in l1_list:
        l1_value = l1_value * 10 + l

    for l in l2_list:
        l2_value = l2_value * 10 + l

    addition = l1_value + l2_value

    node = None

    for value in reversed(str(addition)):
        node = append(node, int(value))

    return node

l1 = Node(9)
l1 = append(l1, 9)
l1 = append(l1, 9)
l1 = append(l1, 9)
l1 = append(l1, 9)
l1 = append(l1, 9)

l2 = Node(9)
l2 = append(l2, 9)
l2 = append(l2, 9)
l2 = append(l2, 9)

result = addTwoNumbers(l1, l2)

while result is not None:
    print(result.val)
    result = result.next
