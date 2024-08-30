# 視覺化
- [網站](https://www.cs.usfca.edu/~galles/visualization/HeapSort.html)


# 複雜度
## 時間複雜度
- 最壞情況：O(n log n)
- 平均情況：O(n log n)
- 最佳情況：O(n log n)
## 空間複雜度
- O(1) （因為是原地排序）


# 優缺點
## 優點
- 有穩定的時間複雜度 O(n log n)，且不需要額外的空間
## 缺點
- 它不是穩定排序（即相同鍵值的元素在排序後可能改變順序）
- 較差的 CPU 快取：heap 不連續存取位址的特性，不利於 CPU 快取。
  - Heap sort 由於不連續存取記憶體的特性，在處理大規模數據或者快取資源有限的情況下，其效能會較差。而像 quick sort 和 merge sort 這類演算法，則因為更好地利用了資料局部性和快取，通常在這些情境下能夠提供更佳的效能。
## 適用情境
- Heap sort 在需要保證最壞情況時間複雜度、不希望使用額外記憶體、數據分佈不可預測或與優先佇列管理結合的情況下具有優勢。儘管在快取效能和平均排序時間上，它不如 quick sort 和 merge sort，但在特定情境下，heap sort 依然是一個值得考慮的選擇。


# Heap Sort 的主要步驟
1. 將陣列轉換為 max heap，使得最大值位於根節點
2. 將根節點（即最大值）與陣列的最後一個元素交換
3. 將 heap 的範圍縮小一個單位，然後對新的 heap 進行堆積整理（heapify），再次使其成為最大堆積。

以上適用遞增排序；遞減排序的話，只需要將 max heap 改為 min heap，最大值改為最小值
- 遞增排序(小 => 大)用 max-heap
- 遞減排序(大 => 小)用 min-heap


# max heap
- max heap 是一種特殊的 binary tree，它必須滿足以下兩個條件：
  1. Complete Binary Tree：
     - max heap 是 Complete Binary Tree，這意味著
       - 除了最後一層，所有的層都被完全填滿，而且
       - 最後一層的節點必須從左至右依次排列
  2. 堆積性質：
     - 對於 max heap 中的每一個節點，其值都必須大於或等於其子節點的值。  
      換句話說，父節點的值總是大於或等於其左右子節點的值。
- 性質
  1. 根節點的值是最大值
  2. 每個子樹也是 max heap
  3. 給定一個陣列，例如 [1, 2, 3, 4, 5, 6]，可以被轉換為唯一的 Complete Binary Tree
- 應用
  - 最大堆積常用於實現優先隊列（Priority Queue）和堆排序（Heap Sort）。  
    在這些應用中，最大堆積可以高效地提取或刪除最大元素，同時維持堆積的性質。


# 轉換所需的特質
- full binary tree 和 Complete Binary Tree





# 參考資料
- [Rust Algorithm Club 堆積排序 Heapsort](https://rust-algo.club/sorting/heapsort/)