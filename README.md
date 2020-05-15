[![Flutter Extensions](https://img.shields.io/badge/Flutter-grey?style=flat-square&logo=flutter&logoColor=blue)](https://flutter.dev)
[![GitHub](https://img.shields.io/github/license/thetnswe/flutter_mvvm_generator?color=blue&style=flat-square)](https://raw.githubusercontent.com/thetnswe/flutter_mvvm_generator/master/LICENSE)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/thetnswe.mvvm-generator?color=green&label=VS%20Code%20Downloads&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=thetnswe.mvvm-generator)
[![Visual Studio Marketplace Rating (Stars)](https://img.shields.io/visual-studio-marketplace/stars/thetnswe.mvvm-generator?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=thetnswe.mvvm-generator&ssr=false#review-details)

# Flutter MVVM Architecture Generator [![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/thetnswe.mvvm-generator?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=thetnswe.mvvm-generator)
VsCode extension to generate boilerplate code when using [the latest Stacked plugin](https://pub.dev/packages/stacked) using Providers

#####################################################################
- Create a new flutter project and open it in visual studio code
- Press Ctrl + Shift + P and command browser window will open
- Type the following commands to generate the codes
#####################################################################

## Features
### Initialising Project architecture
- "Initialise Project Architecture" to create the following project structure.

```bash
--root
    |-- android
    |-- assets
        | -- animations
        | -- fonts
        | -- images
        | -- misc
    |-- build
    |-- ios
    |-- lib
        |-- core
            |-- base
                |-- base_model.dart
                |-- base_service.dart
            |-- models
            |-- services
                |-- navigation_service.dart
            locator.dart
            logger.dart
            providers.dart
        |-- dev_assets
        |-- helpers
        |-- theme
        |-- views
            |-- home
                |-- home_desktop.dart
                |-- home_mobile.dart
                |-- home_tablet.dart
                |-- home_view_model.dart
                |-- home_view.dart
        |-- widgets
        main.dart
    |-- test
    |-- .gitignore
    |-- pubspec.yaml
```

It will also add the following dependencies to the `pubspec.yaml` file

- responsive_builder: ^0.1.4
- provider: ^4.1.0
- logger: ^0.7.0+2
- get_it: ^3.0.3
- equatable: ^1.0.1
- stacked: ^1.5.0
- page_transition: ^1.1.5


### Create View
- "Create View" to create a new view folder

The create view command will add a **View**, a **ViewModel** and the responsive variants for Tablet, Mobile and Desktop.

You can create sub folders for views.

#### Example

If you give parameter for class name as `intro/splash/demo`, the extension will create a directory structure like this

```bash
--root
    |-- android
    |-- ios
    |-- lib
        |-- core
        |-- views
            |-- intro
                |-- splash
                    |-- demo
                        |-- demo_view.dart
                        |-- demo_view_model.dart
                        |-- demo_tablet.dart
                        |-- demo_mobile.dart
                        |-- demo_desktop.dart
            |-- main.dart
        |-- theme
        |-- main.dart
    |-- test
    |-- pubspec.yaml
```

### Create Widget
- "Create Widgets" to create a new view folder

This command will create a Widget in the `lib/widgets` folder with the initial boilerplate and responsive variants.
