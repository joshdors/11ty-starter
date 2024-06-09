module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "./src/img": "/img" });
  eleventyConfig.addPassthroughCopy({ "./src/index.js": "index.js" });
  return {
    dir: {
      input: "src",
      output: "site",
    },
  };
};