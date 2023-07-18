const RATES = {
    usd: 90.12,
    eur: 101.2,
    kzt: 0.20252,
    aed: 24.62
};

function convert({rub, currency}) {
    if (!RATES[currency]) {
        return null;
    }

    return rub * RATES[currency];
}