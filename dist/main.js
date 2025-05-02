"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const express = require("express");
const app_module_1 = require("./app.module");
const session = require("express-session");
const passport = require("passport");
const customUnauthorizedException_1 = require("./auth/strategies/customUnauthorizedException");
const server = express();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server));
    app.useGlobalFilters(new customUnauthorizedException_1.UnauthorizedExceptionFilter());
    app.enableCors({
        origin: [
            'http://localhost:3100',
            'http://localhost:3000',
            'https://react-sample1-7oklifwj7-wildojisans-projects.vercel.app',
            'https://react-sample1-gamma.vercel.app/',
            'https://react-sample1-qhyrhm2gr-wildojisans-projects.vercel.app',
        ],
        credentials: true,
    });
    app.use(session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60 * 60 * 1000,
        },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map