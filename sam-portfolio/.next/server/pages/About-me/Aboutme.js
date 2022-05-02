(() => {
var exports = {};
exports.id = 847;
exports.ids = [847];
exports.modules = {

/***/ 8125:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "AboutSite_container__Kv_ak",
	"content": "AboutSite_content__FE1Ng",
	"miniBox": "AboutSite_miniBox__QFq3S",
	"line": "AboutSite_line__wz1PT"
};


/***/ }),

/***/ 7719:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ContactInfo_container__nJ4iM",
	"secContent": "ContactInfo_secContent__AJ_vQ",
	"box": "ContactInfo_box__yqkm0",
	"content": "ContactInfo_content__H4UjR",
	"line": "ContactInfo_line__33H7J",
	"each": "ContactInfo_each__MvoA0",
	"email": "ContactInfo_email__4oDoF"
};


/***/ }),

/***/ 6096:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Education_container__qrAaQ",
	"content": "Education_content__69ZNR",
	"box": "Education_box__GDUMK",
	"box1": "Education_box1__LwkCC",
	"list": "Education_list__Z_R40",
	"each": "Education_each___mn6C",
	"clubDiscrip": "Education_clubDiscrip__MZDZ_",
	"discripTitle": "Education_discripTitle__p2y4Z"
};


/***/ }),

/***/ 1007:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Work_container__VcMNH",
	"content": "Work_content__2iHEl",
	"box1": "Work_box1__QInil",
	"box2": "Work_box2__Pco5i",
	"resp": "Work_resp__68oFf",
	"values": "Work_values__gZuGF",
	"values2": "Work_values2__ROY08",
	"miniBox": "Work_miniBox__DSsnX",
	"link": "Work_link__whxeo"
};


/***/ }),

/***/ 3848:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Aboutme_container__tTDXp",
	"content": "Aboutme_content__XzpGC",
	"list": "Aboutme_list__T_IPT",
	"back": "Aboutme_back__Hy2CD",
	"bar": "Aboutme_bar__UrS_V",
	"links": "Aboutme_links__YQO3z"
};


/***/ }),

/***/ 7575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ About_me_Aboutme),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./pages/About-me/Aboutme.module.css
var Aboutme_module = __webpack_require__(3848);
var Aboutme_module_default = /*#__PURE__*/__webpack_require__.n(Aboutme_module);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./component/Education/Education.module.css
var Education_module = __webpack_require__(6096);
var Education_module_default = /*#__PURE__*/__webpack_require__.n(Education_module);
;// CONCATENATED MODULE: ./component/Education/Education.tsx

/* eslint-disable @next/next/no-page-custom-font */ 

const Education = (props)=>{
    const { schools  } = props;
    const { clubs  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap",
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Education_module_default()).container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Education_module_default()).content,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (Education_module_default()).box1,
                                children: "Education"
                            }),
                            schools.map((items, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Education_module_default()).box,
                                    children: [
                                        items.name,
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (Education_module_default()).list,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (Education_module_default()).each,
                                                children: [
                                                    "Major: ",
                                                    items.major,
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (Education_module_default()).each,
                                                        children: [
                                                            "Degree: ",
                                                            items.degree
                                                        ]
                                                    }, items.name),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (Education_module_default()).each,
                                                        children: [
                                                            "Graduation date: ",
                                                            items.grad
                                                        ]
                                                    }, index)
                                                ]
                                            }, items.name)
                                        })
                                    ]
                                }, items.id)
                            )
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Education_module_default()).content,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (Education_module_default()).box1,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Clubs"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Education_module_default()).box,
                                children: [
                                    clubs.name,
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Education_module_default()).list,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (Education_module_default()).each,
                                            children: [
                                                "Club: ",
                                                clubs.clubName,
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (Education_module_default()).each,
                                                    children: [
                                                        "Joined: ",
                                                        clubs.dateJoined,
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: (Education_module_default()).each,
                                                            children: [
                                                                "Position: ",
                                                                clubs.position
                                                            ]
                                                        }, clubs.id)
                                                    ]
                                                }, clubs.id)
                                            ]
                                        }, clubs.id)
                                    })
                                ]
                            }, clubs.id),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Education_module_default()).clubDiscrip,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Education_module_default()).discripTitle,
                                        children: "Description:"
                                    }),
                                    "Osprey Competitive Programming has taught me how to work with a group on individuals as a team. It has brought up a number of great discussions from trying to understand complex, multi-faceted level questions to coming together as a group to discussion and understand each others approach to different issues."
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Education_Education = (Education);

// EXTERNAL MODULE: ./component/Work/Work.module.css
var Work_module = __webpack_require__(1007);
var Work_module_default = /*#__PURE__*/__webpack_require__.n(Work_module);
;// CONCATENATED MODULE: ./component/Work/Work.tsx

/* eslint-disable @next/next/no-page-custom-font */ 


const Work = (props)=>{
    const { work  } = props;
    const website = new Array(work.length);
    // const website = work.website;
    for(let i = 0; i < work.length; i++){
        website[i] = work[i].website;
        if (website[i] == "") {
            work[i].website = "/About-me/Aboutme";
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap",
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Work_module_default()).container,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Work_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: (Work_module_default()).box1,
                            children: "Work Experience"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Work_module_default()).box2,
                            children: work.map((items, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Work_module_default()).values,
                                        children: [
                                            "Company:",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: items.website,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: (Work_module_default()).link,
                                                    target: "_blank",
                                                    children: items.workPlace
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    ", ",
                                                    items.position
                                                ]
                                            }, items.position),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Work_module_default()).resp,
                                                children: items.responsiblity
                                            }, items.responsiblity),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Work_module_default()).miniBox,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (Work_module_default()).values2,
                                                    children: [
                                                        "Hire Date: ",
                                                        items.hireDate,
                                                        "\u2003 Leave Date: ",
                                                        items.leaveDate
                                                    ]
                                                }, items.workPlace)
                                            })
                                        ]
                                    }, items.workPlace)
                                }, items.workPlace)
                            )
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Work_Work = (Work);

// EXTERNAL MODULE: ./node_modules/.prisma/client/index.js
var client = __webpack_require__(4836);
// EXTERNAL MODULE: ./component/ContactInfo/ContactInfo.module.css
var ContactInfo_module = __webpack_require__(7719);
var ContactInfo_module_default = /*#__PURE__*/__webpack_require__.n(ContactInfo_module);
;// CONCATENATED MODULE: ./component/ContactInfo/ContactInfo.tsx

/* eslint-disable @next/next/no-page-custom-font */ 


const ContactInfo = (props)=>{
    const { contactInfo  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap",
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ContactInfo_module_default()).container,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ContactInfo_module_default()).secContent,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: (ContactInfo_module_default()).top,
                            children: "Contact me"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (ContactInfo_module_default()).content,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (ContactInfo_module_default()).box,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: (ContactInfo_module_default()).title,
                                            children: "Contact Information"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (ContactInfo_module_default()).each,
                                            children: contactInfo.Name
                                        }, contactInfo.id),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (ContactInfo_module_default()).email,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "mailto:samwilk18@yahoo.com",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: contactInfo.Email
                                                })
                                            })
                                        }, contactInfo.id),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (ContactInfo_module_default()).each,
                                            children: contactInfo.Number
                                        }, contactInfo.id)
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (ContactInfo_module_default()).line
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (ContactInfo_module_default()).box,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: (ContactInfo_module_default()).title,
                                            children: "Location"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (ContactInfo_module_default()).each,
                                            children: [
                                                contactInfo.City,
                                                ", ",
                                                contactInfo.State
                                            ]
                                        }, contactInfo.id)
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const ContactInfo_ContactInfo = (ContactInfo);

// EXTERNAL MODULE: ./component/AboutSite/AboutSite.module.css
var AboutSite_module = __webpack_require__(8125);
var AboutSite_module_default = /*#__PURE__*/__webpack_require__.n(AboutSite_module);
;// CONCATENATED MODULE: ./component/AboutSite/AboutSite.tsx

/* eslint-disable @next/next/no-page-custom-font */ 

const AboutSite = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap",
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (AboutSite_module_default()).container,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (AboutSite_module_default()).content,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (AboutSite_module_default()).miniBox,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "About Site"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (AboutSite_module_default()).text,
                                children: "This site was built off of Next Js. Which is a modern framework that is built off of React Js. It is full stack framework that allows developers to work with a backend without having to set up a backend. Most the the data that is being displayed on this website is being used with Next Js and Prisma. Prisma is an open source next-generation ORM."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (AboutSite_module_default()).line
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (AboutSite_module_default()).text,
                                children: "As for the database used for this website, I used SQlite. Prisma supports SQlite and it is open source as well so I figured it was better fit for this static site. Prisma is Auto-generated and type-safe query builder for Node.js & TypeScript. Prisma Client can be used in any Node.js (supported versions) or TypeScript backend application (including serverless applications and microservices). This can be a REST API, a GraphQL API, a gRPC API, or anything else that needs a database."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (AboutSite_module_default()).line
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (AboutSite_module_default()).text,
                                children: "I find that working with Next Js is very easy to do and the documentation from the site makes it very easy to follow. Having worked with blitz Js, Next Js, and alittle Angular Js both react based framworks are very easy to catch on and work with. Also both Next Js and Blitz Js being fullstack frameworks makes working with queries and mutations so much easier."
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const AboutSite_AboutSite = (AboutSite);

;// CONCATENATED MODULE: ./pages/About-me/Aboutme.tsx

/* eslint-disable @next/next/no-page-custom-font */ 








// import "rxjs/add/operator/map";
const prisma = new client.PrismaClient();
async function getStaticProps() {
    const schools = await prisma.school.findMany();
    const clubs = await prisma.clubs.findFirst({
        where: {
            id: 1
        }
    });
    const work = await prisma.work.findMany();
    const contactInfo = await prisma.contactInfo.findFirst();
    return {
        props: {
            schools,
            clubs,
            work,
            contactInfo
        }
    };
}
//Then here do props: { schools: any, clubs: any}
const Aboutme = (props)=>{
    function handleChange(edu, work, res, contact) {
        setEdu(edu);
        setWork(work);
        setRes(res);
        setContact(contact);
    }
    const { 0: edu1 , 1: setEdu  } = (0,external_react_.useState)(true);
    const { 0: work1 , 1: setWork  } = (0,external_react_.useState)(false);
    const { 0: res1 , 1: setRes  } = (0,external_react_.useState)(false);
    const { 0: contact1 , 1: setContact  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap",
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Aboutme_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Aboutme_module_default()).back,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Aboutme_module_default()).bar,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/About-me/Aboutme",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: (Aboutme_module_default()).links,
                                        onClick: ()=>handleChange(true, false, false, false)
                                        ,
                                        children: "Education"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/About-me/Aboutme",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: (Aboutme_module_default()).links,
                                        onClick: ()=>handleChange(false, true, false, false)
                                        ,
                                        children: "Work"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/About-me/Aboutme",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: (Aboutme_module_default()).links,
                                        onClick: ()=>handleChange(false, false, false, true)
                                        ,
                                        children: "Contact"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/About-me/Aboutme",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: (Aboutme_module_default()).links,
                                        onClick: ()=>handleChange(false, false, true, false)
                                        ,
                                        children: "About This Site"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "content",
                        className: (Aboutme_module_default()).content,
                        children: [
                            edu1 && /*#__PURE__*/ jsx_runtime_.jsx(Education_Education, {
                                ...props
                            }),
                            work1 && /*#__PURE__*/ jsx_runtime_.jsx(Work_Work, {
                                ...props
                            }),
                            res1 && /*#__PURE__*/ jsx_runtime_.jsx(AboutSite_AboutSite, {}),
                            contact1 && /*#__PURE__*/ jsx_runtime_.jsx(ContactInfo_ContactInfo, {
                                ...props
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const About_me_Aboutme = (Aboutme);


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
var __webpack_exports__ = __webpack_require__.X(0, [895,664,836], () => (__webpack_exec__(7575)));
module.exports = __webpack_exports__;

})();