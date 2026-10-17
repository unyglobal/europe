// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tapolca","repository":"europe","path":"hungary/veszprem/tapolca","depth":3,"parent":"hungary/veszprem","children":["mogyoroshegy"]});
export const childModules = Object.freeze({"mogyoroshegy":"./mogyoroshegy/mogyoroshegy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
