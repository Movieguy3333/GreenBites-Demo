export type MealLog = {
  name: string;
  date: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  sodium: number;
  carbonFootPrintValue: number;
};

export type CalorieHistoryItem = {
  date: string;
  caloriesToday: number;
  proteinToday: number;
  carbsToday: number;
  fatsToday: number;
  sodiumToday: number;
  carbonFootPrintValueToday: number;
  mealsToday: MealLog[];
};

export type User = {
  username: string;
  gender: string;
  height: number;
  weight: number;
  calorieGoal: number;
  totalMeals: MealLog[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
  totalSodium: number;
  totalCarbonFootPrint: number;
  calorieHistory: CalorieHistoryItem[];
};

export type UserContextValue = User & {
  addCalorieEntry: (meal: MealLog) => void;
};

export const initialState: User = {
  username: "TestUser",
  gender: "Male",
  height: 180,
  weight: 75,
  calorieGoal: 2500,
  totalMeals: [],
  totalCalories: 5200,
  totalProtein: 280,
  totalCarbs: 600,
  totalFats: 180,
  totalSodium: 3000,
  totalCarbonFootPrint: 25,
  calorieHistory: [],
};

type AddCalorieEntryAction = {
  type: "ADD_CALORIE_ENTRY";
  payload: MealLog;
};

type Action = AddCalorieEntryAction;

export function userReducer(state: User, action: Action): User {
  switch (action.type) {
    case "ADD_CALORIE_ENTRY": {
      const meal = action.payload;
      const existingIndex = state.calorieHistory.findIndex(
        (entry) => entry.date === meal.date
      );

      let updatedHistory = state.calorieHistory;

      if (existingIndex !== -1) {
        updatedHistory = state.calorieHistory.map((entry, idx) =>
          idx === existingIndex
            ? {
                ...entry,
                caloriesToday: entry.caloriesToday + meal.calories,
                proteinToday: entry.proteinToday + meal.protein,
                carbsToday: entry.carbsToday + meal.carbs,
                fatsToday: entry.fatsToday + meal.fats,
                sodiumToday: entry.sodiumToday + meal.sodium,
                carbonFootPrintValueToday:
                  entry.carbonFootPrintValueToday + meal.carbonFootPrintValue,
                mealsToday: [...entry.mealsToday, meal],
              }
            : entry
        );
      } else {
        updatedHistory = [
          ...state.calorieHistory,
          {
            date: meal.date,
            caloriesToday: meal.calories,
            proteinToday: meal.protein,
            carbsToday: meal.carbs,
            fatsToday: meal.fats,
            sodiumToday: meal.sodium,
            carbonFootPrintValueToday: meal.carbonFootPrintValue,
            mealsToday: [meal],
          },
        ];
      }

      return {
        ...state,
        totalMeals: [...state.totalMeals, meal],
        calorieHistory: updatedHistory,
        totalCalories: state.totalCalories + meal.calories,
        totalProtein: state.totalProtein + meal.protein,
        totalCarbs: state.totalCarbs + meal.carbs,
        totalFats: state.totalFats + meal.fats,
        totalSodium: state.totalSodium + meal.sodium,
        totalCarbonFootPrint:
          state.totalCarbonFootPrint + meal.carbonFootPrintValue,
      };
    }
    default:
      return state;
  }
}
