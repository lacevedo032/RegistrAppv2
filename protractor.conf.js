exports.config = {
  framework: "jasmine",
  seleniumAddress: "http://localhost:4444/wd/hub", // Puede variar según la configuración de Selenium o WebDriver
  specs: ["e2e-spec.js"], // Archivo que contiene tus pruebas E2E escritas en Jasmine
};
