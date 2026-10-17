// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"casal-palocco","repository":"europe","path":"italy/lazio/casal-palocco","depth":3,"parent":"italy/lazio","children":["acilia-saline","borgo-dei-pescatori"]});
export const childModules = Object.freeze({"acilia-saline":"./acilia-saline/acilia-saline.js","borgo-dei-pescatori":"./borgo-dei-pescatori/borgo-dei-pescatori.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
