// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"adler","repository":"europe","path":"russia/krasnodar-krai/adler","depth":3,"parent":"russia/krasnodar-krai","children":["cheremushki"]});
export const childModules = Object.freeze({"cheremushki":"./cheremushki/cheremushki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
