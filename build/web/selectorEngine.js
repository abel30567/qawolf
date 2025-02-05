"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElementMatchingSelectorParts = exports.isMatch = exports.getElementText = exports.buildSelectorParts = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
let evaluator;
try {
    evaluator = require('playwright-evaluator');
}
catch (e) {
    // this will only error on server side tests that
    // do not require the evaluator but depend on this file
}
const { createTextSelector, querySelector } = evaluator || {};
exports.buildSelectorParts = (cues) => {
    const levels = [...new Set(cues.map((cue) => cue.level))];
    // sort descending
    levels.sort((a, b) => b - a);
    const parts = [];
    levels.forEach((level) => {
        const cuesForLevel = cues.filter((cue) => cue.level === level);
        const textCues = cuesForLevel.filter((cue) => cue.type === 'text');
        if (textCues.length) {
            parts.push({ name: 'text', body: textCues[0].value });
            return;
        }
        cuesForLevel.sort((a, b) => {
            if (a.type === 'tag')
                return -1;
            if (b.type === 'tag')
                return 1;
            return 0;
        });
        const bodyValues = cuesForLevel.map((cue) => cue.value);
        parts.push({ name: 'css', body: bodyValues.join('') });
    });
    return parts;
};
exports.getElementText = (element) => {
    return createTextSelector(element);
};
exports.isMatch = ({ selectorParts, target }) => {
    // We must pass `target.ownerDocument` rather than `document`
    // because sometimes this is called from other frames.
    const result = querySelector({ parts: selectorParts }, target.ownerDocument);
    return result === target;
};
exports.getElementMatchingSelectorParts = (selectorParts, root) => {
    return querySelector({ parts: selectorParts }, root);
};
//# sourceMappingURL=selectorEngine.js.map