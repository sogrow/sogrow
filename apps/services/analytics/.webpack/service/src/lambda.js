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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "AppController": () => (/* binding */ AppController)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");\n/* harmony import */ var _sogrow_services_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sogrow/services/auth */ "../../../libs/services/auth/src/index.ts");\n\n\n\n\nlet AppController = class AppController {\n    constructor(appService) {\n        this.appService = appService;\n    }\n    getUserInfo(req) {\n        return req.user;\n    }\n    getData() {\n        console.log(`Token`, process.env.TOKEN_SECRET);\n        return \'Hello from AWS Lambda!\';\n    }\n};\n(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.UseGuards)(_sogrow_services_auth__WEBPACK_IMPORTED_MODULE_3__.JwtAuthGuard),\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Get)(\'user-info\'),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Request)()),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [Object]),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)\n], AppController.prototype, "getUserInfo", null);\n(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Get)(\'hello\'),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", []),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)\n], AppController.prototype, "getData", null);\nAppController = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Controller)(),\n    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService])\n], AppController);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FwcC5jb250cm9sbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9FO0FBRTFCO0FBQ1U7QUFHN0MsSUFBTSxhQUFhLEdBQW5CLE1BQU0sYUFBYTtJQUN4QixZQUE2QixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUl2RCxXQUFXLENBQVksR0FBRztRQUN4QixPQUFPLEdBQUcsQ0FBQyxJQUFJO0lBQ2pCLENBQUM7SUFHRCxPQUFPO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDOUMsT0FBTyx3QkFBd0I7SUFDakMsQ0FBQztDQUNGO0FBWEM7SUFBQyx5REFBUyxDQUFDLCtEQUFZLENBQUM7SUFDdkIsbURBQUcsQ0FBQyxXQUFXLENBQUM7SUFDSix5R0FBTyxFQUFFOzs7O2dEQUVyQjtBQUVEO0lBQUMsbURBQUcsQ0FBQyxPQUFPLENBQUM7Ozs7NENBSVo7QUFiVSxhQUFhO0lBRHpCLDBEQUFVLEVBQUU7NEVBRThCLG9EQUFVO0dBRHhDLGFBQWEsQ0FjekI7QUFkeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb250cm9sbGVyLnRzPzA0NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbGxlciwgR2V0LCBSZXF1ZXN0LCBVc2VHdWFyZHMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcblxuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vYXBwLnNlcnZpY2UnXG5pbXBvcnQgeyBKd3RBdXRoR3VhcmQgfSBmcm9tICdAc29ncm93L3NlcnZpY2VzL2F1dGgnXG5cbkBDb250cm9sbGVyKClcbmV4cG9ydCBjbGFzcyBBcHBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlKSB7fVxuXG4gIEBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKVxuICBAR2V0KCd1c2VyLWluZm8nKVxuICBnZXRVc2VySW5mbyhAUmVxdWVzdCgpIHJlcSkge1xuICAgIHJldHVybiByZXEudXNlclxuICB9XG5cbiAgQEdldCgnaGVsbG8nKVxuICBnZXREYXRhKCkge1xuICAgIGNvbnNvbGUubG9nKGBUb2tlbmAsIHByb2Nlc3MuZW52LlRPS0VOX1NFQ1JFVClcbiAgICByZXR1cm4gJ0hlbGxvIGZyb20gQVdTIExhbWJkYSEnXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/app.controller.ts\n',
        )

        /***/
      },

    /***/ './src/app/app.module.ts':
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "AppModule": () => (/* binding */ AppModule)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.controller */ "./src/app/app.controller.ts");\n/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");\n/* harmony import */ var _sogrow_services_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sogrow/services/auth */ "../../../libs/services/auth/src/index.ts");\n/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");\n/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nlet AppModule = class AppModule {\n};\nAppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({\n        imports: [\n            _nestjs_config__WEBPACK_IMPORTED_MODULE_5__.ConfigModule.forRoot({ isGlobal: true }),\n            _sogrow_services_auth__WEBPACK_IMPORTED_MODULE_4__.AuthModule\n        ],\n        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__.AppController],\n        providers: [_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService],\n    })\n], AppModule);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFUztBQUNOO0FBQ1E7QUFDTjtBQVVyQyxJQUFNLFNBQVMsR0FBZixNQUFNLFNBQVM7Q0FBRztBQUFaLFNBQVM7SUFSckIsc0RBQU0sQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNQLGdFQUFvQixDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ3hDLDZEQUFVO1NBQ1g7UUFDRCxXQUFXLEVBQUUsQ0FBQywwREFBYSxDQUFDO1FBQzVCLFNBQVMsRUFBRSxDQUFDLG9EQUFVLENBQUM7S0FDeEIsQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubW9kdWxlLnRzPzY0MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5cbmltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tICcuL2FwcC5jb250cm9sbGVyJ1xuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vYXBwLnNlcnZpY2UnXG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnQHNvZ3Jvdy9zZXJ2aWNlcy9hdXRoJ1xuaW1wb3J0IHtDb25maWdNb2R1bGV9IGZyb20gXCJAbmVzdGpzL2NvbmZpZ1wiO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHsgaXNHbG9iYWw6IHRydWUgfSksXG4gICAgQXV0aE1vZHVsZVxuICBdLFxuICBjb250cm9sbGVyczogW0FwcENvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtBcHBTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/app.module.ts\n',
        )

        /***/
      },

    /***/ './src/app/app.service.ts':
      /*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "AppService": () => (/* binding */ AppService)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet AppService = class AppService {\n    getData() {\n        return { message: \'Welcome to analytics!\' };\n    }\n};\nAppService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)()\n], AppService);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FwcC5zZXJ2aWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUdwQyxJQUFNLFVBQVUsR0FBaEIsTUFBTSxVQUFVO0lBQ3JCLE9BQU87UUFDTCxPQUFPLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFO0lBQzdDLENBQUM7Q0FDRjtBQUpZLFVBQVU7SUFEdEIsMERBQVUsRUFBRTtHQUNBLFVBQVUsQ0FJdEI7QUFKc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5zZXJ2aWNlLnRzPzE3OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwU2VydmljZSB7XG4gIGdldERhdGEoKTogeyBtZXNzYWdlOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ1dlbGNvbWUgdG8gYW5hbHl0aWNzIScgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/app.service.ts\n',
        )

        /***/
      },

    /***/ './src/lambda.ts':
      /*!***********************!*\
  !*** ./src/lambda.ts ***!
  \***********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "handler": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");\n/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _vendia_serverless_express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vendia/serverless-express */ "@vendia/serverless-express");\n/* harmony import */ var _vendia_serverless_express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendia_serverless_express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");\n\n\n\n\n\nlet server;\nfunction bootstrap() {\n    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {\n        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_2__.NestFactory.create(_app_app_module__WEBPACK_IMPORTED_MODULE_4__.AppModule);\n        app.useGlobalPipes(new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.ValidationPipe());\n        yield app.init();\n        const expressApp = app.getHttpAdapter().getInstance();\n        return _vendia_serverless_express__WEBPACK_IMPORTED_MODULE_3___default()({ app: expressApp });\n    });\n}\nconst handler = (event, context, callback) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {\n    server = server !== null && server !== void 0 ? server : (yield bootstrap());\n    return server(event, context, callback);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGFtYmRhLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0w7QUFDZ0I7QUFHZDtBQUU1QyxJQUFJLE1BQWU7QUFFbkIsU0FBZSxTQUFTOztRQUN0QixNQUFNLEdBQUcsR0FBRyxNQUFNLDREQUFrQixDQUFDLHNEQUFTLENBQUM7UUFDL0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLDBEQUFjLEVBQUUsQ0FBQztRQUN4QyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFFaEIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLFdBQVcsRUFBRTtRQUNyRCxPQUFPLGlFQUFpQixDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxDQUFDO0lBQy9DLENBQUM7Q0FBQTtBQUVNLE1BQU0sT0FBTyxHQUFZLENBQU8sS0FBVSxFQUFFLE9BQWdCLEVBQUUsUUFBa0IsRUFBRSxFQUFFLENBQUM7SUFDMUYsTUFBTSxHQUFHLE1BQU0sYUFBTixNQUFNLGNBQU4sTUFBTSxHQUFJLENBQUMsTUFBTSxTQUFTLEVBQUUsQ0FBQztJQUN0QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztBQUN6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xhbWJkYS50cz82Yzg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25QaXBlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5pbXBvcnQgeyBOZXN0RmFjdG9yeSB9IGZyb20gJ0BuZXN0anMvY29yZSdcbmltcG9ydCBzZXJ2ZXJsZXNzRXhwcmVzcyBmcm9tICdAdmVuZGlhL3NlcnZlcmxlc3MtZXhwcmVzcydcbmltcG9ydCB7IENhbGxiYWNrLCBDb250ZXh0LCBIYW5kbGVyIH0gZnJvbSAnYXdzLWxhbWJkYSdcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSdcblxubGV0IHNlcnZlcjogSGFuZGxlclxuXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIGNvbnN0IGFwcCA9IGF3YWl0IE5lc3RGYWN0b3J5LmNyZWF0ZShBcHBNb2R1bGUpXG4gIGFwcC51c2VHbG9iYWxQaXBlcyhuZXcgVmFsaWRhdGlvblBpcGUoKSlcbiAgYXdhaXQgYXBwLmluaXQoKVxuXG4gIGNvbnN0IGV4cHJlc3NBcHAgPSBhcHAuZ2V0SHR0cEFkYXB0ZXIoKS5nZXRJbnN0YW5jZSgpXG4gIHJldHVybiBzZXJ2ZXJsZXNzRXhwcmVzcyh7IGFwcDogZXhwcmVzc0FwcCB9KVxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlcjogSGFuZGxlciA9IGFzeW5jIChldmVudDogYW55LCBjb250ZXh0OiBDb250ZXh0LCBjYWxsYmFjazogQ2FsbGJhY2spID0+IHtcbiAgc2VydmVyID0gc2VydmVyID8/IChhd2FpdCBib290c3RyYXAoKSlcbiAgcmV0dXJuIHNlcnZlcihldmVudCwgY29udGV4dCwgY2FsbGJhY2spXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lambda.ts\n',
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
