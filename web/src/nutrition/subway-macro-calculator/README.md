# Subway Macro Calculator

## Description
Computes full macro breakdown for Subway sandwiches, wraps, and salads by combining base items with size, bread, cheese, sauces, and optional add-ons. The calculator returns per-item details and aggregated totals, including sugar.

## Inputs
- `items`: array of selections with
  - `itemId`: base menu item key (e.g., `turkey`, `steak-cheese`, `veggie-delite`)
  - `size` (optional): `"6-inch" | "footlong"` (defaults per item)
  - `bread` (optional): bread type such as `Italian`, `Wheat`, `Multigrain`, `Flatbread`, `Wrap (no bread)`
  - `cheese` (optional): `American`, `Cheddar`, `Swiss`, `Provolone`, `None`
  - `sauces` (optional): list of sauces like `Mayo`, `Chipotle Southwest`, `Sweet Onion`, `Honey Mustard`, `Oil`, `Vinegar`
  - `addOns` (optional): extras such as `Bacon`, `Pepperoni`, `Avocado`, `Extra Meat`
  - `quantity` (optional): number of identical items (default 1)

## Outputs
- `items`: per-selection macros with resolved size, bread, cheese, sauces, add-ons, quantity, and calculated calories, protein, carbs, fat, and sugar
- `totals`: summed calories, protein, carbs, fat, and sugar across all items

## Formulas
- **Item macros** = base item (size) + bread (size) + cheese + sum(sauces) + sum(add-ons)
- Apply `quantity` after combining all components.
- **Totals** = sum of all per-item macros.
- All numeric outputs are rounded to one decimal place.

## Example
Order:
- Turkey 6-inch on Wheat with Provolone, Chipotle Southwest sauce, Avocado
- Footlong Steak & Cheese on Italian with Mayo and Honey Mustard

Example output (rounded):
- Item 1 ≈ 730 kcal, 69 g protein, 127 g carbs, 24 g fat, 17 g sugar
- Item 2 ≈ 1040 kcal, 86 g protein, 145 g carbs, 51 g fat, 20 g sugar

Totals: calories ≈ 1770, protein ≈ 155 g, carbs ≈ 272 g, fat ≈ 75 g, sugar ≈ 37 g

## Notes
- Sauce and add-on macros stack; include each sauce in the `sauces` list to add one serving.
- Unsupported options or invalid sizes will throw descriptive errors during validation.
