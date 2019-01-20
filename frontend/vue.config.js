module.exports = {
  }
	baseUrl: process.env.NODE_ENV === 'production'
    ? '/2018/'
    : '/',

	css: {
		sourceMap: true
	}
}