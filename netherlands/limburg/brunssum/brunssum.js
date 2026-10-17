// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brunssum","repository":"europe","path":"netherlands/limburg/brunssum","depth":3,"parent":"netherlands/limburg","children":["het-heufke","kruisberg","rumpen","schuttersveld"]});
export const childModules = Object.freeze({"het-heufke":"./het-heufke/het-heufke.js","kruisberg":"./kruisberg/kruisberg.js","rumpen":"./rumpen/rumpen.js","schuttersveld":"./schuttersveld/schuttersveld.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
