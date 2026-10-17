// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bihor-county","repository":"europe","path":"romania/bihor-county","depth":2,"parent":"romania","children":["oradea","salonta"]});
export const childModules = Object.freeze({"oradea":"./oradea/oradea.js","salonta":"./salonta/salonta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
