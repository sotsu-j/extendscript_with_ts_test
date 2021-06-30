interface MyPanel extends Window {
    inputGroup: {
        label: StaticText;
        text: EditText;
        width: EditText;
    }
    buttons: {
        executeBtn: Button;
        cancelBtn: Button;
    }
}

const dialog = (): [string, number] | false => {
    const windowRef = `dialog {
	    text: 'テキストフレーム追加',
	    orientation: 'column',
	    alignChildren: 'fill',
		inputGroup: Group {
			label: StaticText { text: 'テキスト　: ' },
			text: EditText { text: "TEST", characters: 10, justify: 'left', enabled: true  },
			width: EditText { text: 100, characters: 5, justify: 'right', enabled: true  },
		}
		buttons: Group{
			orientation: 'row',
			alignChildren: 'right',
			executeBtn: Button { text: '実行' }\
			cancelBtn: Button { text: 'キャンセル' }\
		},
    }`;

    const w = new Window(windowRef) as MyPanel;
    let isExecute = false;

    w.buttons.executeBtn.onClick = () => {
        isExecute = true;
        w.close();
    }
    w.buttons.cancelBtn.onClick = () => {
        w.close();
    }
    w.defaultElement = w.buttons.executeBtn;
    w.cancelElement = w.buttons.cancelBtn;

    w.show();

    return isExecute && [w.inputGroup.text.text, parseInt(w.inputGroup.width.text, 10)];
}

export default dialog;