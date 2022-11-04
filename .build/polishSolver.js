var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => polishSolver_default
});
var polishSolver_default = (postfix) => {
  const resultStack = [];
  const postfixArr = postfix.split(" ");
  for (let i = 0; i < postfixArr.length; i++) {
    if (!!+postfixArr[i] || +postfixArr[i] === 0) {
      resultStack.push(postfixArr[i]);
    } else {
      const a = resultStack.pop();
      const b = resultStack.pop();
      if (postfixArr[i] === "+") {
        resultStack.push(parseFloat(a) + parseFloat(b));
      } else if (postfixArr[i] === "-") {
        resultStack.push(parseFloat(b) - parseFloat(a));
      } else if (postfixArr[i] === "*") {
        resultStack.push(parseFloat(a) * parseFloat(b));
      } else if (postfixArr[i] === "/") {
        resultStack.push(parseFloat(b) / parseFloat(a));
      }
    }
  }
  if (resultStack.length > 1) {
    throw new Error("Something wetns wrong");
  } else {
    return resultStack.pop();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=polishSolver.js.map
