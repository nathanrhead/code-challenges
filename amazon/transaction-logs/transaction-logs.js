function processLogs(logs, threshold) {
  const result = [];

  // Using .reduce() to create a map.
  const userTransactions = logs.reduce((acc, log) => {
    const [sender, recipient] = log.trim().split(' ');
      
    // Count transactions for each user.
    acc[sender] = (acc[sender] || 0) + 1;

    if (sender !== recipient) acc[recipient] = (acc[recipient] || 0) + 1;

    return acc;
  }, {});

  for (let user in userTransactions) {
    const numberOfTransactions = userTransactions[user];
    
    if (numberOfTransactions >= 2) result.push(user);
  }

  return result.sort();
}

// One array.
function processLogsOneArray(logs, threshold) {
  const map = {};
  const result = [];

  logs.forEach(log => {
    const [ sender, recipient ] = log.trim().split(' ');

    if (sender !== recipient) map[recipient] = (map[recipient] || 0) + 1;
    map[sender] = (map[sender] || 0) + 1;
    if (map[sender] === 2) result.push(sender);
    if (map[recipient] === 2) result.push(recipient);
  });

  return result.sort();
}

module.exports = { processLogs, processLogsOneArray };
