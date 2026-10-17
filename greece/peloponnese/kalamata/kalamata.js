// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kalamata","repository":"europe","path":"greece/peloponnese/kalamata","depth":3,"parent":"greece/peloponnese","children":["anthoupoli","fragkopigado","kastro","rachi"]});
export const childModules = Object.freeze({"anthoupoli":"./anthoupoli/anthoupoli.js","fragkopigado":"./fragkopigado/fragkopigado.js","kastro":"./kastro/kastro.js","rachi":"./rachi/rachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
