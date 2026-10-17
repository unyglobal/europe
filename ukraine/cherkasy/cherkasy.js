// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cherkasy","repository":"europe","path":"ukraine/cherkasy","depth":2,"parent":"ukraine","children":["bahacheve","kaniv","korsun-shevchenkivskyi","shpola","smila","uman","zolotonosha","zvenyhorodka"]});
export const childModules = Object.freeze({"bahacheve":"./bahacheve/bahacheve.js","kaniv":"./kaniv/kaniv.js","korsun-shevchenkivskyi":"./korsun-shevchenkivskyi/korsun-shevchenkivskyi.js","shpola":"./shpola/shpola.js","smila":"./smila/smila.js","uman":"./uman/uman.js","zolotonosha":"./zolotonosha/zolotonosha.js","zvenyhorodka":"./zvenyhorodka/zvenyhorodka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
