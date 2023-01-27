module.exports = {
    module: {
      
      rules: [
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: "url-loader?limit=8192",
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ],
    },
  };