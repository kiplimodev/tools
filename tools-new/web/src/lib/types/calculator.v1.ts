/**
 * CalculatorV1
 *
 * Immutable contract for all deterministic calculator engines.
 *
 * Rules:
 * - Pure function
 * - Deterministic
 * - Synchronous
 * - No side effects
 * - No throwing
 * - No async
 * - No formatting
 *
 * Return semantics:
 * - number: valid computed result
 * - null: cannot compute with given input
 *
 * This contract must never change.
 */
export type CalculatorV1<Input> = (input: Input) => number | null;
