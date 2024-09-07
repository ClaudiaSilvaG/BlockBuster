import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.grupo.blockbuster',
  appName: 'Blockbuster',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      launchFadeOutDuration: 2000,
      backgroundColor: "#F5D63B",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },
  android:{
    allowMixedContent:true
  },
  server:{
    allowNavigation:[
      "desarrollo.codemaker.cl",
      "media.themoviedb.org",
      "image.tmdb.org"
    ],
    cleartext:true
  }
};

export default config;
