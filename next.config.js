// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      // Agregar regla de loader para archivos de audio
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/media',
              publicPath: '/_next/static/media',
            },
          },
        ],
      });
  
      return config;
    },
  };
  