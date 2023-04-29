const xml2js = require('xml2js');

function parseBlogXml(callback) {
  const parser = new xml2js.Parser();
  fs.readFile(__dirname + '/blogpostexample.xml', (err, data) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    parser.parseString(data, (err, result) => {
      if (err) {
        console.error(err);
        return callback(err);
      }
      const blogPosts = result.blog.post;
      callback(null, blogPosts);
    });
  });
}

module.exports = {
  parseBlogXml,
};
