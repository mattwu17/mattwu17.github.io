module.exports = function (eleventyConfig) {
  // add passthrough copies of assets necessary for build
  eleventyConfig.addPassthroughCopy("./src/audio");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/scripts");
  eleventyConfig.addPassthroughCopy("./src/styles");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
