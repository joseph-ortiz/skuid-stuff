// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The function below is executed in the context of the inspected page.
var page_getProperties = function() {
    console.log("Entered skuid dev tools");

    var models = skuid.model.getModelsList();
    models = models.map(function(m){
        return {
            Id: m.id,
            model: m
        }
    });
    return {
        SkuidModels: models
    };
}

chrome.devtools.panels.elements.createSidebarPane(
        "Skuid Model properties",
        function(sidebar) {
            function updateElementProperties() {
                var pageProp = page_getProperties.toString();
                console.log(pageProp);
                sidebar.setExpression("(" + page_getProperties.toString() + ")()", "title", function(){
                    console.log("set Expression triggered"); 
                });
            }
            updateElementProperties();
            chrome.devtools.panels.elements.onSelectionChanged.addListener(
                    updateElementProperties);
        });

   chrome.devtools.panels.create("skuid-dev-tools",
   "",
   "Panel.html"
   function(panel) {
      panel.setPage("Panel.html"); 
       });
