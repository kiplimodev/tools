# Starbucks Macro Calculator

## Description
Returns detailed macros for Starbucks drinks and foods, supporting size selections and quantities, and aggregates totals across all items in an order.

## Inputs
- `items`: array of selections
  - `itemId`: menu identifier (e.g., `latte`, `caffe_americano`, `croissant`)
  - `size` (optional): size label supported by the item (e.g., `Tall`, `Grande`, `Venti`, `Trenta`, or food defaults like `Standard`)
  - `quantity` (optional): defaults to 1

## Outputs
- `items`: per-item macros (calories, protein, carbs, fat, sugar) with resolved size and quantity
- `totals`: summed calories, protein, carbs, fat, and sugar across all items

## Menu & Logic
- Static menu of ~20 Starbucks items with size-specific macros and default size
- Size resolution uses the item's default when not provided and throws if an unsupported size is requested
- Quantity defaults to 1 and multiplies all macros
- Totals are rounded to one decimal place

## Formula
```
finalMacros = sizeMacros × quantity
orderTotals = sum(all finalMacros)
```

## Example
```
items = [
  { itemId: "latte", size: "Grande", quantity: 2 },
  { itemId: "croissant", quantity: 1 }
]
```

Expected outcome (approx.):
- Items include two Grande Lattes and one Butter Croissant with their respective macros
- Totals provide combined calories, protein, carbs, fat, and sugar for the full order
