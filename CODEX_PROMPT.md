# Final Codex Prompt for Fitness Tools Suite

This document contains the final, clean, copy-paste-ready prompt optimized for GitHub Copilot or OpenAI Codex to generate the complete set of 40+ TypeScript fitness tools.

---

Here is the prompt:

```
# ✅ **FINAL MASTER CODEX PROMPT (COPY–PASTE THIS INTO CODEX)**

**You are an expert senior TypeScript engineer.
Your task is to generate an entire suite of 40+ modular fitness tools.
Follow every instruction below exactly.**

---

# **1. PROJECT RULES**

### **Code requirements**

* Use **TypeScript only**.
* Every tool must be self-contained inside its folder.
* Each tool must include exactly these files:

```
index.ts
types.ts
utils.ts
README.md
```

### **Coding standards**

* Write clean, well-documented code.
* Use pure functions.
* No UI, no API calls — logic only.
* All calculators must follow:

```
calculate(input: CalculatorInput): CalculatorOutput
```

---

# **2. FOLDER STRUCTURE (ABSOLUTE REQUIREMENT)**

Create all tools inside `/tools/` using this exact structure:

```
/tools/
  /running/
    /running-pace-calculator/
    /running-splits-calculator/
    /split-calculator/
    /interval-calculator/
    /vdot-calculator/

  /calories/
    /rowing-calories-calculator/
    /swimming-calories-calculator/
    /treadmill-calorie-calculator/
    /walking-calorie-calculator/
    /running-calories-burned-calculator/
    /bike-calorie-calculator/
    /steps-to-calories-calculator/

  /body-composition/
    /body-fat-calculator/
    /lean-body-mass-calculator/
    /bmi-calculator/
    /ideal-weight-calculator/
    /waist-to-height-ratio-calculator/
    /waist-to-hip-ratio-calculator/
    /body-measurement-calculator/
    /body-recomposition-calculator/

  /activity/
    /steps-per-day-calculator/
    /move-goal-calculator/

  /strength/
    /barbell-calculator/
    /plate-weight-calculator/
    /powerlifting-calculator/
    /1-rep-max-calculator/
    /training-volume-calculator/
    /strength-ratio-calculators/
    /rpe-calculator/

  /calisthenics/
    /push-up-calculator/
    /pull-up-calculator/
    /home-workout-generator/

  /nutrition/
    /fat-intake-calculator/
    /creatine-calculator/
    /protein-powder-calculator/
    /bulk-calculator/
    /lean-bulk-calculator/
    /intermittent-fasting-calculator/
    /tdee-calculator/
    /starbucks-macro-calculator/
    /carnivore-macro-calculator/
    /subway-macro-calculator/

  /planners/
    /meal-plan-generator/
    /workout-generator/

  /trackers/
    /weight-tracker/

  /equipment/
    /dumbbell-weight-calculator/
```

---

# **3. TOOL LOGIC REQUIREMENTS**

Implement the following formulas and behaviors for each calculator.

---

## **RUNNING & CARDIO PERFORMANCE**

### **Running Pace Calculator**

Inputs:

* distance (km or miles)
* time (hh:mm:ss)

Outputs:

* pace per km / mile
* speed km/h & mph

Formulas:

```
pace = totalTime / distance
speed = distance / totalTimeHours
```

---

### **Running Splits Calculator**

Generate time per:

* each km
* each mile

---

### **Interval Calculator**

Compute:

* interval times
* rest times
* total workout time

---

### **VDOT Calculator (Jack Daniels)**

Implement:

* VDOT from race time
* predicted race times
* training pace zones

---

## **CALORIES BURNED / ENERGY EXPENDITURE**

Use MET-based formula for all:

```
Calories = MET × weight(kg) × duration(hours)
```

Tools:

* rowing
* swimming
* treadmill
* walking
* running
* biking
* steps → calories (use weight-scaled kcal/step)

---

## **BODY COMPOSITION & HEALTH METRICS**

### **Body Fat (US Navy Method)**

Male:

```
BF% = 86.010 * log10(waist - neck) - 70.041 * log10(height) + 36.76
```

Female:

```
BF% = 163.205 * log10(waist + hip - neck) - 97.684 * log10(height) - 78.387
```

---

### Lean Body Mass (Boer Formula)

### BMI

```
BMI = weight / height^2
```

### Ideal Weight

Include:

* Devine
* Hamwi
* Robinson
* Miller

### Waist-to-Height Ratio

### Waist-to-Hip Ratio

### Body Measurement Calculator

Combine girths to estimate composition.

### Body Recomposition Calculator

Track:

* fat mass
* lean mass
* projected changes

---

## **DAILY ACTIVITY**

### Steps per day calculator

### Move goal calculator → kcal target based on TDEE

---

## **STRENGTH TRAINING & POWERLIFTING**

### 1 Rep Max Calculator

Implement:

* Epley
* Brzycki
* Lombardi
* O'Conner
* Lander

### RPE Calculator

Predict:

* weight @ RPE
* reps @ RPE

### Powerlifting Calculator

Compute:

* DOTS
* IPF GL
* Wilks

### Barbell Calculator

Compute per-side loads.

### Plate Weight Calculator

Return list of plates needed.

### Training Volume Calculator

```
volume = sets × reps × weight
```

### Strength Ratio Calculators

Push/pull/leg strength ratios.

---

## **CALISTHENICS**

### Push-up calculator

### Pull-up calculator

### Home workout generator

Program based on difficulty & equipment.

---

## **NUTRITION**

### TDEE Calculator

* Mifflin–St Jeor BMR
* Activity multiplier

### Fat intake calculator

### Creatine dosage calculator

### Protein powder calculator

### Bulk & lean bulk calculator

### Intermittent fasting calculator

### Starbucks / Subway / Carnivore Macro Calculators

Return:

* calories
* protein
* carbs
* fats

---

## **PLANNERS**

### Meal Plan Generator

Inputs:

* calories
* macros
* dietary preference

Outputs:

* 3–6 meals/day

### Workout Generator

Goal-based workout plans.

---

## **TRACKING**

### Weight Tracker

Track daily weight, moving average, trends.

---

## **EQUIPMENT**

### Dumbbell Weight Calculator

Compute total volume lifted.

---

# **4. FILE TEMPLATES (MANDATORY)**

### **index.ts**

```ts
import { CalculatorInput, CalculatorOutput } from "./types";
import { calculateCore } from "./utils";

export function calculate(input: CalculatorInput): CalculatorOutput {
  return calculateCore(input);
}
```

---

### **types.ts**

Define all input/output interfaces.

---

### **utils.ts**

Implement formulas and validation.

---

### **README.md**

```
# Tool Name

## Description
What this tool does.

## Inputs
- list inputs

## Outputs
- list outputs

## Formulas
Include all equations used.

## Example
Provide a sample calculation.
```

---

# **5. EXECUTION ORDER**

Generate tools **in this order**:

1. Running pace calculator
2. Running splits calculator
3. Split calculator
4. Interval calculator
5. VDOT calculator
   …then continue down the list exactly as folder structure dictates.

---

# **6. BEGIN NOW**

Start generating the filesystem and TypeScript implementations tool by tool, beginning with:

```
/tools/running/running-pace-calculator/
```

For each tool, output:

* `types.ts`
* `utils.ts`
* `index.ts`
* `README.md`

---

# ✅ END OF PROMPT

---

If you want, I can also provide:

✅ A **shorter optimized Codex prompt**
✅ A **script that auto-creates all folders & empty files**
✅ A **version optimized for Copilot Chat**

Just tell me!
```
