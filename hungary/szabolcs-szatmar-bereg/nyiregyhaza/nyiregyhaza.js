// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nyiregyhaza","repository":"europe","path":"hungary/szabolcs-szatmar-bereg/nyiregyhaza","depth":3,"parent":"hungary/szabolcs-szatmar-bereg","children":["alsobadurbokor","rozsretbokor-i"]});
export const childModules = Object.freeze({"alsobadurbokor":"./alsobadurbokor/alsobadurbokor.js","rozsretbokor-i":"./rozsretbokor-i/rozsretbokor-i.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
