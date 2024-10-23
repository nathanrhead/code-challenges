# HackerRank Challenge: Excessive Log Transactions

## Task

Your team is responsible for maintaining a monetary transaction service. The transactions are tracked in a log file.

A log file is provided as a string array in which each entry represents a transaction.

Each transaction consists of:

- sender_user_id: a unique identifier for the user who initiated the transaction, it consists of only digits with at most 9 digits.
- recipient_user_id: a unique identifier for the user who received the transaction, it consists of only digits with at most 9 digits.
- amount_of_transaction: the amount of the transaction, consisting only of digits with at most 9 digits.

The values are separated by a space, e.g., "sender_user_id recipient_user_id amount_of_transaction".

Users who perform an excessive amount of transactions might be abusing the service, so you need to identify the users whose number of transactions exceeds the given threshold. The return list of user IDs should be ordered in ascending numeric value.

## Example

Input: `logs = ["88 99 200", "88 99 300", "99 32 100", " 12 12 15"], threshold = 2`

The transactions count for each user, regardless of role are:

```text
ID      Transactions
--      ------------
99      3
88      2
12      1
32      1
```

There are two users with at least 2 transactions: 99 and 88. In ascending order, the return array is ['88', '99'].

Note: In the last log entry, user 12 was on both sides of the transaction. This counts as only 1 transaction for user 12.

## Notes

1. Time Complexity: O(n log n)

    - Iterating through logs to count transactions: O(n).
    - Creating an array of users above the threshold: O(k) where k is the number of unique users.
    - Sorting the final array: O(k log k).
    - Since k ≤ n, the worst-case is O(n log n), due to the sorting step.
    - The bottleneck is the sorting step, in the absence of which requirement the algorithm would be O(n).

2. Space Complexity: O(n)

    - The `userTransactions` dictionary: O(k) where k is the number of unique users.
    - The `return` array: O(k) where k is the number of users exceeding the transaction threshold.
    - In the worst-case scenario, in which each transaction involves unique users, k could be up to n, making it O(n).
    - Space in this algorithm is dominated by the need to store transaction counts for each unique user.
