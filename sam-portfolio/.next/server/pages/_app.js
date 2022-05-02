(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4030:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__Fgfs9",
	"content": "Layout_content__tmWzV",
	"Photo": "Layout_Photo__Jqn3l",
	"jax": "Layout_jax__NfwOX",
	"back": "Layout_back__gLLFj"
};


/***/ }),

/***/ 3178:
/***/ ((module) => {

// Exports
module.exports = {
	"bar": "Navbar_bar__ZrBTR",
	"back": "Navbar_back__VqrJt",
	"logo": "Navbar_logo__HD_U5",
	"each": "Navbar_each__tT5Qd"
};


/***/ }),

/***/ 6847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./component/navbar/Navbar.module.css
var Navbar_module = __webpack_require__(3178);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./component/navbar/Navbar.tsx

/* eslint-disable @next/next/no-page-custom-font */ 


const Navbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap",
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Navbar_module_default()).back,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Navbar_module_default()).bar,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (Navbar_module_default()).each,
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/Projects/projects",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (Navbar_module_default()).each,
                                children: "Projects"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/About-me/Aboutme",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (Navbar_module_default()).each,
                                children: "About Me"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "https://github.com/SamWilk",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (Navbar_module_default()).each,
                                target: "_blank",
                                children: "GitHub"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "https://www.linkedin.com/in/sam-wilk-a66314210/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: (Navbar_module_default()).each,
                                target: "_blank",
                                children: "Linkedin"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const navbar_Navbar = (Navbar);

// EXTERNAL MODULE: ./component/Layouts/Layout.module.css
var Layout_module = __webpack_require__(4030);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./component/Layouts/Layout.tsx



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Layout_module_default()).back,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Layout_module_default()).container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(navbar_Navbar, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Layout_module_default()).content,
                            children: children
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Layout_module_default()).Photo,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/Jax.jpeg",
                    alt: "Jax Skyline",
                    className: (Layout_module_default()).jax
                })
            })
        ]
    });
};
/* harmony default export */ const Layouts_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.tsx



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layouts_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664], () => (__webpack_exec__(6847)));
module.exports = __webpack_exports__;

})();