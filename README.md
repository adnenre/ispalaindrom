# isPalaindrom solution (checking to the middel of the string)

## install
```bash
npm install @adnen/ispalaindrom
```

## Test

```bash
npm run test
```

## Usage

```typescript
// TYPESCRIPT FILE
import  isPalindrome  from "@adnen/ispalaindrom";

const str : string = "racecar";
const result = isPalindrome(str);

console.log(result);
//  true

const strs : sring[] = ['redivider', 'deified', 'civic', 'radar', 'level', 'rotor', 'kayak', 'reviver', 'racecar', 'madam','','a'];
const checkAll =  strs.map(isPlindrom);

console.log(checkAll)
// [true,true,true,true,true,true,true,true,true,true,true,true]
```
