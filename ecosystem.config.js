module.exports = {
  apps: [
    {
      name: 'meibuweb',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        DB_USER: 'meibuadmin',
        DB_PASSWORD: 'meibupassword',
        DB_HOST: 'localhost',
        DB_PORT: '5432',
        DB_NAME: 'synologywebdb'
      }
    }
  ]
};
