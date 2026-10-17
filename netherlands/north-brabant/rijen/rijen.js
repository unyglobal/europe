// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rijen","repository":"europe","path":"netherlands/north-brabant/rijen","depth":3,"parent":"netherlands/north-brabant","children":["de-vijf-eiken"]});
export const childModules = Object.freeze({"de-vijf-eiken":"./de-vijf-eiken/de-vijf-eiken.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
