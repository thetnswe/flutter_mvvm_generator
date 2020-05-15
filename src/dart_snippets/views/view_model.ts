import * as _ from "lodash";
import { Base } from "../architecture/base";

export class ViewModel extends Base {
  private _dartString: string;

  constructor(fileName: string, suffix: string, private projectName?: string) {

    super(fileName, suffix);
    let initialPath = this.projectName === undefined ? '../../' : `package:${this.projectName}/`;
    this._dartString = `import 'package:stacked/stacked.dart';

class ${this.className} extends BaseViewModel {
  ${this.className}(){
    loadItems();
  }
  
  // Add ViewModel specific code here
  Future<void> loadItems() async {
    setBusy(true);
    //Write your models loading codes here

    //Let other views to render again
    setBusy(false);
    notifyListeners();
  }

}`;
  }

  get dartString(): string {
    return this._dartString;
  }

  get demoString(): string {
    let initialPath = this.projectName === undefined ? '../../' : `package:${this.projectName}/`;
    return `import 'package:stacked/stacked.dart';

class HomeViewModel extends BaseViewModel {
  int _counter;

  HomeViewModel({int counter = 0}) : this._counter = counter;

  int get counter => this._counter;
  set counter(int value) {
    this._counter = value;
    notifyListeners();
  }

  void increment() => this.counter += 1;
}`;
  }
}