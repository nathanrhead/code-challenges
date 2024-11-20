function accountsMerge(accounts) {  
  const emailGraph = new Map();
  const emailToName = new Map();

  // Build the graph and map emails to names.
  for (const [name, firstEmail, ...emails] of accounts) {
    if (!emailGraph.has(firstEmail)) emailGraph.set(firstEmail, []);

    emails.forEach(email => {
      if (!emailGraph.has(email)) emailGraph.set(email, []);
      emailGraph.get(firstEmail).push(email);
      emailGraph.get(email).push(firstEmail);
      emailToName.set(email, name);
    });

    emailToName.set(firstEmail, name);
  }
  
  // Perform DFS on the graph to find connected components.
  const visited = new Set();
  const merged = [];

  const dfs = (email, component) => {
    visited.add(email);
    component.push(email);
    emailGraph.get(email).forEach(neighbor => {
      if (!visited.has(neighbor)) dfs(neighbor, component);
    });
  };

  // Traverse all emails.
  emailGraph.forEach((_, email) => {
    if (!visited.has(email)) {
      const component = [];
      dfs(email, component);

      // Sort the emails and prepend the name.
      const name = emailToName.get(email);
      merged.push([name, ...component.sort()]);
    }
  });

  return merged;
}

module.exports = accountsMerge;
