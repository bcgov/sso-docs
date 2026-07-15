module.exports = function () {
  const snowplowEndpoint =
    process.env.SNOWPLOW_ENDPOINT || "https://spm.apps.gov.bc.ca";

  return {
    name: "snowplow-page-view-plugin",
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: "script",
            innerHTML: `
              // Snowplow loader stub
              (function (p, l, o, w, i, n, g) {
                if (!p[i]) {
                  p.GlobalSnowplowNamespace = p.GlobalSnowplowNamespace || [];
                  p.GlobalSnowplowNamespace.push(i);
                  p[i] = function () {
                    (p[i].q = p[i].q || []).push(arguments);
                  };
                  p[i].q = p[i].q || [];
                  n = l.createElement(o);
                  g = l.getElementsByTagName(o)[0];
                  n.async = 1;
                  n.src = w;
                  g.parentNode.insertBefore(n, g);
                }
              })(window, document, "script", "/sso-docs/splibrary.js", "snowplow");

              // Initialize Snowplow
              window.snowplow("newTracker", "sp", "${snowplowEndpoint}", {
                appId: "Snowplow_standalone",
                cookieSameSite: "Lax",
                eventMethod: "post",
                cookieLifetime: 86400 * 548,
                contexts: {
                  session: true,
                  webPage: true,
                  browser: true,
                  performanceNavigationTiming: true,
                  webVitals: true,
                  resetActivityTrackingOnPageView: true,
                },
              });

              window.snowplow("enableActivityTracking", {
                minimumVisitLength: 30,
                heartbeatDelay: 30,
              });

              window.snowplow("enableLinkClickTracking");
              window.snowplow("enableButtonClickTracking");

              // Track page views on route changes
              (function() {
                let lastPath = window.location.pathname;
                
                // Track initial page view
                if (window.snowplow) {
                  window.snowplow('trackPageView');
                }
                
                // Listen for route changes using history API
                const originalPushState = window.history.pushState;
                const originalReplaceState = window.history.replaceState;
                
                function onRouteChange() {
                  const currentPath = window.location.pathname;
                  if (currentPath !== lastPath) {
                    lastPath = currentPath;
                    if (window.snowplow) {
                      // Small delay to ensure page content has updated
                      setTimeout(() => {
                        window.snowplow('trackPageView');
                      }, 100);
                    }
                  }
                }
                
                window.history.pushState = function(...args) {
                  originalPushState.apply(window.history, args);
                  onRouteChange();
                };
                
                window.history.replaceState = function(...args) {
                  originalReplaceState.apply(window.history, args);
                  onRouteChange();
                };
                
                // Also listen for popstate (browser back/forward)
                window.addEventListener('popstate', onRouteChange);
              })();
            `,
          },
        ],
      };
    },
  };
};
