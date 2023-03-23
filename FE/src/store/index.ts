import { configureStore } from '@reduxjs/toolkit';
import auth from 'reducer/auth';
import holidays from 'reducer/holidays';
import images from 'reducer/images';
import memo from 'reducer/memo';
import order from 'reducer/order';

export const store = configureStore({
  reducer: {
    order: order,
    auth: auth,
    images: images,
    holidays: holidays,
    memo: memo,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
