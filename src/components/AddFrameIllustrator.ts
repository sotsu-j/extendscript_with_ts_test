import { __Base__ } from "./AddFrame";

export default class AddFrameIllustrator implements __Base__ {
    add = (text: string, width: number = 100) => {
        const x = 100;
        const y = 100;
        const doc = app.activeDocument;
        const pathItem = doc.textFrames.add();
        pathItem.contents = text;
        pathItem.width = width;
        pathItem.height = width;

        // rectangleにアクセスしようとすると、staticだからと怒られる
        //app.activeDocument.pathItems.rectangle(x, y, x + width, y + width)
    }
}