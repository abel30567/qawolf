"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePatchHandle = exports.patchCode = exports.indentPatch = exports.canPatch = exports.PATCH_HANDLE = exports.CREATE_HANDLE = void 0;
const format_1 = require("./format");
exports.CREATE_HANDLE = 'qawolf.create(';
exports.PATCH_HANDLE = '// 🐺 create code here';
exports.canPatch = (code) => {
    return code.includes(exports.PATCH_HANDLE);
};
exports.indentPatch = (code, patch) => {
    /**
     * Match the indentation of the symbol.
     */
    const numSpaces = format_1.getIndentation(code, exports.PATCH_HANDLE);
    return format_1.indent(patch, numSpaces, 1);
};
exports.patchCode = ({ code, patch }) => {
    if (!exports.canPatch(code)) {
        throw new Error('Cannot patch without handle');
    }
    const patchedCode = code.replace(exports.PATCH_HANDLE, exports.indentPatch(code, patch));
    return patchedCode;
};
exports.removePatchHandle = (code) => {
    return format_1.removeLinesIncluding(code, exports.PATCH_HANDLE);
};
//# sourceMappingURL=patchCode.js.map