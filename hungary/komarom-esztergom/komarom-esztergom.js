// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"komarom-esztergom","repository":"europe","path":"hungary/komarom-esztergom","depth":2,"parent":"hungary","children":["esztergom","komarom","oroszlany","tata","tatabanya"]});
export const childModules = Object.freeze({"esztergom":"./esztergom/esztergom.js","komarom":"./komarom/komarom.js","oroszlany":"./oroszlany/oroszlany.js","tata":"./tata/tata.js","tatabanya":"./tatabanya/tatabanya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
