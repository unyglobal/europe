// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"biskupin-sepolno-dabie-bartoszowice","repository":"europe","path":"poland/lower-silesia/biskupin-sepolno-dabie-bartoszowice","depth":3,"parent":"poland/lower-silesia","children":["sepolno"]});
export const childModules = Object.freeze({"sepolno":"./sepolno/sepolno.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
