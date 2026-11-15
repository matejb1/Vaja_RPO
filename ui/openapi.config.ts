import { GeneratorConfig } from "ng-openapi";

const config: GeneratorConfig = {
    input: "http://localhost:8081/v3/api-docs/springdocDefault",
    output: "./src/app/api",
    options: {
        dateType: "Date",
        enumStyle: "enum",
    },
};

export default config;