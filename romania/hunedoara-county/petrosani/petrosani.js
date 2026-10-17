// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"petrosani","repository":"europe","path":"romania/hunedoara-county/petrosani","depth":3,"parent":"romania/hunedoara-county","children":["boli","boteni","coasta","daranesti","gheorghe-lazar"]});
export const childModules = Object.freeze({"boli":"./boli/boli.js","boteni":"./boteni/boteni.js","coasta":"./coasta/coasta.js","daranesti":"./daranesti/daranesti.js","gheorghe-lazar":"./gheorghe-lazar/gheorghe-lazar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
