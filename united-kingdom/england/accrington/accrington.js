// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"accrington","repository":"europe","path":"united-kingdom/england/accrington","depth":3,"parent":"united-kingdom/england","children":["barnfield","lower-fold","scaitcliffe","waterloo","woodnook"]});
export const childModules = Object.freeze({"barnfield":"./barnfield/barnfield.js","lower-fold":"./lower-fold/lower-fold.js","scaitcliffe":"./scaitcliffe/scaitcliffe.js","waterloo":"./waterloo/waterloo.js","woodnook":"./woodnook/woodnook.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
