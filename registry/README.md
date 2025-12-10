# Tool Registry

## Usage

```ts
import { getTool } from "./registry/getTool";

const calculate = getTool("running-pace-calculator");

const result = calculate({
  distance: 10,
  unit: "km",
  time: "00:50:00",
});

console.log(result);
```
