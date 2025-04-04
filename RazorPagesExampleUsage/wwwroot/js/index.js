﻿"use strict";

let site;

import("./site.js").then((module) => {
    site = module;

    // Launch your front end here
    LaunchApp();
});

async function LaunchApp() {
    let JsvWasm = await site.GetJsvWasm();

    // Get exports from any web assemblies exported.
    let jsvExports = await JsvWasm.GetExportedAssembly("MyTransformerLib");

    let exampleComponentDtoJson = $("#hfExampleComp_DtoJson").val();
    let compInfoJson = $("#hfExampleComp_CompInfoJson").val();
    let resStr = jsvExports.MyTransformerLib.MyTransformerRegistry.Invoke("MyExampleCompTransformer", exampleComponentDtoJson, compInfoJson);
    alert("MyExampleCompTransformer says: " + resStr);
}


