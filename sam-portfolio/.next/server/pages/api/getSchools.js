"use strict";
(() => {
var exports = {};
exports.id = 32;
exports.ids = [32];
exports.modules = {

/***/ 5423:
/***/ ((module) => {

module.exports = require("@prisma/client/runtime");

/***/ }),

/***/ 207:
/***/ ((module) => {

module.exports = require("@prisma/client/runtime/index");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 2645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSchools": () => (/* binding */ getSchools)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5659);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
async function getSchools() {
    const schools = prisma.school.findMany();
    return {
        props: {
            initalSchools: schools
        }
    };
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [659], () => (__webpack_exec__(2645)));
module.exports = __webpack_exports__;

})();