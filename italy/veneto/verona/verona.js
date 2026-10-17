// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"verona","repository":"europe","path":"italy/veneto/verona","depth":3,"parent":"italy/veneto","children":["verona-san-zeno"]});
export const childModules = Object.freeze({"verona-san-zeno":"./verona-san-zeno/verona-san-zeno.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
