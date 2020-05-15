// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from "path";
import * as _ from "lodash";
import { Utils } from './utils/utils';
import { Architecture } from './utils/architecture';
import { ViewFile } from './utils/view_file';
import { VsCodeActions } from './utils/vs_code_actions';
import { WidgetFile } from './utils/widget_file';
import { FileSystemManager } from './utils/file_system_manager';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let initializeDisposable = vscode.commands.registerCommand('mvvm-generator.initializeArchitecture', async () => {
		if (!FileSystemManager.isFlutterProject()) { return; }

		let rootPath = VsCodeActions.rootPath;
		let projectPath = VsCodeActions.rootPath;
		
		if (_.isUndefined(rootPath)) { return; }
		if (_.isUndefined(projectPath)) { return; }

		new Architecture(projectPath, path.join(rootPath, 'lib')).init();
		new ViewFile(rootPath, "home").createDemoViews();
	});

	let viewDisposable = vscode.commands.registerCommand('mvvm-generator.createViews', async () => {

		if (!FileSystemManager.isFlutterProject()) { return; }

		let inputString = await VsCodeActions.getInputString('Enter class name', async (value) => {
			if (value.length === 0) {
				return 'Enter class name';
			}

			if (value.toLowerCase() === 'view') {
				return 'View is not a valid class name';
			}

			return undefined;
		});

		if (inputString.length === 0 || inputString.toLowerCase() === 'view') {
			console.warn("activate: inputString length is 0");
			VsCodeActions.showErrorMessage("Invalid name for file");
			return;
		}

		console.debug(`fileName: { ${inputString} }`);

		let nameArray = inputString.trim().split('/');
		let folders: string[] = [];
		if (nameArray.length > 1) {
			let folderList = nameArray.splice(0, nameArray.length - 1).map(element => { return element; });
			console.debug(`folderlist: { ${folderList} }`);
			folders = folderList;
		}

		let formattedInputString = _.last(nameArray);
		if (formattedInputString === undefined) {
			console.error('formattedInputString is undefined');
			return;
		}
		let fileName = Utils.processFileName(formattedInputString);
		console.debug(`activate: fileName: ${fileName}`);

		let rootPath = VsCodeActions.rootPath;
		if (rootPath === undefined) { return; }
		new ViewFile(rootPath, fileName, folders).createResponsiveViews();
	});


	let widgetDisposable = vscode.commands.registerCommand('mvvm-generator.createWidget', async () => {

		if (!FileSystemManager.isFlutterProject()) { return; }

		let inputString = await VsCodeActions.getInputString('Enter class name', async (value) => {
			if (value.length === 0) {
				return 'Enter class name';
			}
			if (value.toLowerCase() === 'widget') {
				return 'Widget is not a valid class name';
			}
			return undefined;
		});

		if (inputString.length === 0 || inputString.toLowerCase() === 'widget') {
			console.warn("activate: inputString length is 0");
			VsCodeActions.showErrorMessage("Invalid name for file");
			return;
		}

		let fileName = Utils.processFileName(inputString.trim());
		console.debug(`activate: fileName: ${fileName}`);

		let rootPath = VsCodeActions.rootPath;
		if (rootPath === undefined) { return; }
		new WidgetFile(rootPath, fileName).createResponsiveWidgets();
	});

	context.subscriptions.push(viewDisposable);
	context.subscriptions.push(initializeDisposable);
	context.subscriptions.push(widgetDisposable);

}

// this method is called when your extension is deactivated
export function deactivate() {}
