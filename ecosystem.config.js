module.exports = {
  apps: [
    {
      name: 'my-blog',
      script: './src/pages/index.js',
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};