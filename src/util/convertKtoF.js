export function convertKtoF(K) {
    const t = Math.round(((K - 273.15) * (9/5) + 32)); 
    return `${t}°`;
};
