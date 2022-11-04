var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => infixToPostfix_default
});
const operMap = {
  "*": 2,
  "/": 2,
  "-": 1,
  "+": 1
};
var infixToPostfix_default = (expression) => {
  let pfixArr = [];
  const infixStack = [];
  const precedence = (operator) => {
    return operMap[operator] || 0;
  };
  for (let c of expression) {
    if (!isNaN(parseInt(c))) {
      pfixArr.push(c);
    } else if ("*/+-".includes(c)) {
      while (infixStack.length !== 0 && precedence(c) <= precedence(infixStack[infixStack.length - 1])) {
        pfixArr.push(infixStack.pop());
      }
      infixStack.push(c);
    }
  }
  while (infixStack.length !== 0) {
    pfixArr.push(infixStack.pop());
  }
  return pfixArr.join(" ");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=infixToPostfix.js.map
