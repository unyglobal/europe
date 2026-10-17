// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kampen","repository":"europe","path":"netherlands/overijssel/kampen","depth":3,"parent":"netherlands/overijssel","children":["brunnepe"]});
export const childModules = Object.freeze({"brunnepe":"./brunnepe/brunnepe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
