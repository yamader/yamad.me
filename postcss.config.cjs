module.exports = {
  plugins: [
    require("cssnano")({
      preset: "advanced",
      autoprefixer: { add: true },
    }),
  ],
}
