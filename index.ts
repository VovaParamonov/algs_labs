import polishResolver from './polishSolver';
import infixToPostfix from './infixToPostfix';

try {
  console.log(polishResolver(infixToPostfix('5 + 3 * 6 - ( 5 / 3 ) + 7')));
} catch (e) {
  console.log();
}
