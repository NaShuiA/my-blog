module.exports = {
  apps: [
    {
      name: 'my-blog',
      script: './build/index.html',
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080
      }
    }
  ]
};