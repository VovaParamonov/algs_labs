const operMap = {
  '*': 2,
  '/': 2,
  '-': 1,
  '+': 1
}

export default (expression: string): string => {
  let pfixArr: string[] = [];
  const infixStack: string[] = [];

  // Helper function to get the precedence of the operator
  const precedence = (operator: string) => {
    return (operMap as any)[operator] || 0;
  }

  for (let c of expression) {
    if (!isNaN(parseInt(c))) {
      pfixArr.push(c);
    } else if ('*/+-'.includes(c)) {
      while (
        infixStack.length !== 0 &&
        (precedence(c) <= precedence(infixStack[infixStack.length - 1]))
      ) {
        pfixArr.push(infixStack.pop()!);
      }
      infixStack.push(c);
    }
  }
  while (infixStack.length !== 0) {
    pfixArr.push(infixStack.pop()!);
  }

  return pfixArr.join(' ');
}