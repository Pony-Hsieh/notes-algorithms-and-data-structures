# Tree 樹

# 基本知識
- 樹的最根本特徵就是：在樹的結構裡，只有一個root(樹根)，並且不存在cycle。  
  此特徵將衍生出另外兩項等價的性質：
  1. 在樹中若要從 root 尋找特定 node，一定只存在一條路徑 (path)。
  2. 每個 node 只會有一個 parent。
## 專有名詞
- degree
  - 一個 node 擁有的 subtree 的個數
- root
  - 樹中最上層的 node，也是唯一一個其 parent 為 `NULL` 的 node
- leaf
  - 沒有 child/subtree 的 node 稱為 leaf node
- height of node
- height of tree
- depth
- level





- Tree 是一種很特別的 Graph
- 任意兩點之間只有唯一一條路徑
- level 層
  - 深度
- Tree 沒有環 (cycle)
- 一種階層架構的非線性資料結構
- 在資料結構中最廣泛使用的樹狀結構是「二元樹」，二元樹是指樹中的每一個「節點」（Nodes）最多只能擁有 2 個子節點，即分支度小於或等於 2。



## 各種二元樹
### Binary Tree


### Complete Binary Tree
- 範例
  ```
        1
      / \
      2   3
    / \ / 
    4  5 6 
  ```
- 每一層的節點都必須從左到右填滿
- 除了最後一層之外，所有層都必須完全填滿，並且最後一層的節點應該從左到右排列
  - 最後一層的節點可能不完全填滿，但必須從左到右排列。
- 尋找相關 node：  
  假設 index 從 0 起算，以 index(i) 的 node 為例：
  - left child： 2i + 1
  - right child： 2i + 2
  - parent： Math.floor((i-1) / 2)  
    [(i-1) / 2] 再向下取整

### Full Binary Tree
- 範例
  ```
        1
      / \
      2   3
    / \
    4   5
  ```
- 所有節點的子節點數量都應為 0 或 2

1. 二元樹的樹高是 h
2. 且 二元樹的節點數是 2h-1
3. 在一個完全二叉樹中，每個節點要麼是葉子節點，要麼有兩個子節點（左子節點和右子節點）。
每個節點都必須要麼有兩個子節點，要麼沒有子節點（即葉子節點）。因此，所有節點的子節點數量都應為 0 或 2。

### Perfect Binary Tree

### Balanced Binary Tree

### Binary Search Tree (BST)

### AVL Tree



## 其他樹

### Red-Black Tree (RBT)

