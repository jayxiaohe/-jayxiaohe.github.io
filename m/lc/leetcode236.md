---
title: 'LeetCode-236 二叉树的最近公共祖先'
date: 2020-05-10 18:31:55
tags: [二叉树]
categories: [算法]
publish: true
hideInList: false
feature: 
isTop: false
---
## 💬 描述
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先**）。”
例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]
https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/15/binarytree.png

**示例 1:**
```html
输入: [1,3,5,4,7]
输出: 3
解释: 最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。
```

**示例 2:**
```html
输入: [2,2,2,2,2]
输出: 1
解释: 最长连续递增序列是 [2], 长度为1。
```
**注意**：数组长度不会超过10000。
<br/>

## 💡 思路
遍历数组。ans为最终准备返回的长度值，curLen为当前下标对应的长度。
每次遍历中，如果下一个数比前面的数大，则curLen++，否则代表连续递增中断了，将curLen重置为1。
每次循环的最后，比较ans和curLen，将较大者赋给ans。
循环结束后，返回ans。
<br/>

## 📋 代码

```java
class Solution {
    public int findLengthOfLCIS(int[] nums) {
        if (nums.length <= 1) return nums.length;
        int ans = 1, curLen = 1;
        for (int i = 0; i < nums.length-1; i++) {
            if (nums[i+1] > nums[i]) {
                curLen++;
            } else {
                curLen = 1;
            }
            ans = curLen > ans ? curLen : ans;
        }
        return ans;
    }
}
```

**复杂度：**
时间：O(n)
空间：O(1)
<br/>