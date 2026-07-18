const soloPrices = [
    { min: 1, max: 500, pricePerElo: 55 / 25 },
    { min: 500, max: 750, pricePerElo: 65 / 25 },
    { min: 750, max: 900, pricePerElo: 75 / 25 },
    { min: 900, max: 1050, pricePerElo: 85 / 25 },
    { min: 1050, max: 1200, pricePerElo: 95 / 25 },
    { min: 1200, max: 1350, pricePerElo: 105 / 25 },
    { min: 1350, max: 1530, pricePerElo: 120 / 25 },
    { min: 1530, max: 1750, pricePerElo: 145 / 25 },
    { min: 1750, max: 2000, pricePerElo: 165 / 25 },
    { min: 2000, max: 2100, pricePerElo: 190 / 25 },
    { min: 2100, max: 2200, pricePerElo: 220 / 25 },
    { min: 2200, max: 2300, pricePerElo: 240 / 25 },
    { min: 2300, max: 2400, pricePerElo: 265 / 25 },
    { min: 2400, max: 2500, pricePerElo: 300 / 25 },
    { min: 2500, max: 2600, pricePerElo: 345 / 25 },
    { min: 2600, max: 2700, pricePerElo: 385 / 25 },
    { min: 2700, max: 2800, pricePerElo: 445 / 25 },
    { min: 2800, max: 2900, pricePerElo: 560 / 25 },
    { min: 2900, max: 3000, pricePerElo: 735 / 25 },
    { min: 3000, max: 3100, pricePerElo: 1000 / 25 },
    { min: 3100, max: 3200, pricePerElo: 1200 / 25 },
    { min: 3200, max: 3300, pricePerElo: 1400 / 25 },
    { min: 3300, max: 3400, pricePerElo: 1550 / 25 },
    { min: 3400, max: 3500, pricePerElo: 1740 / 25 },
    { min: 3500, max: 3600, pricePerElo: 2000 / 25 },
    { min: 3600, max: 3700, pricePerElo: 2150 / 25 },
    { min: 3700, max: 3800, pricePerElo: 2300 / 25 },
    { min: 3800, max: 3900, pricePerElo: 3000 / 25 },
    { min: 3900, max: 4000, pricePerElo: 3400 / 25 },
    { min: 4000, max: Infinity, pricePerElo: 160.0 }
];

const partyPrices = [
    { min: 1, max: 500, pricePerElo: 80 / 25 },
    { min: 500, max: 750, pricePerElo: 90 / 25 },
    { min: 750, max: 900, pricePerElo: 105 / 25 },
    { min: 900, max: 1050, pricePerElo: 120 / 25 },
    { min: 1050, max: 1200, pricePerElo: 130 / 25 },
    { min: 1200, max: 1350, pricePerElo: 145 / 25 },
    { min: 1350, max: 1530, pricePerElo: 165 / 25 },
    { min: 1530, max: 1750, pricePerElo: 200 / 25 },
    { min: 1750, max: 2000, pricePerElo: 245 / 25 },
    { min: 2000, max: 2100, pricePerElo: 310 / 25 },
    { min: 2100, max: 2200, pricePerElo: 365 / 25 },
    { min: 2200, max: 2300, pricePerElo: 415 / 25 },
    { min: 2300, max: 2400, pricePerElo: 440 / 25 },
    { min: 2400, max: 2500, pricePerElo: 500 / 25 },
    { min: 2500, max: 2600, pricePerElo: 585 / 25 },
    { min: 2600, max: 2700, pricePerElo: 640 / 25 },
    { min: 2700, max: 2800, pricePerElo: 745 / 25 },
    { min: 2800, max: 2900, pricePerElo: 880 / 25 },
    { min: 2900, max: 3000, pricePerElo: 1280 / 25 },
    { min: 3000, max: Infinity, pricePerElo: 70.0 }
];

const calibrationPrices = [
    { min: 1, max: 500, pricePerGame: 63.25 },
    { min: 500, max: 750, pricePerGame: 74.75 },
    { min: 750, max: 900, pricePerGame: 86.25 },
    { min: 900, max: 1050, pricePerGame: 97.75 },
    { min: 1050, max: 1200, pricePerGame: 109.25 },
    { min: 1200, max: 1350, pricePerGame: 120.75 },
    { min: 1350, max: 1530, pricePerGame: 138.00 },
    { min: 1530, max: 1750, pricePerGame: 166.75 },
    { min: 1750, max: 2000, pricePerGame: 189.75 },
    { min: 2000, max: 2100, pricePerGame: 218.50 },
    { min: 2100, max: 2200, pricePerGame: 253.00 },
    { min: 2200, max: 2300, pricePerGame: 276.00 },
    { min: 2300, max: 2400, pricePerGame: 304.75 },
    { min: 2400, max: 2500, pricePerGame: 345.00 },
    { min: 2500, max: 2600, pricePerGame: 396.75 },
    { min: 2600, max: 2700, pricePerGame: 442.75 },
    { min: 2700, max: 2800, pricePerGame: 511.75 },
    { min: 2800, max: 2900, pricePerGame: 644.00 },
    { min: 2900, max: 3000, pricePerGame: 845.25 },
    { min: 3000, max: 3100, pricePerGame: 1150.00 },
    { min: 3100, max: 3200, pricePerGame: 1380.00 },
    { min: 3200, max: 3300, pricePerGame: 1610.00 },
    { min: 3300, max: 3400, pricePerGame: 1782.50 },
    { min: 3400, max: 3500, pricePerGame: 2001.00 },
    { min: 3500, max: 3600, pricePerGame: 2300.00 },
    { min: 3600, max: 3700, pricePerGame: 2472.50 },
    { min: 3700, max: 3800, pricePerGame: 2645.00 },
    { min: 3800, max: 3900, pricePerGame: 3450.00 },
    { min: 3900, max: 4000, pricePerGame: 3910.00 },
    { min: 4000, max: Infinity, pricePerGame: 4500.00 }
];

const partyCalibrationPrices = [
    { min: 1, max: 500, pricePerGame: 96 },
    { min: 500, max: 750, pricePerGame: 108 },
    { min: 750, max: 900, pricePerGame: 126 },
    { min: 900, max: 1050, pricePerGame: 144 },
    { min: 1050, max: 1200, pricePerGame: 156 },
    { min: 1200, max: 1350, pricePerGame: 174 },
    { min: 1350, max: 1530, pricePerGame: 198 },
    { min: 1530, max: 1750, pricePerGame: 240 },
    { min: 1750, max: 2000, pricePerGame: 294 },
    { min: 2000, max: 2100, pricePerGame: 372 },
    { min: 2100, max: 2200, pricePerGame: 438 },
    { min: 2200, max: 2300, pricePerGame: 498 },
    { min: 2300, max: 2400, pricePerGame: 528 },
    { min: 2400, max: 2500, pricePerGame: 600 },
    { min: 2500, max: 2600, pricePerGame: 702 },
    { min: 2600, max: 2700, pricePerGame: 768 },
    { min: 2700, max: 2800, pricePerGame: 894 },
    { min: 2800, max: 2900, pricePerGame: 1056 },
    { min: 2900, max: 3000, pricePerGame: 1536 },
    { min: 3000, max: Infinity, pricePerGame: 2000 }
];

const partyPricesByGame = partyPrices.map(tier => ({
    min: tier.min,
    max: tier.max,
    pricePerGame: tier.pricePerElo * 25
}));

function calculateBoostByElo(currentElo, desiredElo, priceTable, markup) {
    if (currentElo >= desiredElo) {
        return { error: 'Конечный ELO должен быть больше начального' };
    }
    if (currentElo < 0 || desiredElo < 0) {
        return { error: 'ELO не может быть отрицательным' };
    }

    let totalCost = 0;
    let remaining = desiredElo - currentElo;
    let pos = currentElo;

    for (const tier of priceTable) {
        const tierMax = tier.max === Infinity ? desiredElo : tier.max;

        if (pos >= tier.min && pos < tierMax) {
            const maxGain = tierMax - pos;
            const gain = Math.min(remaining, maxGain);

            if (gain > 0) {
                totalCost += gain * tier.pricePerElo;
                pos += gain;
                remaining -= gain;
            }
        }

        if (remaining <= 0) break;
    }

    if (remaining > 0) {
        return { error: `Нет цен для ELO выше ${pos}` };
    }

    const multiplier = 1 + (markup / 100);
    const finalCost = totalCost * multiplier;

    return {
        totalCost: Math.round(finalCost * 100) / 100,
        error: null
    };
}

function calculateByGames(currentElo, games, priceTable, markup) {
    if (games < 1) {
        return { error: 'Количество игр должно быть не меньше 1' };
    }
    if (currentElo < 0) {
        return { error: 'ELO не может быть отрицательным' };
    }

    let pricePerGame = null;

    for (const tier of priceTable) {
        if (currentElo >= tier.min && currentElo < tier.max) {
            pricePerGame = tier.pricePerGame;
            break;
        }
    }

    if (pricePerGame === null) {
        return { error: `Нет цены для ELO ${currentElo}` };
    }

    const totalCost = pricePerGame * games;
    const multiplier = 1 + (markup / 100);
    const finalCost = totalCost * multiplier;

    return {
        totalCost: Math.round(finalCost * 100) / 100,
        error: null
    };
}

function updateFields() {
    const boostType = document.getElementById('boostType').value;
    const isGamesMode = boostType === 'calibration' || boostType === 'party-calibration' || boostType === 'party';

    const targetLabel = document.getElementById('targetLabel');
    const targetInput = document.getElementById('targetInput');
    const targetHint = document.getElementById('targetHint');
    const currentLabel = document.getElementById('currentLabel');

    if (isGamesMode) {
        targetLabel.textContent = 'Количество игр';
        targetInput.placeholder = 'Например: 5';
        targetInput.value = 5;
        targetInput.min = 1;
        targetInput.max = 99999;
        targetInput.step = 1;
        targetHint.textContent = '';
        targetHint.style.color = '#555';
        currentLabel.textContent = 'Текущее ELO';
    } else {
        targetLabel.textContent = 'Конечное ELO';
        targetInput.placeholder = 'Например: 1561';
        targetInput.value = 1561;
        targetInput.min = 0;
        targetInput.max = 99999;
        targetInput.step = 1;
        targetHint.textContent = '';
        targetHint.style.color = '#555';
        currentLabel.textContent = 'Начальное ELO';
    }
}

function calculate() {
    const boostType = document.getElementById('boostType').value;
    const currentElo = parseFloat(document.getElementById('currentElo').value);
    const targetValue = parseFloat(document.getElementById('targetInput').value);
    const markup = parseFloat(document.getElementById('markup').value) || 0;
    const resultDiv = document.getElementById('result');

    if (isNaN(currentElo) || isNaN(targetValue)) {
        resultDiv.innerHTML = `<div class="error">⚠️ Введите корректные числа</div>`;
        return;
    }

    let result;

    switch (boostType) {
        case 'solo':
            result = calculateBoostByElo(currentElo, targetValue, soloPrices, markup);
            break;
        case 'party':
            result = calculateByGames(currentElo, Math.round(targetValue), partyPricesByGame, markup);
            break;
        case 'calibration':
            result = calculateByGames(currentElo, Math.round(targetValue), calibrationPrices, markup);
            break;
        case 'party-calibration':
            result = calculateByGames(currentElo, Math.round(targetValue), partyCalibrationPrices, markup);
            break;
        default:
            result = calculateBoostByElo(currentElo, targetValue, soloPrices, markup);
    }

    if (result.error) {
        resultDiv.innerHTML = `<div class="error">⚠️ ${result.error}</div>`;
        return;
    }

    resultDiv.innerHTML = `
        <div class="price">${result.totalCost.toFixed(2)} <span>руб</span></div>
    `;
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculate();
    });
});

document.getElementById('boostType').addEventListener('change', function() {
    updateFields();
    calculate();
});

window.onload = function() {
    updateFields();
    calculate();
};
