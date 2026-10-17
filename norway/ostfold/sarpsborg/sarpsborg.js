// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sarpsborg","repository":"europe","path":"norway/ostfold/sarpsborg","depth":3,"parent":"norway/ostfold","children":["enenda","gleng"]});
export const childModules = Object.freeze({"enenda":"./enenda/enenda.js","gleng":"./gleng/gleng.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
