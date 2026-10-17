// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"orenburg-oblast","repository":"europe","path":"russia/orenburg-oblast","depth":2,"parent":"russia","children":["abdulino","buguruslan","buzuluk","gay","krasnaya-glinka","kuvandyk","mednogorsk","novotroitsk","orenburg","orsk","saraktash","sol-iletsk","sorochinsk","yasnyy"]});
export const childModules = Object.freeze({"abdulino":"./abdulino/abdulino.js","buguruslan":"./buguruslan/buguruslan.js","buzuluk":"./buzuluk/buzuluk.js","gay":"./gay/gay.js","krasnaya-glinka":"./krasnaya-glinka/krasnaya-glinka.js","kuvandyk":"./kuvandyk/kuvandyk.js","mednogorsk":"./mednogorsk/mednogorsk.js","novotroitsk":"./novotroitsk/novotroitsk.js","orenburg":"./orenburg/orenburg.js","orsk":"./orsk/orsk.js","saraktash":"./saraktash/saraktash.js","sol-iletsk":"./sol-iletsk/sol-iletsk.js","sorochinsk":"./sorochinsk/sorochinsk.js","yasnyy":"./yasnyy/yasnyy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
