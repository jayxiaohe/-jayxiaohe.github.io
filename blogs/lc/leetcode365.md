---
title: 'LeetCode-365 水壶问题'
date: 2020-03-21 22:26:26
tags: [BFS,数学]
categories: [算法]
publish: true
hideInList: false
feature: /post-images/leetcode365.jpg
isTop: false
---
## 💬 描述
有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？
如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。
你允许：
- 装满任意一个水壶
- 清空任意一个水壶
- 从一个水壶向另外一个水壶倒水，直到装满或者倒空

**示例 1:**
```
输入: x = 3, y = 5, z = 4
输出: True
```
**示例 2:**
```
输入: x = 2, y = 6, z = 5
输出: False
```
<br/>

## 📋 代码1-BFS1.考虑每个水壶
```java
import java.util.*;
class Solution {
    public boolean canMeasureWater(int x, int y, int z) {
        // 存储所有可能的状态
        Stack<int[]> stack = new Stack<>();
        // 存储处理过的状态
        Set<Map.Entry<Integer, Integer>> seenSet = new HashSet<>();  
        // 初始状态：两个水壶都没水
        stack.push(new int[]{0,0});
        while(!stack.isEmpty()) {
            int[] arr = stack.pop();
            // 如果当前的状态，可以构造出z升水，则返回true。
            if((arr[0] == z) || (arr[1] == z) || (arr[0]+arr[1] == z))
                return true;
            // 否则，以当前这种状态进行格式转化，在下面放到已经处理过的集合内
            Map.Entry<Integer,Integer> currEntry = new AbstractMap.SimpleEntry<>(arr[0], arr[1]);
             // 如果之前处理过这个状态，跳过
            if(seenSet.contains(currEntry)) continue;
            // 否则，把处理过的这个状态加入到已经处理过的集合内
            seenSet.add(currEntry);  
            // 进行操作
            stack.add(new int[]{0, arr[1]});  // 倒空x
            stack.add(new int[]{arr[0], 0});  // 倒空y
            stack.add(new int[]{x, arr[1]});  // 加满x
            stack.add(new int[]{arr[0],y});   // 加满y 
            // x往y中倒水。如果不会倒满，x空，y是当前两桶水之和
            if(arr[0] + arr[1] < y) stack.add(new int[]{0, arr[0]+arr[1]});
            // 如果会倒满，x中会有剩余，y满
            else stack.add(new int[]{arr[0]+arr[1]-y, y});  
            // y往x中倒水。如果不会倒满，y空，x是当前两桶水之和
            if(arr[0] + arr[1] < x) stack.add(new int[]{arr[0]+arr[1], 0});
            // 如果会倒满，y中会有剩余，x满
            else stack.add(new int[]{x, arr[0]+arr[1]-x});
        }
        // 如果所有状态都执行了还是没得到z，则返回false。
        return false;
    }
}
```
<br/>

## 📋 代码2-BFS2.只考虑水的总量，不关心它在哪个水壶
```java
import java.util.*;
class Solution {
    public boolean canMeasureWater_BFS(int x, int y, int z) {
        if (z < 0 || z > x + y) {
            return false;
        }
        Set<Integer> set = new HashSet<>();
        // 存储所有可能
        Queue<Integer> q = new LinkedList<>();
        // 初始总水量，0。
        q.offer(0);
        while (!q.isEmpty()) {
            int n = q.poll();
            // 如果当前总水量+x后，水壶能装下，且之前没装过（当前总水量+x）这么多的水。
            //则需要考虑这种场景。把n+x放入队列q中。
            if (n + x <= x + y && set.add(n + x)) {
                q.offer(n + x);
            }
            // 如果当前总水量+y后，水壶能装下，且之前没装过（当前总水量+x）这么多的水。
            //则需要考虑这种场景。把n+y放入队列q中。
            if (n + y <= x + y && set.add(n + y)) {
                q.offer(n + y);
            }
            //如果当前水量可以减去x，且减去x后的水量之前没装过，则执行。
            if (n - x >= 0 && set.add(n - x)) {
                q.offer(n - x);
            }
            //如果当前水量可以减去y，且减去x后的水量之前没装过，则执行。
            if (n - y >= 0 && set.add(n - y)) {
                q.offer(n - y);
            }
            // 如果装过了z升水，说明可以。返回true。
            if (set.contains(z)) {
                return true;
            }
        }
        // 代码走到这里说明不可能拼出z升水。返回false。
        return false;
    }
}
```
**通过执行 set.add() 来进行状态处理，以及通过判断它的返回值，来判断之前是否处理过这种状态。**
<br/>

## 📋 代码3-最大公约数（执行最快）
**需要判断z是否为x,y最大公约数的倍数。此时为题转化为了求解最大公约数，而该问题可以使用gcd算法（辗转相除法）。**
```java
class Solution {
    public boolean canMeasureWater(int x, int y, int z) {
        if(x == 0 && y == 0) return z == 0;
        return z == 0 || (z % gcd(x,y) == 0 && x + y >= z);
    }
    
    static int gcd(int x,int y){
        if(y == 0) return x;
        int r = x % y;
        return gcd(y,r);
    }
}
```
<br/>

## 💡 思路
已经写在上方代码注释，及代码前后加粗的段落中了。个人感觉是比较重要的算法题。需要记住。

<br/>

<center><a href="https://leetcode-cn.com/problems/water-and-jug-problem" class="LinkCard" target="_blank">LeetCode-365</a></center>
<br/>