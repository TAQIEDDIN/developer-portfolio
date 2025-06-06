const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  }
}
// next.config.js
module.exports = {
  images: {
    domains: ['media2.dev.to'],
  },
};
