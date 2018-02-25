// tanslate any object with "lable", "title". How we translate it?
// We find another property with the name "*_text_resis". 
// We could find it in the localizeSrings. 
// That mean this one will translate the obj to the language base on the LocalizedStrings
export function translateObject(LocalizedStrings, language, obj) {
    for (var k in obj) {
        if (typeof obj[k] == "object" && obj[k] !== null) {
            translateObject(LocalizedStrings, language, obj[k]);
        } 
        else {
              // We only apply the proerty with the name "_text_resid" to its owner
            if (k.endsWith("_text_resid")) {
                obj[k.replace('_text_resid', '')] =  eval("LocalizedStrings[language]." + obj[k] );
            }
        }

    }
    return obj;
}