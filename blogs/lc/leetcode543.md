---
title: 'LeetCode-543 二叉树的直径'
date: 2020-03-10 23:16:25
tags: [DFS]
categories: [算法]
publish: true
hideInList: false
feature: /post-images/leetcode543.png
isTop: false
---
## 📋 代码
```java
class Solution {
    int res;
	int leftDepth, rightDepth;
	public int diameterOfBinaryTree(TreeNode root) {
		dfs(root);
		return res;
	}

	private int dfs(TreeNode root) {
		if (root == null)
			return 0;
		leftDepth = dfs(root.left);
		rightDepth = dfs(root.right);
		res = Math.max(res, leftDepth + rightDepth);
		return Math.max(leftDepth, rightDepth) + 1;
	}
}
```
<br/>

## 💡 思路
根据题意，求直径，等效于求路径经过的节点数的最大值减去1。我们可以把某个节点及其左右孩子向下遍历的路径拼接起来得到结果。
上方代码，先传入root。它的左右孩子的深度+1，得到它的深度。而通过root得到的直径，等于它的左右孩子的深度之和。每次计算都把最大深度存入res中。最后，所有的节点都被当做”头“来算了一次。res就是最终的最大值，即二叉树的直径。
总结如下：
1. 当前节点的深度 = 左右孩子的最大深度 + 1
2. 当前节点的直径 = 左右孩子的深度之和
3.叶子节点的深度为1，直径为0。

如下图：
![](https://iyes.life/post-images/1584199442030.png)


4、5的深度为1，直径为0
3的深度为1，直径为0
2的深度为2（4,5的最大深度+1），直径为2（4.5的深度之和）。
1的深度为3（2,3的最大深度+1），直径为3（2,3的深度之和）


<br/>

<center><a href="https://leetcode-cn.com/problems/diameter-of-binary-tree/submissions/" class="LinkCard" target="_blank">LeetCode-543</a></center>
<br/>