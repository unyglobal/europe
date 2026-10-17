// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stra-gang","repository":"europe","path":"austria/styria/stra-gang","depth":3,"parent":"austria/styria","children":["sankt-martin","webling"]});
export const childModules = Object.freeze({"sankt-martin":"./sankt-martin/sankt-martin.js","webling":"./webling/webling.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
