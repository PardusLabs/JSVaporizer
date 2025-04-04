﻿using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace JSVComponent;

public class ExampleNested : Component
{

    public ExampleNested(string unqPrefix) : base(unqPrefix) {
        NamedSubComponents.Add(new SubCompDefinition("theTextInput", typeof(ExampleTextInput)));
    }

    protected override Task RenderBody(IHtmlHelper Html, HtmlContentBuilder htmlCB)
    {
        return Task.CompletedTask;
    }
}


