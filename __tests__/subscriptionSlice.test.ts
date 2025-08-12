import { configureStore } from '@reduxjs/toolkit';
import subscriptionReducer, {
  setSelectedPlan,
  activatePremium,
  setOnboardingCompleted,
  resetSubscription,
} from '../src/store/slices/subscriptionSlice';

describe('subscriptionSlice', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        subscription: subscriptionReducer,
      },
    });
  });

  it('has correct initial state', () => {
    const state = store.getState().subscription;
    expect(state).toEqual({
      selectedPlan: 'year',
      isPremium: false,
      onboardingCompleted: false,
    });
  });

  it('sets selected plan', () => {
    store.dispatch(setSelectedPlan('month'));
    const state = store.getState().subscription;
    expect(state.selectedPlan).toBe('month');
  });

  it('activates premium', () => {
    store.dispatch(activatePremium());
    const state = store.getState().subscription;
    expect(state.isPremium).toBe(true);
  });

  it('sets onboarding completed', () => {
    store.dispatch(setOnboardingCompleted(true));
    const state = store.getState().subscription;
    expect(state.onboardingCompleted).toBe(true);
  });

  it('resets subscription', () => {
    // Change all values
    store.dispatch(setSelectedPlan('month'));
    store.dispatch(activatePremium());
    store.dispatch(setOnboardingCompleted(true));
    
    // Reset
    store.dispatch(resetSubscription());
    
    // Verify reset
    const state = store.getState().subscription;
    expect(state).toEqual({
      selectedPlan: 'year',
      isPremium: false,
      onboardingCompleted: false,
    });
  });
});
