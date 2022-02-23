---
title: 'LeetCode-234 回文链表'
date: 2020-02-20 20:23:58
tags: [链表]
categories: [算法]
publish: true
hideInList: false
feature: /post-images/leetcode234.png
isTop: false
---
## 🔗 链接
[LeetCode-234](https://leetcode-cn.com/problems/palindrome-linked-list/)
该题和 [面试题 02.06](https://leetcode-cn.com/problems/palindrome-linked-list-lcci/) 一样

<br/>

## 📋 代码
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;
        ListNode pre = head;
        ListNode prepre = null;
        while(fast != null && fast.next != null) {
            // pre在slow左侧。
            pre = slow;
            // slow/fast分别代表慢/快指针。
            slow = slow.next;
            fast = fast.next.next;
            // pre指向左边。
            pre.next = prepre;
            // prepre也跟着右移。
            prepre = pre;
        }
        // 调整slow的位置。
        if (fast != null) slow = slow.next;
        while(pre != null && slow != null) {
            if (pre.val != slow.val)
                return false;
            pre = pre.next;
            slow = slow.next;
        }
        return true;
    }
}
```
<br/>

## 💡 思路
详见代码注释。其中，第一个while结束后，有两种情况：
- 链表节点为奇数个。如下图。此时，fast指向最后一个节点，不为null。还需要调整slow的位置。把slow指向节点4。因为奇数个节点，中间的节点3不会影响回文属性，所以无需关注它，直接把slow移到节点4。
![奇数个节点的链表](https://iyes.life/post-images/1582205737501.png)
移动后，pre和slow分别指向2和4。如下图：
![移动后](https://iyes.life/post-images/1582205868614.png)
- 链表节点为偶数个。如下图。此时，fast指向null。无需调整slow的位置。
![偶数个节点的链表](https://iyes.life/post-images/1582204878105.png)
之后的while就简单了。依次比较pre和slow节点的值。如果不等，返回false；否则，移动pre和slow，直到全部比较完。返回true。

<br/>

## 🎃 缺点
虽然题目没有明确要求不能改变链表，但一般来说仍应在返回结果之前恢复链表。
另附上官方题解
```java
class Solution {
    public boolean isPalindrome(ListNode head) {
        if (head == null) return true;
        // Find the end of first half and reverse second half.
        ListNode firstHalfEnd = endOfFirstHalf(head);
        ListNode secondHalfStart = reverseList(firstHalfEnd.next);
        // Check whether or not there is a palindrome.
        ListNode p1 = head;
        ListNode p2 = secondHalfStart;
        boolean result = true;
        while (result && p2 != null) {
            if (p1.val != p2.val) result = false;
            p1 = p1.next;
            p2 = p2.next;
        }        
        // Restore the list and return the result.
        firstHalfEnd.next = reverseList(secondHalfStart);
        return result;
    }

    private ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }

    private ListNode endOfFirstHalf(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;
        while (fast.next != null && fast.next.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }
}
```

<br/>

<center>End</center>

