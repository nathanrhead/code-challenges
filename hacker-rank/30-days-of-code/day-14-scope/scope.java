// The absolute difference between two integers, a and b, is written as |a - b|. The maximum absolute difference between two integers in a set of positive integers, elements, is the largest absolute difference between any two integers in __elements.

// The Difference class is started for you in the editor. It has a private integer array (elements) for storing N non-negative integers and a public integer (maximumDifference) for storing the maximum absolute difference.

// Task
// Complete the Difference class by writing the following:
  // > A class constructor that takes an array of integers as a parameter and saves it to the __elements instance variable.
  // > A computeDifference method that finds the maximum absolute difference between any 2 numbers in __elements and stores it in the maximumDifference instance variable.

// Input Format
  // You are not responsible for reading any input from stdin. The locked Solution class in the editor reads in 2 lines of input. The first line contains N, the size of the elements array. The second line has N space-separated integers that describe the __elements array.

// Constraints
  // 1 <= N <= 10
  // 1 <= __elements[i] <= 100, where 0 <= i <= N-1

// Output Format
  // You are not responsible for printing any output; the Solution class will print the value of the  instance variable.

// Sample Input
  // STDIN   Function
  // -----   --------
  // 3       __elements[] size N = 3
  // 1 2 5   __elements = [1, 2, 5]

// Sample Output: 4

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;


class Difference {
  	private int[] elements;
  	public int maximumDifference;

	// Add your code here
    public Difference(int[] a) {
        this.elements = a;
    // System.out.println(Arrays.toString(this.elements));
}
public void computeDifference()
    {
    int min = elements[0];
    int max = elements[0];
    for(int i = 0;i < elements.length; i++) {
        if(elements[i] < min) { min = elements[i]; }
        if(elements[i] > max) { max = elements[i]; }                
    }
    maximumDifference = Math.abs(max - min);    
}

} // End of Difference class

public class Solution {

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
