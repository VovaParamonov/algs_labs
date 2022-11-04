export default (postfix: string): (string | number) => {
  const resultStack: (string | number)[] = [];
  const postfixArr = postfix.split(" ");
  for(let i = 0; i < postfixArr.length; i++) {
      if(!!+postfixArr[i] || +postfixArr[i] === 0) {
          resultStack.push(postfixArr[i]);
      } else {
          const a = resultStack.pop() as string;
          const b = resultStack.pop() as string;
        
          if(postfixArr[i] === "+") {
              resultStack.push(parseFloat(a) + parseFloat(b));
          } else if(postfixArr[i] === "-") {
              resultStack.push(parseFloat(b) - parseFloat(a));
          } else if(postfixArr[i] === "*") {
              resultStack.push(parseFloat(a) * parseFloat(b));
          } else if(postfixArr[i] === "/") {
              resultStack.push(parseFloat(b) / parseFloat(a));
          }
      }
  }
  if(resultStack.length > 1) {
      throw new Error('Something wetns wrong');
  } else {
      return resultStack.pop()!;
  }
}
    