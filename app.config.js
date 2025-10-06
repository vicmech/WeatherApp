import 'dotenv/config';

export default {
  expo: {
    name: "weather-app",
    slug: "weather-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "weatherapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png"
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      permissions: ["ACCESS_FINE_LOCATION"]
    },
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      [
        "expo-location",
        {
          locationWhenInUsePermission: "Permitir que la app acceda a tu ubicación."
        }
      ],
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            backgroundColor: "#000000"
          }
        }
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true
    },
    extra: {
      WEATHERCROSS_API_KEY: process.env.WEATHERCROSS_API_KEY,
      router: {},
      eas: {
        projectId: "415cf15e-4759-46e7-a65c-8cf508a2f924"
      }
    },
    owner: "vicmech03"
  }
};
