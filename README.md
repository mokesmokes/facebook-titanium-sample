Titanium Facebook Test App
================================

This test app has been tested on both iOS and Android simulators and devices, including 64-bit iOS.
If it doesn't work, it's a personal installation issue or possibly a bad setup on the Facebook developer site.
This app was tested with the module zip files in the [Android](https://github.com/mokesmokes/titanium-android-facebook) and [iOS](https://github.com/mokesmokes/titanium-ios-facebook) repositories.
For iOS I used 3.5.0.GA, and for Android I used [my fork from 3_4_X, called 3_4_M](https://github.com/mokesmokes/titanium_mobile/tree/3_4_M).
You can download my [prebuilt SDK here](http://goo.gl/U8bB1x)
The reason for not using a GA SDK for Android is that some pull requests, such as [this one](https://github.com/appcelerator/titanium_mobile/pull/6272 ) and
[this one](https://github.com/appcelerator/titanium_mobile/pull/6275), though merged, are not yet in a production release.

For both iOS and Android please carefully look at tiapp.xml

General Setup Notes
-------------------
1. Setup the app properly at the Facebook developer site
2. Copy your App ID to where it says `YOUR_APP_ID` in tiapp.xml (two places) and in `platform/android/res/values/strings.xml` 

iOS Notes
----------
If you want to install the module globally (under ~/Library, etc) then you will need to modify the `FRAMEWORK_SEARCH_PATHS` in module.xcconfig.
If you want to install the module zip file as-is, just install it locally to the mobile app project.

Android Notes
-------------
Make sure to place the app ID in `platform/android/res/values/strings.xml`, and set up the correct references to the ApplicationId and the Facebook LoginActivity
in tiapp.xml.

Help welcome
-------------
Feel free to flesh out this app with more controls and examples using the modules. And please help each other out in the [Titanium Q&A](http://developer.appcelerator.com/questions/search/facebook)
instead of posting issues here. Post issues here and on the module repositories if you find real issues. Thanks! 
