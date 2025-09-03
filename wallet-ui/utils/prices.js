export const pct = (curr, past) =>
    curr == null || past == null || past === 0 ? null : ((curr - past) / past) * 100;

export const priceAt = (hist, h) =>
    hist?.find(p => p.offset_hours === h)?.price_usd;

export const change1h = (price, hist) =>
    pct(price, priceAt(hist, 1));

export const change6h = (price, hist) =>
    pct(price, priceAt(hist, 6));

export const change24h = (price, hist) =>
    pct(price, priceAt(hist, 24));

export const formatSignedPercent = (x) =>
    x == null ? '—' : `${x >= 0 ? '+' : ''}${x.toFixed(2)}%`;


