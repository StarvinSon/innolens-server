module.exports = {
  apps: [{
    // General
    name: 'innolens-server',
    script: 'out/cli.js',
    args: [
      '--config',
      'app.config.js'
    ],

    // Advanced features
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '100M',
    env: {
      NODE_ENV: 'production'
    },
    env_development: {
      NODE_ENV: 'development'
    },
    source_map_support: true,

    // Log files
    combine_logs: true,

    // Control flow
    max_restarts: 10,
    restart_delay: 100,
    autorestart: true
  }]
};
