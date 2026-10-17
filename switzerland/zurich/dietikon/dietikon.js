// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dietikon","repository":"europe","path":"switzerland/zurich/dietikon","depth":3,"parent":"switzerland/zurich","children":["dietikon-almend","dietikon-guggenbuhl","dietikon-kreuzacker","dietikon-oberdorf","dietikon-rutematt","dietikon-unterdorf","dietikon-vorstadt"]});
export const childModules = Object.freeze({"dietikon-almend":"./dietikon-almend/dietikon-almend.js","dietikon-guggenbuhl":"./dietikon-guggenbuhl/dietikon-guggenbuhl.js","dietikon-kreuzacker":"./dietikon-kreuzacker/dietikon-kreuzacker.js","dietikon-oberdorf":"./dietikon-oberdorf/dietikon-oberdorf.js","dietikon-rutematt":"./dietikon-rutematt/dietikon-rutematt.js","dietikon-unterdorf":"./dietikon-unterdorf/dietikon-unterdorf.js","dietikon-vorstadt":"./dietikon-vorstadt/dietikon-vorstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
