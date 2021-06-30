import AddFrameIllustrator from "./AddFrameIllustrator";
import AddFrameInDesign from "./AddFrameInDesign";

type Constructor = new (...args: any[]) => __Base__;

const mixin = (): Constructor => {
    switch (app.name) {
        default:
        case "Adobe Illustrator":
            return AddFrameIllustrator;
        case "Adobe InDesign":
            return AddFrameInDesign;
    }
}

export class __Base__ {
    add = (text: string, width: number) => { }
}

export default class Image extends mixin() {
    constructor() {
        super();
    }
}
