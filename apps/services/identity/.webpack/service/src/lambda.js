/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ ;(() => {
  // webpackBootstrap
  /******/ 'use strict'
  /******/ var __webpack_modules__ = {
    /***/ './src/app/app.controller.ts':
      /*!***********************************!*\
  !*** ./src/app/app.controller.ts ***!
  \***********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "AppController": () => (/* binding */ AppController)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");\n\n\n\nlet AppController = class AppController {\n    constructor(appService) {\n        this.appService = appService;\n    }\n    hello() {\n        return \'Hello from AWS Identity Lambda!\';\n    }\n    getData() {\n        return this.appService.getData();\n    }\n};\n(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Get)(\'hello\'),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", []),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)\n], AppController.prototype, "hello", null);\n(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Get)(),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", []),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)\n], AppController.prototype, "getData", null);\nAppController = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Controller)(),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService])\n], AppController);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FwcC5jb250cm9sbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0Q7QUFFTjtBQUduQyxJQUFNLGFBQWEsR0FBbkIsTUFBTSxhQUFhO0lBQ3hCLFlBQTZCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDO0lBR3ZELEtBQUs7UUFDSCxPQUFPLGlDQUFpQztJQUMxQyxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7SUFDbEMsQ0FBQztDQUNGO0FBUkM7SUFBQyxtREFBRyxDQUFDLE9BQU8sQ0FBQzs7OzswQ0FHWjtBQUNEO0lBQUMsbURBQUcsRUFBRTs7Ozs0Q0FHTDtBQVZVLGFBQWE7SUFEekIsMERBQVUsRUFBRTs0RUFFOEIsb0RBQVU7R0FEeEMsYUFBYSxDQVd6QjtBQVh5QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbnRyb2xsZXIudHM/MDQ2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyLCBHZXQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcblxuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vYXBwLnNlcnZpY2UnXG5cbkBDb250cm9sbGVyKClcbmV4cG9ydCBjbGFzcyBBcHBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlKSB7fVxuXG4gIEBHZXQoJ2hlbGxvJylcbiAgaGVsbG8oKSB7XG4gICAgcmV0dXJuICdIZWxsbyBmcm9tIEFXUyBJZGVudGl0eSBMYW1iZGEhJ1xuICB9XG4gIEBHZXQoKVxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmFwcFNlcnZpY2UuZ2V0RGF0YSgpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/app.controller.ts\n',
        )

        /***/
      },

    /***/ './src/app/app.module.ts':
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "AppModule": () => (/* binding */ AppModule)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sogrow_services_infra_observation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sogrow/services/infra/observation */ "../../../libs/services/infra/observation/src/index.ts");\n/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.controller */ "./src/app/app.controller.ts");\n/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");\n/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");\n/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");\n/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nlet AppModule = class AppModule {\n};\nAppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({\n        imports: [\n            _nestjs_config__WEBPACK_IMPORTED_MODULE_6__.ConfigModule.forRoot(),\n            _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__.AuthModule,\n            _sogrow_services_infra_observation__WEBPACK_IMPORTED_MODULE_2__.LoggerModule.forRoot()\n        ],\n        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_3__.AppController],\n        providers: [_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService],\n    })\n], AppModule);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3lCO0FBRWhCO0FBQ047QUFDSTtBQUNGO0FBV3JDLElBQU0sU0FBUyxHQUFmLE1BQU0sU0FBUztDQUFHO0FBQVosU0FBUztJQVRyQixzREFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ1AsZ0VBQW9CLEVBQUU7WUFDdEIseURBQVU7WUFDVixvRkFBb0IsRUFBRTtTQUN2QjtRQUNELFdBQVcsRUFBRSxDQUFDLDBEQUFhLENBQUM7UUFDNUIsU0FBUyxFQUFFLENBQUMsb0RBQVUsQ0FBQztLQUN4QixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5tb2R1bGUudHM/NjQwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7TG9nZ2VyTW9kdWxlfSBmcm9tIFwiQHNvZ3Jvdy9zZXJ2aWNlcy9pbmZyYS9vYnNlcnZhdGlvblwiO1xuXG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSAnLi9hcHAuY29udHJvbGxlcidcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuL2FwcC5zZXJ2aWNlJ1xuaW1wb3J0IHtBdXRoTW9kdWxlfSBmcm9tIFwiLi9hdXRoL2F1dGgubW9kdWxlXCI7XG5pbXBvcnQge0NvbmZpZ01vZHVsZX0gZnJvbSBcIkBuZXN0anMvY29uZmlnXCI7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBdXRoTW9kdWxlLFxuICAgIExvZ2dlck1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtBcHBDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbQXBwU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/app.module.ts\n',
        )

        /***/
      },

    /***/ './src/app/app.service.ts':
      /*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "AppService": () => (/* binding */ AppService)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet AppService = class AppService {\n    getData() {\n        return { message: \'Welcome to identity!\' };\n    }\n};\nAppService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)()\n], AppService);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FwcC5zZXJ2aWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUdwQyxJQUFNLFVBQVUsR0FBaEIsTUFBTSxVQUFVO0lBQ3JCLE9BQU87UUFDTCxPQUFPLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFO0lBQzVDLENBQUM7Q0FDRjtBQUpZLFVBQVU7SUFEdEIsMERBQVUsRUFBRTtHQUNBLFVBQVUsQ0FJdEI7QUFKc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5zZXJ2aWNlLnRzPzE3OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwU2VydmljZSB7XG4gIGdldERhdGEoKTogeyBtZXNzYWdlOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ1dlbGNvbWUgdG8gaWRlbnRpdHkhJyB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/app.service.ts\n',
        )

        /***/
      },

    /***/ './src/app/auth/auth.controller.ts':
      /*!*****************************************!*\
  !*** ./src/app/auth/auth.controller.ts ***!
  \*****************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "AuthController": () => (/* binding */ AuthController)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");\n/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nestjs_pino__WEBPACK_IMPORTED_MODULE_2__);\nvar AuthController_1;\n\n\n\nlet AuthController = AuthController_1 = class AuthController {\n    constructor(logger) {\n        this.logger = logger;\n        this.logger.setContext(AuthController_1.name);\n    }\n    signup() {\n        this.logger.info(\'Signup Call is rolling\');\n        return \'You called signup\';\n    }\n    signin() {\n        // noop\n    }\n};\n(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Get)(\'signup\'),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", []),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)\n], AuthController.prototype, "signup", null);\n(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Put)(\'signin\'),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", []),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)\n], AuthController.prototype, "signin", null);\nAuthController = AuthController_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Controller)(\'v1/auth\'),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [nestjs_pino__WEBPACK_IMPORTED_MODULE_2__.PinoLogger])\n], AuthController);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2F1dGgvYXV0aC5jb250cm9sbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNiO0FBR2hDLElBQU0sY0FBYyxzQkFBcEIsTUFBTSxjQUFjO0lBRXpCLFlBQ21CLE1BQWtCO1FBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFFbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWMsQ0FBQyxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQUlELE1BQU07UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztRQUMxQyxPQUFPLG1CQUFtQjtJQUM1QixDQUFDO0lBR0QsTUFBTTtRQUNKLE9BQU87SUFDVCxDQUFDO0NBQ0Y7QUFWQztJQUFDLG1EQUFHLENBQUMsUUFBUSxDQUFDOzs7OzRDQUliO0FBRUQ7SUFBQyxtREFBRyxDQUFDLFFBQVEsQ0FBQzs7Ozs0Q0FHYjtBQWxCVSxjQUFjO0lBRDFCLDBEQUFVLENBQUMsU0FBUyxDQUFDOzRFQUlPLG1EQUFVO0dBSDFCLGNBQWMsQ0FtQjFCO0FBbkIwQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYXV0aC9hdXRoLmNvbnRyb2xsZXIudHM/MDNkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRyb2xsZXIsIEdldCwgUHV0fSBmcm9tIFwiQG5lc3Rqcy9jb21tb25cIjtcbmltcG9ydCB7UGlub0xvZ2dlcn0gZnJvbSBcIm5lc3Rqcy1waW5vXCI7XG5cbkBDb250cm9sbGVyKCd2MS9hdXRoJylcbmV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBsb2dnZXI6IFBpbm9Mb2dnZXJcbiAgKSB7XG4gICAgdGhpcy5sb2dnZXIuc2V0Q29udGV4dChBdXRoQ29udHJvbGxlci5uYW1lKVxuICB9XG5cblxuICBAR2V0KCdzaWdudXAnKVxuICBzaWdudXAoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnU2lnbnVwIENhbGwgaXMgcm9sbGluZycpXG4gICAgcmV0dXJuICdZb3UgY2FsbGVkIHNpZ251cCdcbiAgfVxuXG4gIEBQdXQoJ3NpZ25pbicpXG4gIHNpZ25pbigpIHtcbiAgICAvLyBub29wXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/auth/auth.controller.ts\n',
        )

        /***/
      },

    /***/ './src/app/auth/auth.module.ts':
      /*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.controller */ "./src/app/auth/auth.controller.ts");\n/* harmony import */ var _sogrow_services_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sogrow/services/auth */ "../../../libs/services/auth/src/index.ts");\n\n\n\n\nlet AuthModule = class AuthModule {\n};\nAuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({\n        imports: [_sogrow_services_auth__WEBPACK_IMPORTED_MODULE_3__.AuthModule],\n        controllers: [_auth_controller__WEBPACK_IMPORTED_MODULE_2__.AuthController],\n    })\n], AuthModule);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2F1dGgvYXV0aC5tb2R1bGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVztBQUNvQjtBQU0vRCxJQUFNLFVBQVUsR0FBaEIsTUFBTSxVQUFVO0NBQUc7QUFBYixVQUFVO0lBSnRCLHNEQUFNLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyw2REFBZ0IsQ0FBQztRQUMzQixXQUFXLEVBQUUsQ0FBQyw0REFBYyxDQUFDO0tBQzlCLENBQUM7R0FDVyxVQUFVLENBQUc7QUFBSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYXV0aC9hdXRoLm1vZHVsZS50cz82MjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tICcuL2F1dGguY29udHJvbGxlcidcbmltcG9ydCB7IEF1dGhNb2R1bGUgYXMgQ29tbW9uQXV0aE1vZHVsZSB9IGZyb20gJ0Bzb2dyb3cvc2VydmljZXMvYXV0aCdcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25BdXRoTW9kdWxlXSxcbiAgY29udHJvbGxlcnM6IFtBdXRoQ29udHJvbGxlcl0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/auth/auth.module.ts\n',
        )

        /***/
      },

    /***/ './src/lambda.ts':
      /*!***********************!*\
  !*** ./src/lambda.ts ***!
  \***********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "handler": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");\n/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _vendia_serverless_express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vendia/serverless-express */ "@vendia/serverless-express");\n/* harmony import */ var _vendia_serverless_express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendia_serverless_express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");\n/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");\n/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nestjs_pino__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nlet server;\nfunction bootstrap() {\n    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {\n        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_2__.NestFactory.create(_app_app_module__WEBPACK_IMPORTED_MODULE_4__.AppModule, { bufferLogs: true });\n        app.useLogger(app.get(nestjs_pino__WEBPACK_IMPORTED_MODULE_5__.Logger));\n        app.useGlobalPipes(new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.ValidationPipe());\n        yield app.init();\n        const expressApp = app.getHttpAdapter().getInstance();\n        return _vendia_serverless_express__WEBPACK_IMPORTED_MODULE_3___default()({ app: expressApp });\n    });\n}\nconst handler = (event, context, callback) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {\n    server = server !== null && server !== void 0 ? server : (yield bootstrap());\n    return server(event, context, callback);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGFtYmRhLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDTDtBQUNnQjtBQUdkO0FBQ1Q7QUFFbkMsSUFBSSxNQUFlO0FBRW5CLFNBQWUsU0FBUzs7UUFDdEIsTUFBTSxHQUFHLEdBQUcsTUFBTSw0REFBa0IsQ0FBQyxzREFBUyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3JFLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQywrQ0FBTSxDQUFDLENBQUM7UUFDOUIsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLDBEQUFjLEVBQUUsQ0FBQztRQUN4QyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFFaEIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLFdBQVcsRUFBRTtRQUNyRCxPQUFPLGlFQUFpQixDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxDQUFDO0lBQy9DLENBQUM7Q0FBQTtBQUVNLE1BQU0sT0FBTyxHQUFZLENBQU8sS0FBVSxFQUFFLE9BQWdCLEVBQUUsUUFBa0IsRUFBRSxFQUFFLENBQUM7SUFDMUYsTUFBTSxHQUFHLE1BQU0sYUFBTixNQUFNLGNBQU4sTUFBTSxHQUFJLENBQUMsTUFBTSxTQUFTLEVBQUUsQ0FBQztJQUN0QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztBQUN6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xhbWJkYS50cz82Yzg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25QaXBlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5pbXBvcnQgeyBOZXN0RmFjdG9yeSB9IGZyb20gJ0BuZXN0anMvY29yZSdcbmltcG9ydCBzZXJ2ZXJsZXNzRXhwcmVzcyBmcm9tICdAdmVuZGlhL3NlcnZlcmxlc3MtZXhwcmVzcydcbmltcG9ydCB7IENhbGxiYWNrLCBDb250ZXh0LCBIYW5kbGVyIH0gZnJvbSAnYXdzLWxhbWJkYSdcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSdcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwibmVzdGpzLXBpbm9cIjtcblxubGV0IHNlcnZlcjogSGFuZGxlclxuXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIGNvbnN0IGFwcCA9IGF3YWl0IE5lc3RGYWN0b3J5LmNyZWF0ZShBcHBNb2R1bGUsIHsgYnVmZmVyTG9nczogdHJ1ZSB9KVxuICBhcHAudXNlTG9nZ2VyKGFwcC5nZXQoTG9nZ2VyKSlcbiAgYXBwLnVzZUdsb2JhbFBpcGVzKG5ldyBWYWxpZGF0aW9uUGlwZSgpKVxuICBhd2FpdCBhcHAuaW5pdCgpXG5cbiAgY29uc3QgZXhwcmVzc0FwcCA9IGFwcC5nZXRIdHRwQWRhcHRlcigpLmdldEluc3RhbmNlKClcbiAgcmV0dXJuIHNlcnZlcmxlc3NFeHByZXNzKHsgYXBwOiBleHByZXNzQXBwIH0pXG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyOiBIYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBhbnksIGNvbnRleHQ6IENvbnRleHQsIGNhbGxiYWNrOiBDYWxsYmFjaykgPT4ge1xuICBzZXJ2ZXIgPSBzZXJ2ZXIgPz8gKGF3YWl0IGJvb3RzdHJhcCgpKVxuICByZXR1cm4gc2VydmVyKGV2ZW50LCBjb250ZXh0LCBjYWxsYmFjaylcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lambda.ts\n',
        )

        /***/
      },

    /***/ '../../../libs/services/auth/src/index.ts':
      /*!************************************************!*\
  !*** ../../../libs/services/auth/src/index.ts ***!
  \************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "AuthModule": () => (/* reexport safe */ _lib_auth_module__WEBPACK_IMPORTED_MODULE_0__.AuthModule),\n/* harmony export */   "JwtAuthGuard": () => (/* reexport safe */ _lib_jwt_auth_guard__WEBPACK_IMPORTED_MODULE_2__.JwtAuthGuard),\n/* harmony export */   "JwtStrategy": () => (/* reexport safe */ _lib_jwt_strategy__WEBPACK_IMPORTED_MODULE_1__.JwtStrategy)\n/* harmony export */ });\n/* harmony import */ var _lib_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/auth.module */ "../../../libs/services/auth/src/lib/auth.module.ts");\n/* harmony import */ var _lib_jwt_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/jwt.strategy */ "../../../libs/services/auth/src/lib/jwt.strategy.ts");\n/* harmony import */ var _lib_jwt_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/jwt-auth.guard */ "../../../libs/services/auth/src/lib/jwt-auth.guard.ts");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbGlicy9zZXJ2aWNlcy9hdXRoL3NyYy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDQztBQUNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uLy4uLy4uL2xpYnMvc2VydmljZXMvYXV0aC9zcmMvaW5kZXgudHM/NjZlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2xpYi9hdXRoLm1vZHVsZSdcbmV4cG9ydCAqIGZyb20gJy4vbGliL2p3dC5zdHJhdGVneSdcbmV4cG9ydCAqIGZyb20gJy4vbGliL2p3dC1hdXRoLmd1YXJkJ1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../libs/services/auth/src/index.ts\n',
        )

        /***/
      },

    /***/ '../../../libs/services/auth/src/lib/auth.module.ts':
      /*!**********************************************************!*\
  !*** ../../../libs/services/auth/src/lib/auth.module.ts ***!
  \**********************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _jwt_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.strategy */ "../../../libs/services/auth/src/lib/jwt.strategy.ts");\n/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");\n/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");\n/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nlet AuthModule = class AuthModule {\n};\nAuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({\n        imports: [\n            _nestjs_passport__WEBPACK_IMPORTED_MODULE_3__.PassportModule.register({ defaultStrategy: \'jwt\' }),\n            _nestjs_jwt__WEBPACK_IMPORTED_MODULE_4__.JwtModule.register({\n                secret: process.env.TOKEN_SECRET,\n                signOptions: {\n                    expiresIn: \'1h\',\n                    algorithm: \'HS512\'\n                }\n            })\n        ],\n        providers: [_jwt_strategy__WEBPACK_IMPORTED_MODULE_2__.JwtStrategy],\n        exports: [_jwt_strategy__WEBPACK_IMPORTED_MODULE_2__.JwtStrategy, _nestjs_passport__WEBPACK_IMPORTED_MODULE_3__.PassportModule],\n    })\n], AuthModule);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbGlicy9zZXJ2aWNlcy9hdXRoL3NyYy9saWIvYXV0aC5tb2R1bGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDSTtBQUNLO0FBQ1Y7QUFnQi9CLElBQU0sVUFBVSxHQUFoQixNQUFNLFVBQVU7Q0FBRztBQUFiLFVBQVU7SUFkdEIsc0RBQU0sQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNQLHFFQUF1QixDQUFDLEVBQUMsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDO1lBQ2pELDJEQUFrQixDQUFDO2dCQUNqQixNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZO2dCQUNoQyxXQUFXLEVBQUU7b0JBQ1gsU0FBUyxFQUFFLElBQUk7b0JBQ2YsU0FBUyxFQUFFLE9BQU87aUJBQ25CO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsU0FBUyxFQUFFLENBQUMsc0RBQVcsQ0FBQztRQUN4QixPQUFPLEVBQUUsQ0FBQyxzREFBVyxFQUFFLDREQUFjLENBQUM7S0FDdkMsQ0FBQztHQUNXLFVBQVUsQ0FBRztBQUFIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uLy4uLy4uL2xpYnMvc2VydmljZXMvYXV0aC9zcmMvbGliL2F1dGgubW9kdWxlLnRzPzAxMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5pbXBvcnQge0p3dFN0cmF0ZWd5fSBmcm9tIFwiLi9qd3Quc3RyYXRlZ3lcIjtcbmltcG9ydCB7UGFzc3BvcnRNb2R1bGV9IGZyb20gXCJAbmVzdGpzL3Bhc3Nwb3J0XCI7XG5pbXBvcnQge0p3dE1vZHVsZX0gZnJvbSBcIkBuZXN0anMvand0XCI7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUGFzc3BvcnRNb2R1bGUucmVnaXN0ZXIoe2RlZmF1bHRTdHJhdGVneTogJ2p3dCd9KSxcbiAgICBKd3RNb2R1bGUucmVnaXN0ZXIoe1xuICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5UT0tFTl9TRUNSRVQsXG4gICAgICBzaWduT3B0aW9uczoge1xuICAgICAgICBleHBpcmVzSW46ICcxaCcsXG4gICAgICAgIGFsZ29yaXRobTogJ0hTNTEyJ1xuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIHByb3ZpZGVyczogW0p3dFN0cmF0ZWd5XSxcbiAgZXhwb3J0czogW0p3dFN0cmF0ZWd5LCBQYXNzcG9ydE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../libs/services/auth/src/lib/auth.module.ts\n',
        )

        /***/
      },

    /***/ '../../../libs/services/auth/src/lib/jwt-auth.guard.ts':
      /*!*************************************************************!*\
  !*** ../../../libs/services/auth/src/lib/jwt-auth.guard.ts ***!
  \*************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "JwtAuthGuard": () => (/* binding */ JwtAuthGuard)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");\n/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet JwtAuthGuard = class JwtAuthGuard extends (0,_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__.AuthGuard)(\'jwt\') {\n};\nJwtAuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)()\n], JwtAuthGuard);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbGlicy9zZXJ2aWNlcy9hdXRoL3NyYy9saWIvand0LWF1dGguZ3VhcmQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDQztBQUdwQyxJQUFNLFlBQVksR0FBbEIsTUFBTSxZQUFhLFNBQVEsMkRBQVMsQ0FBQyxLQUFLLENBQUM7Q0FBRztBQUF4QyxZQUFZO0lBRHhCLDBEQUFVLEVBQUU7R0FDQSxZQUFZLENBQTRCO0FBQTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uLy4uLy4uL2xpYnMvc2VydmljZXMvYXV0aC9zcmMvbGliL2p3dC1hdXRoLmd1YXJkLnRzPzQ3MzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQG5lc3Rqcy9jb21tb25cIjtcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tIFwiQG5lc3Rqcy9wYXNzcG9ydFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnd0QXV0aEd1YXJkIGV4dGVuZHMgQXV0aEd1YXJkKCdqd3QnKSB7fVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../libs/services/auth/src/lib/jwt-auth.guard.ts\n',
        )

        /***/
      },

    /***/ '../../../libs/services/auth/src/lib/jwt.strategy.ts':
      /*!***********************************************************!*\
  !*** ../../../libs/services/auth/src/lib/jwt.strategy.ts ***!
  \***********************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "JwtStrategy": () => (/* binding */ JwtStrategy)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");\n/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport-jwt */ "passport-jwt");\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nlet JwtStrategy = class JwtStrategy extends (0,_nestjs_passport__WEBPACK_IMPORTED_MODULE_1__.PassportStrategy)(passport_jwt__WEBPACK_IMPORTED_MODULE_2__.Strategy) {\n    constructor() {\n        super({\n            jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_2__.ExtractJwt.fromAuthHeaderAsBearerToken(),\n            secretOrKey: process.env.TOKEN_SECRET,\n            algorithms: [\'HS512\'],\n        });\n    }\n    validate(payload) {\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {\n            return payload;\n        });\n    }\n};\nJwtStrategy = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_3__.Injectable)(),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [])\n], JwtStrategy);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbGlicy9zZXJ2aWNlcy9hdXRoL3NyYy9saWIvand0LnN0cmF0ZWd5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDQTtBQUNUO0FBRW5DLElBQU0sV0FBVyxHQUFqQixNQUFNLFdBQVksU0FBUSxrRUFBZ0IsQ0FBQyxrREFBUSxDQUFDO0lBQ3pEO1FBQ0UsS0FBSyxDQUFDO1lBQ0osY0FBYyxFQUFFLGdGQUFzQyxFQUFFO1lBQ3hELFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7WUFDckMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDO1NBQ3RCLENBQUM7SUFDSixDQUFDO0lBRUssUUFBUSxDQUFDLE9BQVk7O1lBQ3pCLE9BQU8sT0FBTztRQUNoQixDQUFDO0tBQUE7Q0FDRjtBQVpZLFdBQVc7SUFEdkIsMERBQVUsRUFBRTs7R0FDQSxXQUFXLENBWXZCO0FBWnVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uLy4uLy4uL2xpYnMvc2VydmljZXMvYXV0aC9zcmMvbGliL2p3dC5zdHJhdGVneS50cz85MjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhc3Nwb3J0U3RyYXRlZ3kgfSBmcm9tICdAbmVzdGpzL3Bhc3Nwb3J0J1xuaW1wb3J0IHsgRXh0cmFjdEp3dCwgU3RyYXRlZ3kgfSBmcm9tICdwYXNzcG9ydC1qd3QnXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAbmVzdGpzL2NvbW1vblwiO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEp3dFN0cmF0ZWd5IGV4dGVuZHMgUGFzc3BvcnRTdHJhdGVneShTdHJhdGVneSkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBqd3RGcm9tUmVxdWVzdDogRXh0cmFjdEp3dC5mcm9tQXV0aEhlYWRlckFzQmVhcmVyVG9rZW4oKSxcbiAgICAgIHNlY3JldE9yS2V5OiBwcm9jZXNzLmVudi5UT0tFTl9TRUNSRVQsXG4gICAgICBhbGdvcml0aG1zOiBbJ0hTNTEyJ10sXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIHZhbGlkYXRlKHBheWxvYWQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHBheWxvYWRcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../libs/services/auth/src/lib/jwt.strategy.ts\n',
        )

        /***/
      },

    /***/ '../../../libs/services/infra/observation/src/index.ts':
      /*!*************************************************************!*\
  !*** ../../../libs/services/infra/observation/src/index.ts ***!
  \*************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "LoggerModule": () => (/* reexport safe */ _lib_logging_logger_module__WEBPACK_IMPORTED_MODULE_0__.LoggerModule)\n/* harmony export */ });\n/* harmony import */ var _lib_logging_logger_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/logging/logger.module */ "../../../libs/services/infra/observation/src/lib/logging/logger.module.ts");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbGlicy9zZXJ2aWNlcy9pbmZyYS9vYnNlcnZhdGlvbi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vLi4vbGlicy9zZXJ2aWNlcy9pbmZyYS9vYnNlcnZhdGlvbi9zcmMvaW5kZXgudHM/OTdlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2xpYi9sb2dnaW5nL2xvZ2dlci5tb2R1bGUnXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../libs/services/infra/observation/src/index.ts\n',
        )

        /***/
      },

    /***/ '../../../libs/services/infra/observation/src/lib/logging/logger.module.ts':
      /*!*********************************************************************************!*\
  !*** ../../../libs/services/infra/observation/src/lib/logging/logger.module.ts ***!
  \*********************************************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "LoggerModule": () => (/* binding */ LoggerModule)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");\n/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nestjs_pino__WEBPACK_IMPORTED_MODULE_2__);\nvar LoggerModule_1;\n\n\n\nlet LoggerModule = LoggerModule_1 = class LoggerModule {\n    static forRoot() {\n        return {\n            imports: [\n                nestjs_pino__WEBPACK_IMPORTED_MODULE_2__.LoggerModule.forRoot({\n                    pinoHttp: {\n                        level:  true ? \'debug\' : 0,\n                        transport:  true ? { target: \'pino-pretty\', options: { singleLine: true } } : 0,\n                        autoLogging: false,\n                        redact: {\n                            paths: [\'req.headers.cookie\', \'req.remoteAddress\']\n                        }\n                    }\n                })\n            ],\n            module: LoggerModule_1,\n        };\n    }\n};\nLoggerModule = LoggerModule_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({})\n], LoggerModule);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbGlicy9zZXJ2aWNlcy9pbmZyYS9vYnNlcnZhdGlvbi9zcmMvbGliL2xvZ2dpbmcvbG9nZ2VyLm1vZHVsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDUztBQUd2RCxJQUFNLFlBQVksb0JBQWxCLE1BQU0sWUFBWTtJQUN2QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxPQUFPLEVBQUU7Z0JBQ1AsNkRBQXdCLENBQUM7b0JBQ3ZCLFFBQVEsRUFBRTt3QkFDUixLQUFLLEVBQUUsS0FBcUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFNO3dCQUMvRCxTQUFTLEVBQUUsS0FBcUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFTO3dCQUN2SCxXQUFXLEVBQUUsS0FBSzt3QkFDbEIsTUFBTSxFQUFFOzRCQUNOLEtBQUssRUFBRSxDQUFDLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDO3lCQUNuRDtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7WUFDRCxNQUFNLEVBQUUsY0FBWTtTQUNyQjtJQUNILENBQUM7Q0FDRjtBQWxCWSxZQUFZO0lBRHhCLHNEQUFNLENBQUMsRUFBRSxDQUFDO0dBQ0UsWUFBWSxDQWtCeEI7QUFsQndCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uLy4uLy4uL2xpYnMvc2VydmljZXMvaW5mcmEvb2JzZXJ2YXRpb24vc3JjL2xpYi9sb2dnaW5nL2xvZ2dlci5tb2R1bGUudHM/ZTA5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0R5bmFtaWNNb2R1bGUsIE1vZHVsZX0gZnJvbSBcIkBuZXN0anMvY29tbW9uXCI7XG5pbXBvcnQgeyBMb2dnZXJNb2R1bGUgYXMgUGlub0xvZ2dlck1vZHVsZSB9IGZyb20gJ25lc3Rqcy1waW5vJ1xuXG5ATW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIExvZ2dlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IER5bmFtaWNNb2R1bGUge1xuICAgIHJldHVybiB7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIFBpbm9Mb2dnZXJNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgcGlub0h0dHA6IHtcbiAgICAgICAgICAgIGxldmVsOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ2RlYnVnJyA6ICdpbmZvJyxcbiAgICAgICAgICAgIHRyYW5zcG9ydDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHsgdGFyZ2V0OiAncGluby1wcmV0dHknLCBvcHRpb25zOiB7IHNpbmdsZUxpbmU6IHRydWUgfSB9IDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgYXV0b0xvZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgICAgcmVkYWN0OiB7XG4gICAgICAgICAgICAgIHBhdGhzOiBbJ3JlcS5oZWFkZXJzLmNvb2tpZScsICdyZXEucmVtb3RlQWRkcmVzcyddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIG1vZHVsZTogTG9nZ2VyTW9kdWxlLFxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../libs/services/infra/observation/src/lib/logging/logger.module.ts\n',
        )

        /***/
      },

    /***/ '@nestjs/common':
      /*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
      /***/ (module) => {
        module.exports = require('@nestjs/common')

        /***/
      },

    /***/ '@nestjs/config':
      /*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
      /***/ (module) => {
        module.exports = require('@nestjs/config')

        /***/
      },

    /***/ '@nestjs/core':
      /*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
      /***/ (module) => {
        module.exports = require('@nestjs/core')

        /***/
      },

    /***/ '@nestjs/jwt':
      /*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
      /***/ (module) => {
        module.exports = require('@nestjs/jwt')

        /***/
      },

    /***/ '@nestjs/passport':
      /*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
      /***/ (module) => {
        module.exports = require('@nestjs/passport')

        /***/
      },

    /***/ '@vendia/serverless-express':
      /*!*********************************************!*\
  !*** external "@vendia/serverless-express" ***!
  \*********************************************/
      /***/ (module) => {
        module.exports = require('@vendia/serverless-express')

        /***/
      },

    /***/ 'nestjs-pino':
      /*!******************************!*\
  !*** external "nestjs-pino" ***!
  \******************************/
      /***/ (module) => {
        module.exports = require('nestjs-pino')

        /***/
      },

    /***/ 'passport-jwt':
      /*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
      /***/ (module) => {
        module.exports = require('passport-jwt')

        /***/
      },

    /***/ tslib:
      /*!************************!*\
  !*** external "tslib" ***!
  \************************/
      /***/ (module) => {
        module.exports = require('tslib')

        /***/
      },

    /******/
  }
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {}
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId]
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    })
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ ;(() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter = module && module.__esModule ? /******/ () => module['default'] : /******/ () => module
      /******/ __webpack_require__.d(getter, { a: getter })
      /******/ return getter
      /******/
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ ;(() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
          /******/
        }
        /******/
      }
      /******/
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ ;(() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ ;(() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    }
    /******/
  })()
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval-source-map devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./src/lambda.ts')
  /******/ module.exports = __webpack_exports__
  /******/
  /******/
})()
