// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vinnytsia","repository":"europe","path":"ukraine/vinnytsia","depth":2,"parent":"ukraine","children":["bar","haysyn","kalynivka","khmilnyk","kozyatyn","ladyzhyn","mohyliv-podilskyy","tulchyn","vinnytsya","zhmerynka"]});
export const childModules = Object.freeze({"bar":"./bar/bar.js","haysyn":"./haysyn/haysyn.js","kalynivka":"./kalynivka/kalynivka.js","khmilnyk":"./khmilnyk/khmilnyk.js","kozyatyn":"./kozyatyn/kozyatyn.js","ladyzhyn":"./ladyzhyn/ladyzhyn.js","mohyliv-podilskyy":"./mohyliv-podilskyy/mohyliv-podilskyy.js","tulchyn":"./tulchyn/tulchyn.js","vinnytsya":"./vinnytsya/vinnytsya.js","zhmerynka":"./zhmerynka/zhmerynka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
