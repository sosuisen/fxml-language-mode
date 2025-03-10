import * as vscode from 'vscode';

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

    context.subscriptions.push(completionProvider, formatProvider);
}

interface XmlNode {
    type: 'element' | 'text' | 'declaration' | 'comment';
    name?: string;
    attributes?: Map<string, string>;
    children: XmlNode[];
    content?: string;
    rawTagContent?: string;
}

function parseXml(xml: string): XmlNode {
    const root: XmlNode = { type: 'element', children: [] };
    const stack: XmlNode[] = [root];
    let current = '';
    let inTag = false;
    let inDeclaration = false;
    let inComment = false;
    let tagStart = 0;

    for (let i = 0; i < xml.length; i++) {
        const char = xml[i];

        // Comment block
        if (char === '<' && xml.substring(i, i + 4) === '<!--') {
            inComment = true;
            current = '';
            i += 3;
            continue;
        }

        if (inComment && char === '-' && xml.substring(i, i + 3) === '-->') {
            stack[stack.length - 1].children.push({
                type: 'comment',
                content: current,
                children: []
            });
            inComment = false;
            current = '';
            i += 2;
            continue;
        }

        if (inComment) {
            current += char;
            continue;
        }

        // Tag
        if (char === '<') {
            // Start XML Declaration
            if (xml.substring(i, i + 2) === '<?') {
                inDeclaration = true;
                inTag = true;
                tagStart = i;
                i++;
                continue;
            }
            // End tag
            if (xml.substring(i, i + 2) === '</') {
                if (current) {
                    stack[stack.length - 1].children.push({
                        type: 'text',
                        content: current,
                        children: []
                    });
                }
                current = '';
                stack.pop();
                while (i < xml.length && xml[i] !== '>') i++;
                continue;
            }
            // Start tag
            inTag = true;
            tagStart = i;
            if (current) {
                stack[stack.length - 1].children.push({
                    type: 'text',
                    content: current,
                    children: []
                });
            }
            current = '';
            continue;
        }

        if (char === '>') {
            // End XML Declaration
            if (inDeclaration && xml[i - 1] === '?') {
                const rawContent = xml.substring(tagStart, i + 1);
                // <?の後の文字列を取得（スペースまで）
                const declName = rawContent.substring(2, rawContent.indexOf(' ')).trim();
                const decl: XmlNode = {
                    type: 'declaration',
                    name: declName,
                    attributes: parseAttributes(current),
                    children: [],
                    rawTagContent: rawContent
                };
                stack[stack.length - 1].children.push(decl);
                inDeclaration = false;
                inTag = false;
                current = '';
                continue;
            }

            if (inTag) {
                const rawContent = xml.substring(tagStart, i + 1);
                const isSelfClosing = current.trim().endsWith('/') || xml[i - 1] === '/';
                const tagContent = isSelfClosing ? current.replace(/\s*\/$/, '') : current;
                // Empty element
                if (isSelfClosing) {
                    const node: XmlNode = {
                        type: 'element',
                        name: tagContent.split(/\s+/)[0],
                        attributes: parseAttributes(tagContent),
                        children: [],
                        rawTagContent: rawContent
                    };
                    stack[stack.length - 1].children.push(node);
                } else {
                    // Element
                    const node: XmlNode = {
                        type: 'element',
                        name: current.split(/\s+/)[0],
                        attributes: parseAttributes(current),
                        children: [],
                        rawTagContent: rawContent
                    };
                    stack[stack.length - 1].children.push(node);
                    stack.push(node);
                }
                inTag = false;
                current = '';
                continue;
            }
        }

        current += char;
    }

    return root;
}

function parseAttributes(tagContent: string): Map<string, string> {
    const attrs = new Map<string, string>();
    const parts = tagContent.split(/\s+/);
    if (parts.length <= 1) return attrs;

    let currentAttr = '';
    let currentValue = '';
    let inValue = false;
    let quote = '';
    let collectingAttrName = false;
    let waitingForValue = false;  // =の後の値待ち状態を追加

    for (let i = 1; i < parts.length; i++) {
        const part = parts[i];
        if (!part) continue;

        if (!inValue) {
            if (waitingForValue) {
                // =の後の値を処理
                if (part.startsWith('"') || part.startsWith("'")) {
                    if (part.endsWith(part[0])) {
                        // 一つのパートで完結する値
                        attrs.set(currentAttr, part.slice(1, -1));
                        currentAttr = '';
                        waitingForValue = false;
                    } else {
                        // 複数パートにまたがる値の開始
                        quote = part[0];
                        currentValue = part.substring(1);
                        inValue = true;
                        waitingForValue = false;
                    }
                }
            } else if (collectingAttrName) {
                // 属性名の続きを収集中
                if (part.includes('=')) {
                    const [attrNameEnd, ...valueParts] = part.split('=');
                    currentAttr = (currentAttr + ' ' + attrNameEnd).trim();
                    collectingAttrName = false;
                    const valueStart = valueParts.join('=');

                    if (!valueStart) {
                        waitingForValue = true;
                    } else if ((valueStart.startsWith('"') || valueStart.startsWith("'")) &&
                        (valueStart.endsWith('"') || valueStart.endsWith("'"))) {
                        attrs.set(currentAttr, valueStart.slice(1, -1));
                        currentAttr = '';
                    } else if (valueStart.startsWith('"') || valueStart.startsWith("'")) {
                        quote = valueStart[0];
                        currentValue = valueStart.substring(1);
                        inValue = true;
                    }
                } else {
                    currentAttr = (currentAttr + ' ' + part).trim();
                }
            } else if (part.includes('=')) {
                const [attrName, ...valueParts] = part.split('=');
                currentAttr = attrName.trim();
                const valueStart = valueParts.join('=');

                if (!valueStart) {
                    waitingForValue = true;
                } else if ((valueStart.startsWith('"') || valueStart.startsWith("'")) &&
                    (valueStart.endsWith('"') || valueStart.endsWith("'"))) {
                    attrs.set(currentAttr, valueStart.slice(1, -1));
                    currentAttr = '';
                } else if (valueStart.startsWith('"') || valueStart.startsWith("'")) {
                    quote = valueStart[0];
                    currentValue = valueStart.substring(1);
                    inValue = true;
                }
            } else {
                currentAttr = part;
                collectingAttrName = true;
            }
        } else {
            if (part.endsWith(quote)) {
                currentValue += ' ' + part.substring(0, part.length - 1);
                attrs.set(currentAttr, currentValue);
                currentAttr = '';
                currentValue = '';
                inValue = false;
                quote = '';
            } else {
                currentValue += ' ' + part;
            }
        }
    }

    return attrs;
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
            // JavaFX要素の最初の出現をチェック
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