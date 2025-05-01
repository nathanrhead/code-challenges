function isValid(s: string): boolean {
    const open = ['(', '[', '{']
    const pairs: Record<string, string> = {
        ')': '(', 
        ']': '[', 
        '}': '{'
    }
    const stack: string[] = []

    for (const c of s) {
        if (open.includes(c)) stack.push(c)
        else if (!stack.length || stack.pop() !== pairs[c]) return false
    }
    
    return stack.length === 0
}