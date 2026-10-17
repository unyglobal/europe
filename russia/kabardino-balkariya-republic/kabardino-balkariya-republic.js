// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kabardino-balkariya-republic","repository":"europe","path":"russia/kabardino-balkariya-republic","depth":2,"parent":"russia","children":["baksan","chegem","dugulubgey","nalchik","nartkala","prokhladnyy","terek","tyrnyauz"]});
export const childModules = Object.freeze({"baksan":"./baksan/baksan.js","chegem":"./chegem/chegem.js","dugulubgey":"./dugulubgey/dugulubgey.js","nalchik":"./nalchik/nalchik.js","nartkala":"./nartkala/nartkala.js","prokhladnyy":"./prokhladnyy/prokhladnyy.js","terek":"./terek/terek.js","tyrnyauz":"./tyrnyauz/tyrnyauz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
