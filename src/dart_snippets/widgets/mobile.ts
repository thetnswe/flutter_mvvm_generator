import * as _ from 'lodash';
import { Base } from '../architecture/base';

export class Mobile extends Base {

  private _dartString: string;

  constructor(fileName: string, sfileName: string,  suffix: string) {
    super(fileName, suffix);

    this._dartString = `part of ${sfileName}_widget;

class _${this.className} extends ViewModelWidget<${fileName}ViewModel> {

  _${this.className}();

  @override
  Widget build(BuildContext context, ${fileName}ViewModel model) {
    return Center(
      child: Text('${sfileName}_mobile'),
    );
  }
}`;
  }

  get dartString(): string {
    return this._dartString;
  }
}