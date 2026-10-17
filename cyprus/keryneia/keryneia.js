// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"keryneia","repository":"europe","path":"cyprus/keryneia","depth":2,"parent":"cyprus","children":["kyrenia"]});
export const childModules = Object.freeze({"kyrenia":"./kyrenia/kyrenia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
