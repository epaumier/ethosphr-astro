/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
    var myString: string;
    function myFunction(): URL;
}

global.myFunction = () => {
    return window.location.href;
}

    export {};
