// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-pawl-il-ba-ar","repository":"europe","path":"malta/saint-paul-s-bay/san-pawl-il-ba-ar","depth":3,"parent":"malta/saint-paul-s-bay","children":["erba-mwiezeb","il-amra"]});
export const childModules = Object.freeze({"erba-mwiezeb":"./erba-mwiezeb/erba-mwiezeb.js","il-amra":"./il-amra/il-amra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
