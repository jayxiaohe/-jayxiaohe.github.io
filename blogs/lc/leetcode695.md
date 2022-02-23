---
title: 'LeetCode-695 岛屿的最大面积'
date: 2020-03-15 19:40:15
tags: [DFS]
categories: [算法]
publish: true
hideInList: false
feature: /post-images/leetcode695.png
isTop: false
---
## 💬 描述
给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。
找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)
**示例 1:**
```
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
```
对于上面这个给定矩阵应返回 6。注意答案不应该是11，因为岛屿只能包含水平或垂直的四个方向的‘1’。

**示例 2:**
```
[[0,0,0,0,0,0,0,0]]
```
对于上面这个给定的矩阵, 返回 0。

**注意:** 给定的矩阵grid 的长度和宽度都不超过 50。

## 📋 代码
```java
public class Solution {
	int area = 0;
	int tmp = 0;
	int xx, yy;
	int m, n;
    boolean[][] visited;
	int[] dx = {1,-1,0,0};
	int[] dy = {0,0,1,-1};
	
	public int maxAreaOfIsland(int[][] grid) {
		if (grid == null || grid.length == 0 
				|| grid[0].length == 0) {
			return 0;
		}
		
		m = grid.length;
		n = grid[0].length;
		visited = new boolean[m][n];
		
		for (int i = 0; i < m; i++) {
			for (int j = 0; j < n; j++) {
				if (grid[i][j] == 1 && !visited[i][j]) {
					tmp = 0;
					dfs(grid, i, j);
					area = Math.max(tmp, area);
				}
			}
		}
		return area;
    }
	
	private void dfs(int[][] grid, int i, int j) {
		visited[i][j] = true;
		tmp++;
		for (int d = 0; d < 4; d++) {
			xx = i + dx[d];
			yy = j + dy[d];
			if (xx >=0 && xx < m && yy >=0 
					&& yy < n && grid[xx][yy] == 1 && !visited[xx][yy]) {
				dfs(grid, xx, yy);
			}
		}
	}
}
```
<br/>

## 💡 思路
经典的DFS题。思路没啥可说的，有几个细节：
- 可以复用的变量在方法外声明，可节约一点内存。
- 使用dx、dy数组，可使代码更简洁，在dfs方法中不用再写4个if。
- dfs中进行递归前的条件。除了注意xx、yy和是否访问过以外，还要注意 grid[xx][yy] == 1 的判断。第一次写的时候漏了这个条件😥

> 官方题解中还有一个BFS的解法。但个人感觉没必要看。对这道题来说，掌握了DFS就ok了。

<br/>

<center><a href="https://leetcode-cn.com/problems/max-area-of-island/" class="LinkCard" target="_blank">LeetCode-695</a></center>
<br/>