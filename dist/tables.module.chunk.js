webpackJsonp(["tables.module"],{

/***/ "../../../../../src/app/layout/tables/tables-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tables_component__ = __webpack_require__("../../../../../src/app/layout/tables/tables.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__tables_component__["a" /* TablesComponent */]
    }
];
var TablesRoutingModule = /** @class */ (function () {
    function TablesRoutingModule() {
    }
    TablesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], TablesRoutingModule);
    return TablesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/tables/tables.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <h2 class=\"text-muted\">Cotización Actual</h2>\n    &nbsp;\n    <div class=\"row\">\n        <div class=\"col col-xl-12 col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Juan Pérez\n                    <button type=\"button\" class=\"btn btn-primary\">\n                        <span class=\"glyphicon glyphicon-add\"></span> Enviar\n                    </button>\n                    <button type=\"button\" class=\"btn btn-warning\">\n                        <span class=\"glyphicon glyphicon-add\"></span> Eliminar\n                    </button>\n                    \n                </div>\n    <div class=\"card-body table-responsive\">\n    <table class=\"table\">\n        <thead>\n        <tr>\n            <th>ID</th>\n            <th>Marca</th>\n            <th>Cantidad</th>\n            <th>Precio</th>\n            <th>Moneda</th>\n            <th>Remover</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <th scope=\"row\">1</th>\n            <td>KOYO</td>\n            <td>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" value=\"2\">\n            </td>\n            <td><strong>$4.99</strong></td>\n            <td>MXN</td>\n            <td>\n                <button type=\"button\" class=\"btn btn-danger\">\n                    <span class=\"glyphicon glyphicon-add\"></span> Remover\n                </button>\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">2</th>\n            <td>GATES</td>\n            <td>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" value=\"2\">\n            </td>\n            <td><strong>$4.99</strong></td>\n            <td>USD</td>\n            <td>\n                <button type=\"button\" class=\"btn btn-danger\">\n                    <span class=\"glyphicon glyphicon-add\"></span> Remover\n                </button>\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">3</th>\n            <td>FAG</td>\n            <td>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" value=\"2\">\n            </td>\n            <td><strong>$4.99</strong></td>\n            <td>USD</td>\n            <td>\n                <button type=\"button\" class=\"btn btn-danger\">\n                    <span class=\"glyphicon glyphicon-add\"></span> Remover\n                </button>\n            </td>\n        </tr>\n        <tr>\n            <th></th>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td>\n                <button type=\"button\" class=\"btn btn-success\">\n                    <span class=\"glyphicon glyphicon-add\"></span> Agregar\n                </button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n    </div>\n            </div>\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Luis Ramírez\n                    <button type=\"button\" class=\"btn btn-primary\">\n                        <span class=\"glyphicon glyphicon-add\"></span> Enviar\n                    </button>\n                    <button type=\"button\" class=\"btn btn-warning\">\n                        <span class=\"glyphicon glyphicon-add\"></span> Eliminar\n                    </button>\n                </div>\n                <div class=\"card-body table-responsive\">\n    <table class=\"table\">\n        <thead>\n        <tr>\n            <th>ID</th>\n            <th>Marca</th>\n            <th>Cantidad</th>\n            <th>Precio</th>\n            <th>Moneda</th>\n            <th>Remover</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <th scope=\"row\">1</th>\n            <td>KOYO</td>\n            <td>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" value=\"2\">\n            </td>\n            <td><strong>$4.99</strong></td>\n            <td>MXN</td>\n            <td>\n                <button type=\"button\" class=\"btn btn-danger\">\n                    <span class=\"glyphicon glyphicon-add\"></span> Remover\n                </button>\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">2</th>\n            <td>GATES</td>\n            <td>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" value=\"2\">\n            </td>\n            <td><strong>$4.99</strong></td>\n            <td>USD</td>\n            <td>\n                <button type=\"button\" class=\"btn btn-danger\">\n                    <span class=\"glyphicon glyphicon-add\"></span> Remover\n                </button>\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">3</th>\n            <td>FAG</td>\n            <td>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" value=\"2\">\n            </td>\n            <td><strong>$4.99</strong></td>\n            <td>USD</td>\n            <td>\n                <button type=\"button\" class=\"btn btn-danger\">\n                    <span class=\"glyphicon glyphicon-add\"></span> Remover\n                </button>\n            </td>\n        </tr>\n        <tr>\n            <th></th>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td>\n                <button type=\"button\" class=\"btn btn-success\">\n                    <span class=\"glyphicon glyphicon-add\"></span> Agregar\n                </button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n                </div>\n            </div>\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Diego García\n                    <button type=\"button\" class=\"btn btn-primary\">\n                        <span class=\"glyphicon glyphicon-add\"></span> Enviar\n                    </button>\n                    <button type=\"button\" class=\"btn btn-warning\">\n                        <span class=\"glyphicon glyphicon-add\"></span> Eliminar\n                    </button>\n                </div>\n                <div class=\"card-body table-responsive\">\n    <table class=\"table\">\n        <thead>\n        <tr>\n            <th>ID</th>\n            <th>Marca</th>\n            <th>Cantidad</th>\n            <th>Precio</th>\n            <th>Moneda</th>\n            <th>Remover</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <th scope=\"row\">1</th>\n            <td>KOYO</td>\n            <td>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" value=\"2\">\n            </td>\n            <td><strong>$4.99</strong></td>\n            <td>MXN</td>\n            <td>\n                <button type=\"button\" class=\"btn btn-danger\">\n                    <span class=\"glyphicon glyphicon-add\"></span> Remover\n                </button>\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">2</th>\n            <td>GATES</td>\n            <td>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" value=\"2\">\n            </td>\n            <td><strong>$4.99</strong></td>\n            <td>USD</td>\n            <td>\n                <button type=\"button\" class=\"btn btn-danger\">\n                    <span class=\"glyphicon glyphicon-add\"></span> Remover\n                </button>\n            </td>\n        </tr>\n        <tr>\n            <th scope=\"row\">3</th>\n            <td>FAG</td>\n            <td>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" value=\"2\">\n            </td>\n            <td><strong>$4.99</strong></td>\n            <td>USD</td>\n            <td>\n                <button type=\"button\" class=\"btn btn-danger\">\n                    <span class=\"glyphicon glyphicon-add\"></span> Remover\n                </button>\n            </td>\n        </tr>\n        <tr>\n            <th></th>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td>\n                <button type=\"button\" class=\"btn btn-success\">\n                    <span class=\"glyphicon glyphicon-add\"></span> Agregar\n                </button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/tables/tables.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/tables/tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () { };
    TablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__("../../../../../src/app/layout/tables/tables.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/tables/tables.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/tables/tables.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tables_routing_module__ = __webpack_require__("../../../../../src/app/layout/tables/tables-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tables_component__ = __webpack_require__("../../../../../src/app/layout/tables/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__tables_routing_module__["a" /* TablesRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__tables_component__["a" /* TablesComponent */]]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ })

});
//# sourceMappingURL=tables.module.chunk.js.map