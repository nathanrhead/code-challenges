package hacker-rank.30-days-of-code.day-14-scope;

import java.util.*;
import java.io.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

class Solution {

  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt();
      int[] a = new int[n];
      for (int i = 0; i < n; i++) {
          a[i] = sc.nextInt();
      }
      sc.close();

      Difference difference = new Difference(a);

      difference.computeDifference();

      System.out.print(difference.maximumDifference);
  }
}
