# react-native-unit-android-crash

Repro

1. Run this on a physical Android device (Samsung Galaxy S23 Running Android 13)
2. Update `SAMPLE_TOKEN` in `DebitCard.tsx` to a customer token with the following scopes: `customers cards cards-sensitive cards-write` 
3. Install Expo Go app from the Google Play store.
4. run `npm i` to install dependencies
5. run `npx expo start --c` in the project directory
6. Scan QR code on Android device.
7. Tap on the Card tab
8. tap on the (+) button on the top right of the card
9. expand all the cards so that all cards are visible
10. expand and collapse the cards a few times




https://user-images.githubusercontent.com/12834184/235811661-60d7cf9f-b697-44bb-ab22-00cd24887766.mp4

