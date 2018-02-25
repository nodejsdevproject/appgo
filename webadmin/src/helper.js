export function translateObject(LocalizedStrings, language, obj) {
    for (var k in obj) {
        if (typeof obj[k] == "object" && obj[k] !== null) {
            translateObject(LocalizedStrings, language, obj[k]);
        }
        else {
            if (typeof obj[k] == "string") {
                if (obj[k].startsWith("t[")) {
                    obj[k] = getEvalValueFromLocalizedStrings(LocalizedStrings, language, obj[k], "LocalizedStrings[language]." + obj[k].replace("t[", "").replace("]", ""));
                }
            }
        }

    }
    return obj;
}

export function translateEntitySchema(LocalizedStrings, language, schames) {
    for (var sch in schames) {
        schames[sch].jsonSchema.title = getEvalValueFromLocalizedStrings(LocalizedStrings, language, schames[sch].jsonSchema.title, "LocalizedStrings[language].entity." + schames[sch].collectionName + ".title");
        schames[sch].jsonSchema.description = getEvalValueFromLocalizedStrings(LocalizedStrings, language, schames[sch].jsonSchema.title, "LocalizedStrings[language].entity." + schames[sch].collectionName + ".description");
        for (var prop in schames[sch].jsonSchema.properties) {
            schames[sch].jsonSchema.properties[prop].title = getEvalValueFromLocalizedStrings(LocalizedStrings, language, schames[sch].jsonSchema.properties[prop].title, "LocalizedStrings[language].entity." + schames[sch].collectionName + ".properties." + prop + ".title");
            schames[sch].jsonSchema.properties[prop].description = getEvalValueFromLocalizedStrings(LocalizedStrings, language, schames[sch].jsonSchema.properties[prop].description, "LocalizedStrings[language].entity." + schames[sch].collectionName + ".properties." + prop + ".description");
   
        }
    }
    return schames;
}

export function getEvalValueFromLocalizedStrings(LocalizedStrings, language, orignal, express) {
    var obj = eval(express); 
    return obj ? obj : orignal
}

