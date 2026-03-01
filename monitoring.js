// monitoring.js — Renders the monitoring status bar
(function () {
  'use strict';

  // Wait for data.json to be fetched by app.js, then render monitoring status
  // We poll for the last-updated element to have content (meaning app.js has rendered)
  var checkInterval = setInterval(function () {
    var lastUpdated = document.getElementById('last-updated');
    if (lastUpdated && lastUpdated.textContent.trim() !== '') {
      clearInterval(checkInterval);
      // Fetch data.json to get monitoringInterval
      fetch('./data.json')
        .then(function (res) { return res.json(); })
        .then(function (data) { renderMonitoringStatus(data); })
        .catch(function () { /* silent fail */ });
    }
  }, 100);

  // Clear after 10 seconds if app.js never renders
  setTimeout(function () { clearInterval(checkInterval); }, 10000);

  function renderMonitoringStatus(data) {
    var el = document.getElementById('monitoring-status');
    if (!el || !data.monitoringInterval) return;

    var lastUpdated = new Date(data.lastUpdated);
    var intervalMs = data.monitoringInterval * 60 * 1000;
    var now = new Date();

    // Calculate next check
    var nextCheck = new Date(lastUpdated.getTime() + intervalMs);
    while (nextCheck <= now) {
      nextCheck = new Date(nextCheck.getTime() + intervalMs);
    }

    // Time ago
    var diffMin = Math.floor((now - lastUpdated) / 60000);
    var agoStr;
    if (diffMin < 1) agoStr = 'just now';
    else if (diffMin < 60) agoStr = diffMin + ' min ago';
    else if (diffMin < 1440) agoStr = Math.floor(diffMin / 60) + 'h ' + (diffMin % 60) + 'm ago';
    else agoStr = Math.floor(diffMin / 1440) + 'd ago';

    // Time until next
    var untilMin = Math.max(0, Math.ceil((nextCheck - now) / 60000));
    var nextStr;
    if (untilMin < 1) nextStr = 'any moment';
    else if (untilMin < 60) nextStr = 'in ' + untilMin + ' min';
    else nextStr = 'in ' + Math.floor(untilMin / 60) + 'h ' + (untilMin % 60) + 'm';

    el.innerHTML = '<span class="monitoring-status__dot" aria-hidden="true"></span>' +
      'Auto-monitored hourly &middot; Last checked ' + agoStr + ' &middot; Next check ' + nextStr;

    // Update every 60 seconds
    setInterval(function () { renderMonitoringStatus(data); }, 60000);
  }
})();
