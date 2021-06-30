import { __Base__ } from "./AddFrame";

export default class AddFrameInDesign implements __Base__ {
    add = (text: string, width: number) => {
        const x = 100;
        const y = 100;
        const layer = app.activeDocument.activeLayer as Layer;
        const textFrame = app.activeDocument.textFrames.add(layer);
        textFrame.properties = {
            geometricBounds: [x, y, x + width, y + width],
            contents: text,
        }
    }
}