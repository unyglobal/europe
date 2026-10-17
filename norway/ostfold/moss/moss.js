// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"moss","repository":"europe","path":"norway/ostfold/moss","depth":3,"parent":"norway/ostfold","children":["fiske","klommesten","malakoff"]});
export const childModules = Object.freeze({"fiske":"./fiske/fiske.js","klommesten":"./klommesten/klommesten.js","malakoff":"./malakoff/malakoff.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
