// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"viljandi","repository":"europe","path":"estonia/viljandimaa/viljandi","depth":3,"parent":"estonia/viljandimaa","children":["kantrekula","vaksali"]});
export const childModules = Object.freeze({"kantrekula":"./kantrekula/kantrekula.js","vaksali":"./vaksali/vaksali.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
