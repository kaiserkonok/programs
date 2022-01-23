class Node:
    def __init__(self, item):
        self.data = item
        self.left = None
        self.right = None

def check_left(root):
    largest = root.data
    def helper(node):
        if node.data > largest:
            return False
        if node.left:
            helper(node.left)
        if node.right:
            helper(node.right)

        return True

    return helper(root.left)

def check_right(root):
    largest = root.data
    def helper(node):
        if node.data < largest:
            return False
        if node.left:
            helper(node.left)
        if node.right:
            helper(node.right)

        return True

    return helper(root.right)


def check_binary_search_tree_(root):
    return check_left(root) and check_right(root)


node = Node(3)
n1 = Node(5)
n2 = Node(4)
n3 = Node(20)
n4 = Node(10)

n1.left = n2
n1.right = n3
n3.left = n4

node.left(n1)

print(check_binary_search_tree_(node))
