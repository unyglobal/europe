// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"urban-municipality-of-celje","repository":"europe","path":"slovenia/urban-municipality-of-celje","depth":2,"parent":"slovenia","children":["celje"]});
export const childModules = Object.freeze({"celje":"./celje/celje.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
