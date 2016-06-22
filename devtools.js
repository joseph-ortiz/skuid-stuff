// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The function below is executed in the context of the inspected page.
var page_getProperties = function() {
    var skuidApi  = window.skuid;
    var models = skuid.model.getModelsList();
    var modelNames = models.map(function(m) { return Object.getOwnPropertyNames(m.dataMap)[0];
    var key = Object.getOwnPropertyNames(skuid.model.getModelsList()[0].dataMap)[0]; //HARD coded value.
    var data  = skuid.model.getModelsList()[0].dataMap[key];
    var props = Object.getOwnPropertyNames(skuid.model.getModelsList()[0].dataMap[Object.getOwnPropertyNames(skuid.model.getModelsList()[0].dataMap)[0]])
        i//var data = window.jQuery && $0 ? jQuery.data($0) : {};

    // Make a shallow copy with a null prototype, so that sidebar does not
    // expose prototype.
    var copy = { __proto__: null };
    for (var i = 0; i < props.length; ++i)
        copy[props[i]] = data[props[i]];

   var node1 = {
       "ModelTitle": copy
       } 
    return node1;
    return copy;
}

chrome.devtools.panels.elements.createSidebarPane(
        "Skuid  Properties",
        function(sidebar) {
            function updateElementProperties() {
                var pageProp = page_getProperties.toString();
                console.log(pageProp);

                //var m = page_getProperties();
                //alert(m)
                sidebar.setExpression("(" + page_getProperties.toString() + ")()", "title", function(){
                    console.log("set Expression triggered"); 
                });
            }
            updateElementProperties();
            chrome.devtools.panels.elements.onSelectionChanged.addListener(
                    updateElementProperties);
        });
