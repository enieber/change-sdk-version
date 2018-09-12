# Change SDK version [Deprecated]

if you has muny version compileSdkVersion and buildToolsVersion you can use this in `android\build.gradle`

```build.gradle
subprojects { subproject ->
   afterEvaluate {
       if ((subproject.plugins.hasPlugin('android') || subproject.plugins.hasPlugin('android-library'))) {
           android {
               // the version cannot be bigger than your app compileSdkVersion
               compileSdkVersion 26
               buildToolsVersion "26.0.1"
           }
       }
   }
}
```

this project is one script to change number version sdk for android the lib in react-native

## how to run 

  set the array with the list of paths of gradle config of libs
