System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  meta: {
    "bootstrap": {
      "deps": [
        "jquery"
      ]
    }
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.2.1",
    "aurelia-auth": "npm:aurelia-auth@2.1.3",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1",
    "aurelia-breeze": "npm:aurelia-breeze@1.2.0",
    "aurelia-configuration": "github:vheissu/aurelia-configuration@1.0.6",
    "aurelia-dialog": "npm:aurelia-dialog@0.6.2",
    "aurelia-dragula": "npm:aurelia-dragula@1.1.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.2.5",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.5",
    "aurelia-google-analytics": "github:miguelzakharia/aurelia-google-analytics@1.0.3",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.1",
    "aurelia-i18n": "npm:aurelia-i18n@0.5.3",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.2",
    "aurelia-notification": "npm:aurelia-notification@1.0.0-rc1",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.2.0.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.6",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.3",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.4",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.6",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.1",
    "aurelia-ui-virtualization": "npm:aurelia-ui-virtualization@0.4.5",
    "aurelia-validatejs": "npm:aurelia-validatejs@0.3.1",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "breeze": "npm:breeze-client@1.5.6",
    "core-js": "npm:core-js@1.2.6",
    "deep-extend": "npm:deep-extend@0.4.1",
    "fetch": "github:github/fetch@0.11.1",
    "font-awesome": "npm:font-awesome@4.6.3",
    "humane-js": "npm:humane-js@3.2.2",
    "i18next-xhr-backend": "npm:i18next-xhr-backend@0.5.4",
    "jquery": "npm:jquery@2.2.4",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.3"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:miguelzakharia/aurelia-google-analytics@1.0.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "npm:jquery@2.2.4"
    },
    "github:vheissu/aurelia-configuration@1.0.6": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2"
    },
    "npm:assert@1.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.2.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-auth@2.1.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.2.5",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.3",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1"
    },
    "npm:aurelia-binding@1.0.0-beta.1.3.6": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.5",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.2.0.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.6",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.4",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.6",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-breeze@1.2.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-http-client": "npm:aurelia-http-client@1.0.0-beta.1.2.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7",
      "breeze-client": "npm:breeze-client@1.5.6"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-dialog@0.6.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-dragula@1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.2.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-framework@1.0.0-beta.1.2.5": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.2.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-http-client@1.0.0-beta.1.2.2": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-i18n@0.5.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.6",
      "i18next": "npm:i18next@2.5.1",
      "intl": "npm:intl@1.2.3"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.2.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-loader@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.2.2": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-notification@1.0.0-rc1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-i18n": "npm:aurelia-i18n@0.5.3",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "extend": "npm:extend@3.0.0",
      "humane-js": "npm:humane-js@3.2.2",
      "javascript-decorators": "npm:javascript-decorators@0.7.1"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.2.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.1.6": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-router@1.0.0-beta.1.2.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.6": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.2.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-templating@1.0.0-beta.1.2.7": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-ui-virtualization@0.4.5": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.5",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.6"
    },
    "npm:aurelia-validatejs@0.3.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.6",
      "aurelia-validation": "npm:aurelia-validation@0.8.1",
      "validate.js": "npm:validate.js@0.9.0"
    },
    "npm:aurelia-validation@0.8.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:deep-extend@0.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:deepcopy@0.6.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.21"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:i18next@2.5.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:intl@1.2.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.5.3",
      "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
    },
    "npm:javascript-decorators@0.7.1": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "deepcopy": "npm:deepcopy@0.6.1"
    },
    "npm:node-fetch@1.5.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:validate.js@0.9.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  },
  bundles: {
    "app-build-2e851bdbc1.js": [
      "app.html!github:systemjs/plugin-text@0.0.3.js",
      "app.js",
      "app.router.config.js",
      "blur-image.js",
      "child-router.html!github:systemjs/plugin-text@0.0.3.js",
      "child-router.js",
      "config/config.json!github:systemjs/plugin-text@0.0.3.js",
      "login.html!github:systemjs/plugin-text@0.0.3.js",
      "login.js",
      "logout.html!github:systemjs/plugin-text@0.0.3.js",
      "logout.js",
      "main.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.3.js",
      "signup.html!github:systemjs/plugin-text@0.0.3.js",
      "signup.js",
      "users.html!github:systemjs/plugin-text@0.0.3.js",
      "users.js",
      "welcome.html!github:systemjs/plugin-text@0.0.3.js",
      "welcome.js"
    ],
    "aurelia-00285d0ee4.js": [
      "github:github/fetch@0.11.1.js",
      "github:github/fetch@0.11.1/fetch.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:miguelzakharia/aurelia-google-analytics@1.0.3.js",
      "github:miguelzakharia/aurelia-google-analytics@1.0.3/analytics.js",
      "github:miguelzakharia/aurelia-google-analytics@1.0.3/index.js",
      "github:systemjs/plugin-text@0.0.3.js",
      "github:systemjs/plugin-text@0.0.3/text.js",
      "github:twbs/bootstrap@3.3.6.js",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-text@0.0.3.js",
      "github:twbs/bootstrap@3.3.6/js/bootstrap.js",
      "github:vheissu/aurelia-configuration@1.0.6.js",
      "github:vheissu/aurelia-configuration@1.0.6/aurelia-configuration.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.1.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.1/aurelia-animator-css.js",
      "npm:aurelia-auth@2.1.3.js",
      "npm:aurelia-auth@2.1.3/aurelia-auth.js",
      "npm:aurelia-auth@2.1.3/auth-fetch-config.js",
      "npm:aurelia-auth@2.1.3/auth-filter.js",
      "npm:aurelia-auth@2.1.3/auth-service.js",
      "npm:aurelia-auth@2.1.3/auth-utilities.js",
      "npm:aurelia-auth@2.1.3/authentication.js",
      "npm:aurelia-auth@2.1.3/authorize-step.js",
      "npm:aurelia-auth@2.1.3/base-config.js",
      "npm:aurelia-auth@2.1.3/oAuth1.js",
      "npm:aurelia-auth@2.1.3/oAuth2.js",
      "npm:aurelia-auth@2.1.3/popup.js",
      "npm:aurelia-auth@2.1.3/storage.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.6.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.6/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1/aurelia-bootstrapper.js",
      "npm:aurelia-breeze@1.2.0.js",
      "npm:aurelia-breeze@1.2.0/aurelia-breeze.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0/aurelia-dependency-injection.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3/aurelia-dependency-injection.js",
      "npm:aurelia-dialog@0.6.2.js",
      "npm:aurelia-dialog@0.6.2/aurelia-dialog.js",
      "npm:aurelia-dialog@0.6.2/dialog-configuration.js",
      "npm:aurelia-dialog@0.6.2/dialog-controller.js",
      "npm:aurelia-dialog@0.6.2/dialog-options.js",
      "npm:aurelia-dialog@0.6.2/dialog-service.js",
      "npm:aurelia-dialog@0.6.2/dialog.css!github:systemjs/plugin-text@0.0.3.js",
      "npm:aurelia-dialog@0.6.2/lifecycle.js",
      "npm:aurelia-dialog@0.6.2/renderers/dialog-renderer.js",
      "npm:aurelia-dialog@0.6.2/renderers/renderer.js",
      "npm:aurelia-dialog@0.6.2/resources/ai-dialog-body.html!github:systemjs/plugin-text@0.0.3.js",
      "npm:aurelia-dialog@0.6.2/resources/ai-dialog-body.js",
      "npm:aurelia-dialog@0.6.2/resources/ai-dialog-footer.html!github:systemjs/plugin-text@0.0.3.js",
      "npm:aurelia-dialog@0.6.2/resources/ai-dialog-footer.js",
      "npm:aurelia-dialog@0.6.2/resources/ai-dialog-header.html!github:systemjs/plugin-text@0.0.3.js",
      "npm:aurelia-dialog@0.6.2/resources/ai-dialog-header.js",
      "npm:aurelia-dialog@0.6.2/resources/ai-dialog.html!github:systemjs/plugin-text@0.0.3.js",
      "npm:aurelia-dialog@0.6.2/resources/ai-dialog.js",
      "npm:aurelia-dialog@0.6.2/resources/attach-focus.js",
      "npm:aurelia-dragula@1.1.1.js",
      "npm:aurelia-dragula@1.1.1/classes.js",
      "npm:aurelia-dragula@1.1.1/dragula-and-drop.js",
      "npm:aurelia-dragula@1.1.1/dragula.css!github:systemjs/plugin-text@0.0.3.js",
      "npm:aurelia-dragula@1.1.1/dragula.js",
      "npm:aurelia-dragula@1.1.1/emitter.js",
      "npm:aurelia-dragula@1.1.1/index.js",
      "npm:aurelia-dragula@1.1.1/move-before.js",
      "npm:aurelia-dragula@1.1.1/options.js",
      "npm:aurelia-dragula@1.1.1/touchy.js",
      "npm:aurelia-dragula@1.1.1/util.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.2.5.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.2.5/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.5.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.5/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.1.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.1/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.2.1.js",
      "npm:aurelia-history@1.0.0-beta.1.2.1/aurelia-history.js",
      "npm:aurelia-http-client@1.0.0-beta.1.2.2.js",
      "npm:aurelia-http-client@1.0.0-beta.1.2.2/aurelia-http-client.js",
      "npm:aurelia-i18n@0.5.3.js",
      "npm:aurelia-i18n@0.5.3/aurelia-i18n.js",
      "npm:aurelia-i18n@0.5.3/base-i18n.js",
      "npm:aurelia-i18n@0.5.3/defaultTranslations/relative.time.js",
      "npm:aurelia-i18n@0.5.3/df.js",
      "npm:aurelia-i18n@0.5.3/i18n.js",
      "npm:aurelia-i18n@0.5.3/nf.js",
      "npm:aurelia-i18n@0.5.3/relativeTime.js",
      "npm:aurelia-i18n@0.5.3/rt.js",
      "npm:aurelia-i18n@0.5.3/t.js",
      "npm:aurelia-i18n@0.5.3/utils.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.2.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.2/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.2.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.2/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.1.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.1.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.1/aurelia-metadata.js",
      "npm:aurelia-notification@1.0.0-rc1.js",
      "npm:aurelia-notification@1.0.0-rc1/aurelia-notification.js",
      "npm:aurelia-pal-browser@1.0.0-beta.2.0.1.js",
      "npm:aurelia-pal-browser@1.0.0-beta.2.0.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.2.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.2/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.2.2.js",
      "npm:aurelia-path@1.0.0-beta.1.2.2/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.6.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.6/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.2.3.js",
      "npm:aurelia-router@1.0.0-beta.1.2.3/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.1.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.4.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.4/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/hide.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.7.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.7/aurelia-templating.js",
      "npm:aurelia-ui-virtualization@0.4.5.js",
      "npm:aurelia-ui-virtualization@0.4.5/array-virtual-repeat-strategy.js",
      "npm:aurelia-ui-virtualization@0.4.5/dom-helper.js",
      "npm:aurelia-ui-virtualization@0.4.5/index.js",
      "npm:aurelia-ui-virtualization@0.4.5/utilities.js",
      "npm:aurelia-ui-virtualization@0.4.5/view-strategy.js",
      "npm:aurelia-ui-virtualization@0.4.5/virtual-repeat-strategy-locator.js",
      "npm:aurelia-ui-virtualization@0.4.5/virtual-repeat.js",
      "npm:aurelia-validatejs@0.3.1.js",
      "npm:aurelia-validatejs@0.3.1/base-decorator.js",
      "npm:aurelia-validatejs@0.3.1/decorators.js",
      "npm:aurelia-validatejs@0.3.1/index.js",
      "npm:aurelia-validatejs@0.3.1/metadata-key.js",
      "npm:aurelia-validatejs@0.3.1/property-observer.js",
      "npm:aurelia-validatejs@0.3.1/validate-binding-behavior.js",
      "npm:aurelia-validatejs@0.3.1/validation-config.js",
      "npm:aurelia-validatejs@0.3.1/validation-engine.js",
      "npm:aurelia-validatejs@0.3.1/validation-renderer.js",
      "npm:aurelia-validatejs@0.3.1/validation-reporter.js",
      "npm:aurelia-validatejs@0.3.1/validation-rule.js",
      "npm:aurelia-validatejs@0.3.1/validator.js",
      "npm:aurelia-validation@0.8.1.js",
      "npm:aurelia-validation@0.8.1/index.js",
      "npm:aurelia-validation@0.8.1/validation-engine.js",
      "npm:aurelia-validation@0.8.1/validation-error.js",
      "npm:aurelia-validation@0.8.1/validation-reporter.js",
      "npm:aurelia-validation@0.8.1/validator.js",
      "npm:base64-js@0.0.8.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:breeze-client@1.5.6.js",
      "npm:breeze-client@1.5.6/breeze.debug.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:deep-equal@1.0.1.js",
      "npm:deep-equal@1.0.1/index.js",
      "npm:deep-equal@1.0.1/lib/is_arguments.js",
      "npm:deep-equal@1.0.1/lib/keys.js",
      "npm:deep-extend@0.4.1.js",
      "npm:deep-extend@0.4.1/lib/deep-extend.js",
      "npm:deepcopy@0.6.1.js",
      "npm:deepcopy@0.6.1/index.js",
      "npm:deepcopy@0.6.1/lib/copy.js",
      "npm:deepcopy@0.6.1/lib/index.js",
      "npm:deepcopy@0.6.1/lib/polyfill.js",
      "npm:extend@3.0.0.js",
      "npm:extend@3.0.0/index.js",
      "npm:humane-js@3.2.2.js",
      "npm:humane-js@3.2.2/humane.js",
      "npm:i18next-xhr-backend@0.5.4.js",
      "npm:i18next-xhr-backend@0.5.4/dist/commonjs/index.js",
      "npm:i18next-xhr-backend@0.5.4/dist/commonjs/utils.js",
      "npm:i18next-xhr-backend@0.5.4/index.js",
      "npm:i18next@2.5.1.js",
      "npm:i18next@2.5.1/dist/commonjs/BackendConnector.js",
      "npm:i18next@2.5.1/dist/commonjs/CacheConnector.js",
      "npm:i18next@2.5.1/dist/commonjs/EventEmitter.js",
      "npm:i18next@2.5.1/dist/commonjs/Interpolator.js",
      "npm:i18next@2.5.1/dist/commonjs/LanguageUtils.js",
      "npm:i18next@2.5.1/dist/commonjs/PluralResolver.js",
      "npm:i18next@2.5.1/dist/commonjs/ResourceStore.js",
      "npm:i18next@2.5.1/dist/commonjs/Translator.js",
      "npm:i18next@2.5.1/dist/commonjs/compatibility/v1.js",
      "npm:i18next@2.5.1/dist/commonjs/defaults.js",
      "npm:i18next@2.5.1/dist/commonjs/i18next.js",
      "npm:i18next@2.5.1/dist/commonjs/index.js",
      "npm:i18next@2.5.1/dist/commonjs/logger.js",
      "npm:i18next@2.5.1/dist/commonjs/postProcessor.js",
      "npm:i18next@2.5.1/dist/commonjs/utils.js",
      "npm:i18next@2.5.1/index.js",
      "npm:ieee754@1.1.6.js",
      "npm:ieee754@1.1.6/index.js",
      "npm:isarray@1.0.0.js",
      "npm:isarray@1.0.0/index.js",
      "npm:isomorphic-fetch@2.2.1.js",
      "npm:isomorphic-fetch@2.2.1/fetch-npm-browserify.js",
      "npm:javascript-decorators@0.7.1.js",
      "npm:javascript-decorators@0.7.1/index.js",
      "npm:javascript-decorators@0.7.1/lib/@after.js",
      "npm:javascript-decorators@0.7.1/lib/@autobind.js",
      "npm:javascript-decorators@0.7.1/lib/@before.js",
      "npm:javascript-decorators@0.7.1/lib/@compose.js",
      "npm:javascript-decorators@0.7.1/lib/@deprecated.js",
      "npm:javascript-decorators@0.7.1/lib/@executors.js",
      "npm:javascript-decorators@0.7.1/lib/@immutablors.js",
      "npm:javascript-decorators@0.7.1/lib/@inheritedfunctions.js",
      "npm:javascript-decorators@0.7.1/lib/@loggers.js",
      "npm:javascript-decorators@0.7.1/lib/@memoizator.js",
      "npm:javascript-decorators@0.7.1/lib/@multiinheritance.js",
      "npm:javascript-decorators@0.7.1/lib/@passedValuesEqualToNumberOfArguments.js",
      "npm:javascript-decorators@0.7.1/lib/@stators.js",
      "npm:javascript-decorators@0.7.1/lib/@timers.js",
      "npm:javascript-decorators@0.7.1/lib/@trycatch.js",
      "npm:javascript-decorators@0.7.1/lib/@validators.js",
      "npm:javascript-decorators@0.7.1/lib/helpers.js",
      "npm:javascript-decorators@0.7.1/lib/index.js",
      "npm:javascript-decorators@0.7.1/lib/validationHelpers.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js",
      "npm:process@0.11.3.js",
      "npm:process@0.11.3/browser.js",
      "npm:validate.js@0.9.0.js",
      "npm:validate.js@0.9.0/validate.js",
      "npm:whatwg-fetch@1.0.0.js",
      "npm:whatwg-fetch@1.0.0/fetch.js"
    ]
  },
  depCache: {
    "app.js": [
      "aurelia-framework",
      "aurelia-router",
      "aurelia-auth",
      "app.router.config"
    ],
    "app.router.config.js": [
      "aurelia-auth",
      "aurelia-framework",
      "aurelia-router"
    ],
    "blur-image.js": [
      "aurelia-framework"
    ],
    "login.js": [
      "aurelia-auth",
      "aurelia-framework"
    ],
    "logout.js": [
      "aurelia-auth",
      "aurelia-framework"
    ],
    "main.js": [
      "bootstrap",
      "aurelia-configuration",
      "i18next-xhr-backend"
    ],
    "signup.js": [
      "aurelia-framework",
      "aurelia-auth"
    ],
    "users.js": [
      "aurelia-framework",
      "aurelia-fetch-client",
      "fetch"
    ]
  }
});