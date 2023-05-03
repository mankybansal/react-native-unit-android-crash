# react-native-unit-android-crash

Repro

1. Run this on a physical Android device (Samsung Galaxy S23 Running Android 13)
2. Update `SAMPLE_TOKEN` in `DebitCard.tsx` to a customer token with the following scopes: `customers cards cards-sensitive cards-write` 
3. Install Expo Go app from the Google Play store.
4. run `npx expo start --c` in the project directory
5. Scan QR code on Android device.
6. Tap on the Card tab
7. tap on the (+) button on the top right of the card
8. expand all the cards so that all cards are visible
9. expand and collapse the cards a few times


