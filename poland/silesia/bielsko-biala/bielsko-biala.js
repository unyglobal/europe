// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bielsko-biala","repository":"europe","path":"poland/silesia/bielsko-biala","depth":3,"parent":"poland/silesia","children":["bia-a-srodmiescie","grunwaldzkie","srodmiescie-bielsko"]});
export const childModules = Object.freeze({"bia-a-srodmiescie":"./bia-a-srodmiescie/bia-a-srodmiescie.js","grunwaldzkie":"./grunwaldzkie/grunwaldzkie.js","srodmiescie-bielsko":"./srodmiescie-bielsko/srodmiescie-bielsko.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
