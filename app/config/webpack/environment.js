const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')


environment.loaders.insert('sass', {
    test: /\.scss$/,
    use: [
         'style-loader',
          'css-loader',
        {
            
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentWidth: 4,
                includePaths: ['styles/'],
              },
            }
        }
    ]
});

environment.loaders.prepend('typescript', typescript)

module.exports = environment
