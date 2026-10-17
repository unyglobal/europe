// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"geldrop","repository":"europe","path":"netherlands/north-brabant/geldrop","depth":3,"parent":"netherlands/north-brabant","children":["akert","braakhuizen"]});
export const childModules = Object.freeze({"akert":"./akert/akert.js","braakhuizen":"./braakhuizen/braakhuizen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
