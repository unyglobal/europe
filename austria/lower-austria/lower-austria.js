// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lower-austria","repository":"europe","path":"austria/lower-austria","depth":2,"parent":"austria","children":["amstetten","baden","klosterneuburg","modling","perchtoldsdorf","sankt-polten","stockerau","wiener-neustadt"]});
export const childModules = Object.freeze({"amstetten":"./amstetten/amstetten.js","baden":"./baden/baden.js","klosterneuburg":"./klosterneuburg/klosterneuburg.js","modling":"./modling/modling.js","perchtoldsdorf":"./perchtoldsdorf/perchtoldsdorf.js","sankt-polten":"./sankt-polten/sankt-polten.js","stockerau":"./stockerau/stockerau.js","wiener-neustadt":"./wiener-neustadt/wiener-neustadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
