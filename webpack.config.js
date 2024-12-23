// filepath: /C:/Users/gasto/OneDrive/Repositorios/Notebook/pet-identifier/webpack.config.js
const { createWebpackConfigAsync } = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createWebpackConfigAsync(env, argv);
  // Personaliza la configuración de Webpack aquí
  return config;
};