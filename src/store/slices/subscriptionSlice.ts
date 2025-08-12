import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PlanId = 'month' | 'year' | null;

type SubscriptionState = {
  selectedPlan: PlanId;
  isPremium: boolean;
  onboardingCompleted: boolean;
};

const initialState: SubscriptionState = {
  selectedPlan: 'year',
  isPremium: false,
  onboardingCompleted: false,
};

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    setSelectedPlan(state, action: PayloadAction<PlanId>) {
      state.selectedPlan = action.payload;
    },
    activatePremium(state) {
      state.isPremium = true;
    },
    setOnboardingCompleted(state, action: PayloadAction<boolean>) {
      state.onboardingCompleted = action.payload;
    },
    resetSubscription() {
      return initialState;
    },
  },
});

export const { setSelectedPlan, activatePremium, setOnboardingCompleted, resetSubscription } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;


