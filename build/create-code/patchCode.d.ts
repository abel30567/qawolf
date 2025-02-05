declare type PatchOptions = {
    code: string;
    patch: string;
};
export declare const CREATE_HANDLE = "qawolf.create(";
export declare const PATCH_HANDLE = "// \uD83D\uDC3A create code here";
export declare const canPatch: (code: string) => boolean;
export declare const indentPatch: (code: string, patch: string) => string;
export declare const patchCode: ({ code, patch }: PatchOptions) => string;
export declare const removePatchHandle: (code: string) => string;
export {};
