(() => {
var exports = {};
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 2866:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "MyProject_container__HFUjl",
	"content": "MyProject_content__ux8oD",
	"fadedContainer": "MyProject_fadedContainer__8ep61",
	"organizeInfo": "MyProject_organizeInfo__mwP86",
	"line": "MyProject_line__URDMM",
	"projectText": "MyProject_projectText__Y4_Mh"
};


/***/ }),

/***/ 6493:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "projects_container__23LIo"
};


/***/ }),

/***/ 1302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projects),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./pages/Projects/projects.module.css
var projects_module = __webpack_require__(6493);
var projects_module_default = /*#__PURE__*/__webpack_require__.n(projects_module);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./component/myProject/MyProject.module.css
var MyProject_module = __webpack_require__(2866);
var MyProject_module_default = /*#__PURE__*/__webpack_require__.n(MyProject_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./component/myProject/MyProject.tsx



const MyProject = (prop)=>{
    const { props: { projects  } ,  } = prop;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (MyProject_module_default()).container,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (MyProject_module_default()).content,
                children: projects.map((items)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: items.site,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            target: "_blank",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (MyProject_module_default()).fadedContainer,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (MyProject_module_default()).fadedBack
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (MyProject_module_default()).organizeInfo,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (MyProject_module_default()).projectText,
                                                children: items.name
                                            }, items.id),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (MyProject_module_default()).line
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (MyProject_module_default()).siteDescription,
                                                children: items.discription
                                            }, items.id)
                                        ]
                                    })
                                ]
                            }, items.id)
                        })
                    }, items.id)
                )
            })
        })
    });
};
/* harmony default export */ const myProject_MyProject = (MyProject);

// EXTERNAL MODULE: ./node_modules/.prisma/client/index.js
var client = __webpack_require__(4836);
;// CONCATENATED MODULE: ./pages/Projects/projects.tsx

/* eslint-disable @next/next/no-page-custom-font */ 



const prisma = new client.PrismaClient();
async function getStaticProps() {
    const projects = await prisma.projects.findMany();
    return {
        props: {
            projects
        }
    };
}
const searchingList = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap",
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (projects_module_default()).container,
                children: /*#__PURE__*/ jsx_runtime_.jsx(myProject_MyProject, {
                    props: props
                })
            })
        ]
    });
};
/* harmony default export */ const projects = (searchingList);


/***/ }),

/***/ 5423:
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client/runtime");

/***/ }),

/***/ 207:
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client/runtime/index");

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

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,836], () => (__webpack_exec__(1302)));
module.exports = __webpack_exports__;

})();