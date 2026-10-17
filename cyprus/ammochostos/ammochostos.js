// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ammochostos","repository":"europe","path":"cyprus/ammochostos","depth":2,"parent":"cyprus","children":["egkomi","famagusta","protaras"]});
export const childModules = Object.freeze({"egkomi":"./egkomi/egkomi.js","famagusta":"./famagusta/famagusta.js","protaras":"./protaras/protaras.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
