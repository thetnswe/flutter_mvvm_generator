import * as _ from 'lodash';
import { Base } from './base';

export class Main extends Base {

  private _dartString: string;

  constructor(fileName: string, suffix?: string) {
    super(fileName, suffix);

    this._dartString = `import 'core/locator.dart';
import 'core/providers.dart';
import 'core/services/navigator_service.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:page_transition/page_transition.dart';
import 'views/home/home_view.dart';

void main() async {
  await LocatorInjector.setupLocator();
  runApp(MainApplication());
}

class MainApplication extends StatefulWidget {
  @override
  _MainApplicationState createState() => _MainApplicationState();
}

class _MainApplicationState extends State<MainApplication> {
  @override
  void initState() {
    super.initState();
    //FirebaseUtility.initialiseFirebase();
    //AdsUtility.initialiseAds();
  }

  @override
  void dispose() {
    //AdsUtility.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: ProviderInjector.providers,
      child: MaterialApp(
        navigatorKey: locator<NavigatorService>().navigatorKey,
        debugShowCheckedModeBanner: false,
        title: 'App Title',
        theme: ThemeData(
            scaffoldBackgroundColor: Color.fromRGBO(240, 240, 240, 1),
            primaryIconTheme: IconThemeData(color: Colors.white),
            primaryColorDark: Colors.blue,
            primarySwatch: Colors.lightBlue,
            accentColor: Colors.cyanAccent,
            canvasColor: Color.fromRGBO(86, 194, 255, 1),
            secondaryHeaderColor: Colors.deepPurpleAccent,
            fontFamily: 'Raleway',
            textTheme: ThemeData.light().textTheme.copyWith(
                  bodyText1: TextStyle(color: Color.fromRGBO(20, 51, 51, 1)),
                  bodyText2: TextStyle(color: Color.fromRGBO(20, 51, 51, 1)),
                  caption: TextStyle(
                    color: Colors.black87,
                    fontSize: 16,
                    fontFamily: 'RobotoCondensed',
                    fontWeight: FontWeight.bold,
                  ),

              //Used for item subtitle
              subtitle1: TextStyle(
                color: Colors.black54,
                fontSize: 13,
                fontFamily: 'RobotoCondensed',
                height: 1.6
              ),

              //This is used for appbar titles
              headline6: TextStyle(
                  color: Colors.white,
                  fontSize: 18,
                  fontFamily: 'RobotoCondensed',
                )
                ),
        ),
        home: HomeView(),

        routes: {
          HomeView.routeName: (ctx) => HomeView(),
        },

        //Define transition for each route (Note : Don't define the routes in the routes or it will not be overridden)
        onGenerateRoute: (settings) {
          switch (settings.name) {
            case HomeView.routeName: return PageTransition(child: HomeView(), type: PageTransitionType.rightToLeftWithFade, curve: Curves.easeInQuart, settings: settings);
           default: print('TODO : You need to add the route for this view'); return PageTransition(child: HomeView(), type: PageTransitionType.downToUp, curve: Curves.easeIn, settings: settings);
          }
        }
      ),
    );
  }
}`;
  }

  get dartString(): string {
    return this._dartString;
  }
}