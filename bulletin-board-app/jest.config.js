// For every .js file in the src directory, require at least 80% line coverage.
module.exports = {
    coverageThreshold: {
      './backend/*.js': {
        lines: 25
      }
    }
  }