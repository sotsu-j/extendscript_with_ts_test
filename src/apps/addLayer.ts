import "extendscript-es5-shim-ts"
import dialog from "../components/dialog"
import AddFrame from "../components/AddFrame";

const res = dialog();

if (res) {
    const frame = new AddFrame();
    frame.add(res[0], res[1]);
}