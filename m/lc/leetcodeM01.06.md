---
title: 'LeetCode-面试题01.06.字符串压缩'
date: 2020-03-16 23:18:56
tags: [双指针]
categories: [算法]
publish: true
hideInList: false
feature: /post-images/leetcodeM01.06.png
isTop: false
---
## 💬 描述
字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。
**示例1:**
```
输入："aabcccccaaa"
输出："a2b1c5a3"
```
**示例2:**
```
输入："abbccd"
输出："abbccd"
解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
```
**提示：**
1.字符串长度在[0, 50000]范围内。


## 📋 代码
```java
class Solution {
    public String compressString(String S) {
        // 特殊情况处理。null好理解。
        // <=2是因为，压缩后的长度至少也是2。因此如果小于2就不必压缩
		if (S == null || S.length() <= 2) return S;
		// 用sb接收并返回结果，节省时间和空间。
		StringBuilder sb = new StringBuilder();
		int i = 0, j = 0;
        // 转成数组，访问下标能快一点。变量n代替长度同理。
		char[] arr = S.toCharArray();
		int n = arr.length;
		
        // 循环结束条件为，j 走到最后一个元素处。
		while (j < n) {
            // 如果 j 和 i 处的字符相同，则 j右移，j最多可以移到数组的最后一个元素处。
            // 每次重新进入外层的while时，i 和 j 总是想等的。下方的while也总是成立的。
			while (j < n && arr[j] == arr[i]) {
				j++;
			}
            // 走到这里说明 j 处的字符和 i 处的字符不同，或者 j 走到了数组最后一个元素处。
            // 先拼 i 处的字符，再拼(j-i)这个数字即可完成 i 处这个字符的压缩。
            // 令 i = j，即开始考察 j 处的元素。之后进入下一个循环。
			sb.append(arr[i]).append((j-i));
			i = j;
		}
        // 判断长度。谁短返回谁。
		return sb.length() < S.length() ? sb.toString():S;
    }
}
```
<br/>

## 💡 思路
参考代码注释。利用双指针来完成此题。
感觉难点在于循环条件结束的判定上。一开始写的代码遇到了 下标越界、漏掉最后一个元素的情况。debug几次，再完善下代码就ok。

<br/>

<center><a href="https://leetcode-cn.com/problems/compress-string-lcci/" class="LinkCard" target="_blank">LeetCode-面试题 01.06</a></center>
<br/>