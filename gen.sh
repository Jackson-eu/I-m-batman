#!/bin/bash   

cordova build --release android

## Settings for assignment
PATH_KEY=/home/jackson-eu/Install
PATH_RELEASE=./platforms/android/build/outputs/apk
APK_NAME='imbatman.apk'
OUTPUT_FOLDER=/home/jackson-eu/Install

## Assign release apk
jarsigner -tsa http://timestamp.digicert.com -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $PATH_KEY/equilibra.keystore $PATH_RELEASE/android-release-unsigned.apk equilibra

## Remove previous apk's
rm $PATH_RELEASE/$APK_NAME

## Zip new apk assigned
zipalign -v 4 $PATH_RELEASE/android-release-unsigned.apk $PATH_RELEASE/$APK_NAME

## Copy apk assigned to defined output folder
cp $PATH_RELEASE/$APK_NAME $OUTPUT_FOLDER
