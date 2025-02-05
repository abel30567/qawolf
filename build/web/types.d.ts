export declare type SelectorPart = {
    name: 'css' | 'text';
    body: string;
};
export declare type ParsedSelector = {
    capture?: boolean;
    parts: SelectorPart[];
};
export declare type Evaluator = {
    createTextSelector(element: Element): string | undefined;
    isVisible(element: Element): boolean;
    querySelector(selector: ParsedSelector, root: Node): HTMLElement;
};
