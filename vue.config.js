module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/townsquare/" : "/",
    devServer: {
        disableHostCheck: true
    }
};
