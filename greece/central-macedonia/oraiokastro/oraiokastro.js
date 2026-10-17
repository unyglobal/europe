// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oraiokastro","repository":"europe","path":"greece/central-macedonia/oraiokastro","depth":3,"parent":"greece/central-macedonia","children":["akbunar"]});
export const childModules = Object.freeze({"akbunar":"./akbunar/akbunar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
