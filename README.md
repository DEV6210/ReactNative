# And, It is an Social Media App.

# SHA1 key
 PS D:\Tynder\app\android\app>
 ```
 keytool -list -v -keystore ./debug.keystore -alias androiddebugkey (not input pass just press enter)
```
 
# RNSS SCREEN Navigation problem solve
```
 npm install react-native-screens react-native-safe-area-context
```

# FCM Push Notification
Referance: https://www.magicbell.com/blog/how-to-implement-react-native-push-notifications-with-firebase

# FCM React native setup
https://rnfirebase.io/messaging/usage

# generates release signed APK
```
./gradlew assembleRelease
```

# generates release signed AAB
```
./gradlew bundleRelease
```

# Clean Gradle (Android):
```
cd android
./gradlew clean
cd ..
npx react-native run-android
```

# ngrok.yml
```
version: "2"
authtoken: 2c1bqI12zq2l7MtpiqF03tLQJEp_6N66o7szog2hdo4q1P8qs
tunnels:
  server:
    proto: http
    addr: 8080
    domain: firstly-driving-kodiak.ngrok-free.app
```

# Home screen
![Screenshot 2023-11-13 200931](https://github.com/DEV6210/ReactNative/assets/91625966/3f7a5ec5-d8f2-4073-b243-1f71d226e3ec)
