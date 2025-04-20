const fs = require('fs');

  if (!fs.existsSync('coverage')) {
    fs.mkdirSync('coverage');
  }
  const res = {total: {}};
  ['lines', 'functions', 'branches'].forEach((name, i) => {
    res['total'][name] = {
      total: 95 + i,
      covered: 90 + i,
      skipped: 0,
    }
    res['total'][name]['pct'] = Math.round(((90 + i) / (95 + i)) * 10000) / 100;
  })
  fs.writeFileSync('coverage/coverage-summary.json', JSON.stringify(res, null, 2));
  console.log('res', res);
