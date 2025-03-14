import * as vscode from 'vscode';
import { XmlNode, parseXml } from './parser';
import * as child_process from 'child_process';

const fxmlElements: string[] = [];

export function activate(context: vscode.ExtensionContext) {
    console.log('FXML Language Mode is now active');

    const javafxScene = ['AccessibleAction', 'AccessibleAttribute', 'AccessibleRole', 'AmbientLight', 'CacheHint', 'Camera', 'CssStyleHelper', 'Cursor', 'DepthTest', 'DirectionalLight', 'Group', 'ImageCursor', 'LightBase', 'Node', 'ParallelCamera', 'Parent', 'PerspectiveCamera', 'PointLight', 'PropertyHelper', 'Scene', 'SceneAntialiasing', 'SnapshotParameters', 'SnapshotResult', 'SpotLight', 'SubScene'];
    const javafxSceneCanvas = ['Canvas', 'GraphicsContext'];
    const javafxSceneChart = ['AreaChart', 'Axis', 'BarChart', 'BubbleChart', 'CategoryAxis', 'Chart', 'LineChart', 'NumberAxis', 'PieChart', 'ScatterChart', 'StackedAreaChart', 'StackedBarChart', 'ValueAxis', 'XYChart'];
    const javafxSceneControl = ['Accordion', 'Alert', 'Button', 'ButtonBar', 'ButtonBase', 'ButtonType', 'Cell', 'CheckBox', 'CheckBoxTreeItem', 'CheckMenuItem', 'ChoiceBox', 'ChoiceDialog', 'ColorPicker', 'ComboBox', 'ComboBoxBase', 'ConstrainedColumnResizeBase', 'ContentDisplay', 'ContextMenu', 'Control', 'ControlUtils', 'CustomMenuItem', 'DateCell', 'DatePicker', 'Dialog', 'DialogEvent', 'DialogPane', 'FXDialog', 'FocusModel', 'HeavyweightDialog', 'Hyperlink', 'IndexRange', 'IndexedCell', 'Label', 'Labeled', 'ListCell', 'ListView', 'Menu', 'MenuBar', 'MenuButton', 'MenuItem', 'MultipleSelectionModel', 'MultipleSelectionModelBase', 'OverrunStyle', 'Pagination', 'PasswordField', 'PopupControl', 'ProgressBar', 'ProgressIndicator', 'RadioButton', 'RadioMenuItem', 'ResizeFeaturesBase', 'ScrollBar', 'ScrollPane', 'ScrollToEvent', 'SelectionMode', 'SelectionModel', 'Separator', 'SeparatorMenuItem', 'SingleSelectionModel', 'Skin', 'SkinBase', 'Skinnable', 'Slider', 'SortEvent', 'Spinner', 'SpinnerValueFactory', 'SplitMenuButton', 'SplitPane', 'Tab', 'TabPane', 'TableCell', 'TableColumn', 'TableColumnBase', 'TableFocusModel', 'TablePosition', 'TablePositionBase', 'TableRow', 'TableSelectionModel', 'TableUtil', 'TableView', 'TextArea', 'TextField', 'TextFormatter', 'TextInputControl', 'TextInputDialog', 'TitledPane', 'Toggle', 'ToggleButton', 'ToggleGroup', 'ToolBar', 'Tooltip', 'TreeCell', 'TreeItem', 'TreeSortMode', 'TreeTableCell', 'TreeTableColumn', 'TreeTablePosition', 'TreeTableRow', 'TreeTableView', 'TreeUtil', 'TreeView'];
    const javafxSceneControlCell = ['CellUtils', 'CheckBoxListCell', 'CheckBoxTableCell', 'CheckBoxTreeCell', 'CheckBoxTreeTableCell', 'ChoiceBoxListCell', 'ChoiceBoxTableCell', 'ChoiceBoxTreeCell', 'ChoiceBoxTreeTableCell', 'ComboBoxListCell', 'ComboBoxTableCell', 'ComboBoxTreeCell', 'ComboBoxTreeTableCell', 'DefaultTreeCell', 'MapValueFactory', 'ProgressBarTableCell', 'ProgressBarTreeTableCell', 'PropertyValueFactory', 'TextFieldListCell', 'TextFieldTableCell', 'TextFieldTreeCell', 'TextFieldTreeTableCell', 'TreeItemPropertyValueFactory'];
    const javafxSceneControlSkin = ['AccordionSkin', 'ButtonBarSkin', 'ButtonSkin', 'CellSkinBase', 'CheckBoxSkin', 'ChoiceBoxSkin', 'ColorPalette', 'ColorPickerSkin', 'ComboBoxBaseSkin', 'ComboBoxListViewSkin', 'ComboBoxMode', 'ComboBoxPopupControl', 'ContextMenuSkin', 'DateCellSkin', 'DatePickerSkin', 'HyperlinkSkin', 'LabelSkin', 'LabeledSkinBase', 'ListCellSkin', 'ListViewSkin', 'MenuBarSkin', 'MenuButtonSkin', 'MenuButtonSkinBase', 'NestedTableColumnHeader', 'PaginationSkin', 'ProgressBarSkin', 'ProgressIndicatorSkin', 'RadioButtonSkin', 'ScrollBarSkin', 'ScrollPaneSkin', 'SeparatorSkin', 'SliderSkin', 'SpinnerSkin', 'SplitMenuButtonSkin', 'SplitPaneSkin', 'TabPaneSkin', 'TableCellSkin', 'TableCellSkinBase', 'TableColumnHeader', 'TableHeaderRow', 'TableRowSkin', 'TableRowSkinBase', 'TableSkinUtils', 'TableViewSkin', 'TableViewSkinBase', 'TextAreaSkin', 'TextFieldSkin', 'TextInputControlSkin', 'TitledPaneSkin', 'ToggleButtonSkin', 'ToolBarSkin', 'TooltipSkin', 'TreeCellSkin', 'TreeTableCellSkin', 'TreeTableRowSkin', 'TreeTableViewSkin', 'TreeViewSkin', 'VirtualContainerBase', 'VirtualFlow'];
    const javafxSceneEffect = ['Blend', 'BlendMode', 'Bloom', 'BlurType', 'BoxBlur', 'ColorAdjust', 'ColorInput', 'DisplacementMap', 'DropShadow', 'Effect', 'EffectChangeListener', 'FloatMap', 'GaussianBlur', 'Glow', 'ImageInput', 'InnerShadow', 'Light', 'Lighting', 'MotionBlur', 'PerspectiveTransform', 'Reflection', 'SepiaTone', 'Shadow'];
    const javafxSceneImage = ['Image', 'ImageView', 'PixelBuffer', 'PixelFormat', 'PixelReader', 'PixelWriter', 'WritableImage', 'WritablePixelFormat'];
    const javafxSceneInput = ['Clipboard', 'ClipboardContent', 'ContextMenuEvent', 'DataFormat', 'DragEvent', 'Dragboard', 'GestureEvent', 'InputEvent', 'InputMethodEvent', 'InputMethodHighlight', 'InputMethodRequests', 'InputMethodTextRun', 'KeyCharacterCombination', 'KeyCode', 'KeyCodeCombination', 'KeyCombination', 'KeyEvent', 'Mnemonic', 'MouseButton', 'MouseDragEvent', 'MouseEvent', 'PickResult', 'RotateEvent', 'ScrollEvent', 'SwipeEvent', 'TouchEvent', 'TouchPoint', 'TransferMode', 'ZoomEvent'];
    const javafxSceneLayout = ['AnchorPane', 'Background', 'BackgroundConverter', 'BackgroundFill', 'BackgroundImage', 'BackgroundPosition', 'BackgroundRepeat', 'BackgroundSize', 'Border', 'BorderConverter', 'BorderImage', 'BorderPane', 'BorderRepeat', 'BorderStroke', 'BorderStrokeStyle', 'BorderWidths', 'ColumnConstraints', 'ConstraintsBase', 'CornerRadii', 'FlowPane', 'GridPane', 'HBox', 'Pane', 'Priority', 'Region', 'RowConstraints', 'StackPane', 'TilePane', 'VBox'];
    const javafxScenePaint = ['Color', 'CycleMethod', 'ImagePattern', 'LinearGradient', 'Material', 'Paint', 'PhongMaterial', 'RadialGradient', 'Stop'];
    const javafxSceneRobot = ['Robot'];
    const javafxSceneShape = ['Arc', 'ArcTo', 'ArcType', 'Box', 'Circle', 'ClosePath', 'CubicCurve', 'CubicCurveTo', 'CullFace', 'Cylinder', 'DrawMode', 'Ellipse', 'FillRule', 'HLineTo', 'Line', 'LineTo', 'Mesh', 'MeshView', 'MoveTo', 'ObservableFaceArray', 'Path', 'PathElement', 'Polygon', 'Polyline', 'PredefinedMeshManager', 'QuadCurve', 'QuadCurveTo', 'Rectangle', 'SVGPath', 'Shape', 'Shape3D', 'Sphere', 'StrokeLineCap', 'StrokeLineJoin', 'StrokeType', 'TriangleMesh', 'VLineTo', 'VertexFormat'];
    const javafxSceneText = ['Font', 'FontPosture', 'FontSmoothingType', 'FontWeight', 'HitInfo', 'Text', 'TextAlignment', 'TextBoundsType', 'TextFlow'];
    const javafxSceneTransform = ['Affine', 'MatrixType', 'NonInvertibleTransformException', 'Rotate', 'Scale', 'Shear', 'Transform', 'TransformChangedEvent', 'Translate'];

    fxmlElements.push(
        ...javafxScene,
        ...javafxSceneCanvas,
        ...javafxSceneChart,
        ...javafxSceneControl,
        ...javafxSceneControlCell,
        ...javafxSceneControlSkin,
        ...javafxSceneEffect,
        ...javafxSceneImage,
        ...javafxSceneInput,
        ...javafxSceneLayout,
        ...javafxScenePaint,
        ...javafxSceneRobot,
        ...javafxSceneShape,
        ...javafxSceneText,
        ...javafxSceneTransform,
    );

    const completionProvider = vscode.languages.registerCompletionItemProvider('fxml', {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const completionItems: vscode.CompletionItem[] = [];

            fxmlElements.forEach(element => {
                const item = new vscode.CompletionItem(element);
                item.kind = vscode.CompletionItemKind.Property;
                // last > is not needed because < and > is in "autoClosingPairs"
                item.insertText = new vscode.SnippetString(`${element}>\${1:}\</${element}`);
                completionItems.push(item);
            });

            return completionItems;
        }
    }, '<');

    const formatProvider = vscode.languages.registerDocumentFormattingEditProvider('fxml', {
        provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
            const text = document.getText();
            const formatted = formatXml(text);
            const range = new vscode.Range(
                document.positionAt(0),
                document.positionAt(text.length)
            );
            return [vscode.TextEdit.replace(range, formatted)];
        }
    });

    const setSceneBuilderPath = vscode.commands.registerCommand('fxml.setSceneBuilderPath', async () => {
        const options: vscode.OpenDialogOptions = {
            canSelectMany: false,
            filters: process.platform === 'win32' ? {
                'Executable': ['exe']
            } : process.platform === 'darwin' ? {
                'Application': ['app'],
                'Executable': ['*']
            } : {
                'Executable': ['*']
            },
            title: 'Select Scene Builder Executable'
        };

        const fileUri = await vscode.window.showOpenDialog(options);
        if (fileUri && fileUri[0]) {
            const sceneBuilderPath = fileUri[0].fsPath;
            await context.globalState.update('sceneBuilderPath', sceneBuilderPath);
            vscode.window.showInformationMessage(`Scene Builder path set to: ${sceneBuilderPath}`);
        }
    });

    const removeSceneBuilderPath = vscode.commands.registerCommand('fxml.removeSceneBuilderPath', async () => {
        const sceneBuilderPath = context.globalState.get<string>('sceneBuilderPath');
        if (sceneBuilderPath) {
            const result = await vscode.window.showWarningMessage(
                'Are you sure you want to remove the Scene Builder path?',
                'Yes',
                'No'
            );

            if (result === 'Yes') {
                await context.globalState.update('sceneBuilderPath', undefined);
                vscode.window.showInformationMessage('Scene Builder path has been removed');
            }
        } else {
            vscode.window.showInformationMessage('Scene Builder path is not set');
        }
    });

    const openInSceneBuilder = vscode.commands.registerCommand('fxml.openInSceneBuilder', async (uri: vscode.Uri) => {
        let sceneBuilderPath = context.globalState.get<string>('sceneBuilderPath');

        if (!sceneBuilderPath) {
            if (process.platform === 'win32') {
                // scoop install path
                const userProfile = process.env.USERPROFILE;
                const scoopPath = `${userProfile}\\scoop\\apps\\scene-builder\\current\\SceneBuilder.exe`;

                // AppData Local path
                const localAppData = process.env.LOCALAPPDATA;
                const appDataPath = `${localAppData}\\SceneBuilder\\SceneBuilder.exe`;

                try {
                    await vscode.workspace.fs.stat(vscode.Uri.file(scoopPath));
                    sceneBuilderPath = scoopPath;
                    await context.globalState.update('sceneBuilderPath', sceneBuilderPath);
                    vscode.window.showInformationMessage(`Scene Builder found at scoop location: ${sceneBuilderPath}`);
                } catch {
                    try {
                        await vscode.workspace.fs.stat(vscode.Uri.file(appDataPath));
                        sceneBuilderPath = appDataPath;
                        await context.globalState.update('sceneBuilderPath', sceneBuilderPath);
                        vscode.window.showInformationMessage(`Scene Builder found at AppData location: ${sceneBuilderPath}`);
                    } catch {
                        const result = await vscode.window.showWarningMessage(
                            'Scene Builder path is not set. Would you like to set it now?',
                            'Yes',
                            'No'
                        );

                        if (result === 'Yes') {
                            vscode.commands.executeCommand('fxml.setSceneBuilderPath');
                        }
                        return;
                    }
                }
            } else if (process.platform === 'darwin') {
                // macOS default path
                const macPath = '/Applications/SceneBuilder.app';
                try {
                    await vscode.workspace.fs.stat(vscode.Uri.file(macPath));
                    sceneBuilderPath = macPath;
                    await context.globalState.update('sceneBuilderPath', sceneBuilderPath);
                    vscode.window.showInformationMessage(`Scene Builder found at default location: ${sceneBuilderPath}`);
                } catch {
                    const result = await vscode.window.showWarningMessage(
                        'Scene Builder path is not set. Would you like to set it now?',
                        'Yes',
                        'No'
                    );

                    if (result === 'Yes') {
                        vscode.commands.executeCommand('fxml.setSceneBuilderPath');
                    }
                    return;
                }
            } else {
                const result = await vscode.window.showWarningMessage(
                    'Scene Builder path is not set. Would you like to set it now?',
                    'Yes',
                    'No'
                );

                if (result === 'Yes') {
                    vscode.commands.executeCommand('fxml.setSceneBuilderPath');
                }
                return;
            }
        }

        try {
            const filePath = uri.fsPath;
            if (process.platform === 'darwin' && sceneBuilderPath.endsWith('.app')) {
                // macOS when .app bundle
                child_process.exec(`open -a "${sceneBuilderPath}" --args "${filePath}"`, async (error) => {
                    if (error) {
                        const result = await vscode.window.showErrorMessage(
                            'Failed to open Scene Builder. Would you like to set a new Scene Builder path?',
                            'Yes',
                            'No'
                        );
                        if (result === 'Yes') {
                            vscode.commands.executeCommand('fxml.setSceneBuilderPath');
                        }
                    }
                });
            } else {
                // normal executable file
                child_process.exec(`"${sceneBuilderPath}" "${filePath}"`, async (error) => {
                    if (error) {
                        const result = await vscode.window.showErrorMessage(
                            'Failed to open Scene Builder. Would you like to set a new Scene Builder path?',
                            'Yes',
                            'No'
                        );
                        if (result === 'Yes') {
                            vscode.commands.executeCommand('fxml.setSceneBuilderPath');
                        }
                    }
                });
            }
        } catch (error) {
            const result = await vscode.window.showErrorMessage(
                'Error opening Scene Builder. Would you like to set a new Scene Builder path?',
                'Yes',
                'No'
            );
            if (result === 'Yes') {
                vscode.commands.executeCommand('fxml.setSceneBuilderPath');
            }
        }
    });

    context.subscriptions.push(
        completionProvider,
        formatProvider,
        setSceneBuilderPath,
        removeSceneBuilderPath,
        openInSceneBuilder
    );
}

let foundFirstFxmlElement: boolean = false;

function formatNode(node: XmlNode, depth: number, parentName?: string): string {
    const indent = '  '.repeat(depth);  // 2 spaces
    let result = '';

    const groupTags: string[] = ['center', 'left', 'right', 'top', 'bottom'];
    let foundXmlDecl = false;

    function isLastElementChild(index: number): boolean {
        for (let i = index + 1; i < node.children.length; i++) {
            if (node.children[i].type === 'element') {
                return false;
            }
        }
        return true;
    }

    function shouldAddNewline(tagName: string, isLast: boolean, parentTagName?: string): boolean {
        return groupTags.includes(tagName) && !isLast;
    }

    for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        const isLastElement = isLastElementChild(i);

        if (child.type === 'declaration') {
            result += child.rawTagContent + '\n';
            if (child.name === 'xml') {
                result += '\n';
            }
        } else if (child.type === 'comment') {
            if (child.content) {
                result += indent + '<!--' + child.content + '-->\n';
            } else {
                result += indent + '<!--  -->\n';
            }
        } else if (child.type === 'element') {
            // check first appearance of JavaFX element
            if (!foundFirstFxmlElement && child.name && fxmlElements.includes(child.name)) {
                result += '\n';
                foundFirstFxmlElement = true;
            }

            if (child.rawTagContent && child.rawTagContent.includes('\n')) {
                const openTag = child.rawTagContent.substring(0, child.rawTagContent.length - 1);
                result += indent + openTag.split('\n').join('\n' + indent) + '>';
            } else {
                result += indent + '<' + child.name;
                if (child.attributes) {
                    child.attributes.forEach((value, key) => {
                        result += ` ${key}="${value}"`;
                    });
                }
                if (child.children.length === 0) {
                    result += '/>';
                } else {
                    result += '>';
                }
            }

            if (child.children.length === 0) {
                result += '\n';
            } else if (child.children.length === 1 && child.children[0].type === 'text') {
                result += child.children[0].content + '</' + child.name + '>\n';
            } else {
                result += '\n';
                result += formatNode(child, depth + 1, child.name);
                result += indent + '</' + child.name + '>\n';
                if (shouldAddNewline(child.name || '', isLastElement, parentName)) {
                    result += '\n';
                }
            }
        } else if (child.type === 'text') {
            if (child.content && child.content.trim()) {
                result += indent + child.content.trim() + '\n';
            }
        }
    }

    return result;
}

function formatXml(xml: string): string {
    foundFirstFxmlElement = false;
    const root = parseXml(xml);
    return formatNode(root, 0).trim() + '\n';
}

export function deactivate() { } 