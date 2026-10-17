// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"serbia","repository":"europe","path":"serbia","depth":1,"parent":"","children":["central-serbia","vojvodina"]});
export const childModules = Object.freeze({"central-serbia":"./central-serbia/central-serbia.js","vojvodina":"./vojvodina/vojvodina.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
