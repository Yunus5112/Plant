# 🌱 PlantApp

**PlantApp** is a modern React Native mobile application designed to help users identify plants with cutting-edge technology. With over 3000+ plant species in our database and 88% accuracy, PlantApp makes plant identification accessible and enjoyable for everyone.

## ✨ Features

- **🔍 Plant Identification**: Identify more than 3000+ plant species with 88% accuracy
- **📱 Cross-Platform**: Available for both iOS and Android
- **🏠 Home Dashboard**: Clean and intuitive home interface
- **🔬 Plant Diagnosis**: Advanced plant health diagnosis tools
- **📸 Smart Scanner**: AI-powered camera scanning for instant plant recognition
- **🌿 My Garden**: Personal plant collection management
- **👤 User Profile**: Personalized user experience
- **💎 Premium Features**: Advanced features with subscription model
- **🎨 Modern UI**: Beautiful, responsive design with custom SVG icons

## 🛠 Tech Stack

- **Framework**: React Native 0.80.2 with New Architecture
- **Language**: TypeScript
- **State Management**: Redux Toolkit with React Redux
- **Navigation**: React Navigation v7 (Stack & Bottom Tabs)
- **API Client**: TanStack Query (React Query)
- **Storage**: AsyncStorage
- **UI Components**: Custom components with React Native SVG
- **Styling**: React Native Linear Gradient
- **Development**: Metro bundler, ESLint, Prettier, Jest

## 🏗 Detailed Project Structure

```
PlantApp/
├── 📁 __tests__/                          # Test files
│   ├── App.test.tsx                       # Main app component tests
│   ├── Button.test.tsx                    # Button component tests
│   ├── setup.ts                          # Test setup and mocks
│   ├── subscriptionSlice.test.ts          # Redux store tests
│   └── test-utils.tsx                     # Test utilities and helpers
│
├── 📁 src/                               # Source code
│   ├── 📁 assets/                        # Static assets
│   │   ├── 📁 Fonts/                     # Font files
│   │   │   ├── 📁 Rubik/                 # Rubik font family (10 files)
│   │   │   │   ├── Rubik-Regular.ttf     # Regular weight
│   │   │   │   ├── Rubik-Bold.ttf        # Bold weight
│   │   │   │   ├── Rubik-Light.ttf       # Light weight
│   │   │   │   └── ... (7 more variants) # Other weights and italics
│   │   │   └── 📁 SfProText/             # SF Pro Display family (9 files)
│   │   │       ├── SFPRODISPLAYREGULAR.OTF
│   │   │       ├── SFPRODISPLAYBOLD.OTF
│   │   │       └── ... (7 more weights)
│   │   ├── 📁 GetStartedScreen/          # Welcome screen assets
│   │   │   └── GetStartedScreenSvg.ts    # Main illustration
│   │   ├── 📁 HomeScreen/                # Home screen assets
│   │   │   ├── LeftLeafSvg.ts           # Left decorative leaf
│   │   │   ├── RightLeafSvg.ts          # Right decorative leaf
│   │   │   ├── LetterIconSvg.ts         # Notification icon
│   │   │   └── SearchIconSvg.ts         # Search icon
│   │   ├── 📁 OnboardingFirstScreen/     # First onboarding assets
│   │   │   ├── BrushSvg.ts              # Brush illustration
│   │   │   └── OnboardingSFirstScreenSvg.ts
│   │   ├── 📁 OnboardingSecondScreen/    # Second onboarding assets
│   │   │   ├── BlurLeafSvg.ts           # Background element
│   │   │   ├── PhoneSvg.ts              # Phone illustration
│   │   │   └── PlantsSvg.ts             # Plants illustration
│   │   ├── 📁 PaywallScreen/             # Premium screen assets
│   │   │   ├── CloseIconSvg.ts          # Close button
│   │   │   ├── DetailSvg.ts             # Detail feature icon
│   │   │   ├── PaywallScreenSvg.ts      # Background illustration
│   │   │   ├── ScanSvg.ts               # Scan feature icon
│   │   │   └── SpeedSvg.ts              # Speed feature icon
│   │   └── 📁 Tabs/                      # Tab navigation icons
│   │       ├── HomeIconSvg.ts           # Home tab
│   │       ├── DiagnoseIconSvg.ts       # Diagnose tab
│   │       ├── ScanIconSvg.ts           # Scan tab (center)
│   │       ├── GardenIconSvg.ts         # My Garden tab
│   │       └── ProfileIconSvg.ts        # Profile tab
│   │
│   ├── 📁 components/                    # Reusable UI components
│   │   ├── 📁 Button/                    # Custom button
│   │   │   ├── Button.tsx               # Component
│   │   │   ├── Button.style.ts          # Styles
│   │   │   └── Button.logic.ts          # Types & logic
│   │   ├── 📁 Dots/                      # Pagination dots
│   │   │   ├── Dots.tsx
│   │   │   ├── Dots.style.ts
│   │   │   └── Dots.logic.ts
│   │   ├── 📁 FeatureCard/               # Premium feature cards
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── FeatureCard.style.ts
│   │   │   └── FeatureCard.logic.ts
│   │   └── 📁 PlanCard/                  # Subscription plan cards
│   │       ├── PlanCard.tsx
│   │       ├── PlanCard.style.ts
│   │       └── PlanCard.logic.ts
│   │
│   ├── 📁 constants/                     # App constants (ready for use)
│   ├── 📁 navigation/                    # Navigation config
│   │   └── Tabs.tsx                     # Custom bottom tabs
│   │
│   ├── 📁 screens/                       # Screen components
│   │   ├── 📁 GetStartedScreen/          # Welcome screen
│   │   │   ├── GetStarted.tsx           # Component
│   │   │   ├── GetStarted.style.ts      # Styles
│   │   │   ├── GetStarted.text.ts       # Text content
│   │   │   └── GetStarted.logic.ts      # Business logic
│   │   ├── 📁 HomeScreen/                # Main dashboard
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── HomeScreen.style.ts
│   │   │   ├── HomeScreen.text.ts
│   │   │   └── HomeScreen.logic.ts      # API calls
│   │   ├── 📁 OnboardingFirstScreen/     # Onboarding step 1
│   │   │   ├── OnboardingFirstScreen.tsx
│   │   │   ├── OnboardingFirstScreen.style.ts
│   │   │   ├── OnboardingFirstScreen.text.ts
│   │   │   └── OnboardingFirstScreen.logic.ts
│   │   ├── 📁 OnboardingSecondScreen/    # Onboarding step 2
│   │   │   ├── OnboardingSecondScreen.tsx
│   │   │   ├── OnboardingSecondScreen.style.ts
│   │   │   ├── OnboardingSecondScreen.text.ts
│   │   │   └── OnboardingSecondScreen.logic.ts
│   │   └── 📁 PaywallScreen/             # Premium subscription
│   │       ├── PaywallScreen.tsx
│   │       ├── PaywallScreen.style.ts
│   │       ├── PaywallScreen.text.ts
│   │       └── PaywallScreen.logic.ts   # Plans & responsive logic
│   │
│   ├── 📁 storage/                       # Data persistence
│   │   └── onboarding.ts                # Onboarding state storage
│   │
│   └── 📁 store/                         # Redux state management
│       ├── index.ts                     # Store configuration
│       └── 📁 slices/
│           └── subscriptionSlice.ts     # Subscription state
│
├── 📁 android/                          # Android platform files
│   ├── 📁 app/src/main/
│   │   ├── AndroidManifest.xml         # App permissions & config
│   │   ├── 📁 assets/fonts/            # Android font assets
│   │   ├── 📁 java/com/plantapp/       # Native Android code
│   │   └── 📁 res/                     # Android resources
│   └── build.gradle                    # Build configuration
│
├── 📁 ios/                             # iOS platform files
│   ├── 📁 PlantApp/
│   │   ├── AppDelegate.swift           # iOS app delegate
│   │   ├── Info.plist                 # iOS configuration
│   │   └── 📁 Images.xcassets/        # iOS app icons
│   ├── Podfile                        # CocoaPods dependencies
│   └── 📁 PlantApp.xcodeproj/         # Xcode project
│
├── 📄 App.tsx                          # Root component
├── 📄 package.json                     # Dependencies & scripts
├── 📄 tsconfig.json                    # TypeScript config
├── 📄 jest.config.js                   # Testing config
└── 📄 README.md                        # This file
```

### 📁 Architecture Patterns

**Component Organization:**
- `Component.tsx` - React component
- `Component.style.ts` - StyleSheet definitions  
- `Component.logic.ts` - Types, interfaces, business logic
- `Component.text.ts` - Text content (for screens)

**Screen Structure:**
Each screen follows the same pattern for consistency and maintainability.

**Asset Organization:**
Assets are grouped by screen/feature for easy maintenance and code splitting.

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

## 🎯 App Flow

### Onboarding Flow
```
App Launch → Check Onboarding Status
    ↓
GetStarted → OnboardingFirst → OnboardingSecond → Paywall → Tabs (Home)
```

### Main Navigation
```
Bottom Tabs:
├── Home (Dashboard)
├── Diagnose
├── Scan (Center button)
├── My Garden
└── Profile
```

## 📱 Platform Support

- **iOS**: 12.0+
- **Android**: API Level 21+ (Android 5.0)
- **New Architecture**: Enabled (Hermes + TurboModules)

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode  
npm run test:watch

# Run with coverage
npm run test:coverage
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Made with ❤️ for plant lovers worldwide** 🌿
