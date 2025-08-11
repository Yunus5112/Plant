import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PlanId = 'month' | 'year' | null;

type SubscriptionState = {
  selectedPlan: PlanId;
  isPremium: boolean;
};

const initialState: SubscriptionState = {
  selectedPlan: 'year',
  isPremium: false,
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
    resetSubscription() {
      return initialState;
    },
  },
});

export const { setSelectedPlan, activatePremium, resetSubscription } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;


