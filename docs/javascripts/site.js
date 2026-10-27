// Sends a GoatCounter event. No-op when analytics isn't loaded (local builds,
// blockers, or GOATCOUNTER_CODE unset).
function trackEvent(path, title) {
  if (window.goatcounter && window.goatcounter.count) {
    window.goatcounter.count({ path: path, title: title || path, event: true });
  }
}

// Outbound and mailto link clicks. Middle-clicks arrive as auxclick.
function onLinkClick(e) {
  if (e.type === "auxclick" && e.button !== 1) return;
  var link = e.target.closest("a[href]");
  if (!link) return;
  var url = new URL(link.href, location.href);
  // Card links hold a title and a description; keep just the title.
  var text = link.textContent.trim().split("\n")[0].trim();
  if (url.protocol === "mailto:") {
    trackEvent("contact/email-link", text);
  } else if (/^https?:$/.test(url.protocol) && url.host !== location.host) {
    trackEvent("outbound/" + url.host + url.pathname.replace(/\/$/, ""), text);
  }
}

document.addEventListener("click", onLinkClick);
document.addEventListener("auxclick", onLinkClick);

// Copy-email buttons: <button class="cs-copy-email" data-email="...">
document.addEventListener("click", function (e) {
  var button = e.target.closest(".cs-copy-email");
  if (!button) return;
  var label = button.textContent;
  navigator.clipboard.writeText(button.dataset.email).then(
    function () { button.textContent = "Copied!"; },
    function () { button.textContent = button.dataset.email; }
  );
  setTimeout(function () { button.textContent = label; }, 2000);
  trackEvent("contact/copy-email", "Copy email");
});
