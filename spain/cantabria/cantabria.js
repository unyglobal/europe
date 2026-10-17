// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cantabria","repository":"europe","path":"spain/cantabria","depth":2,"parent":"spain","children":["camargo","castro-urdiales","el-astillero","santander","torrelavega"]});
export const childModules = Object.freeze({"camargo":"./camargo/camargo.js","castro-urdiales":"./castro-urdiales/castro-urdiales.js","el-astillero":"./el-astillero/el-astillero.js","santander":"./santander/santander.js","torrelavega":"./torrelavega/torrelavega.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
