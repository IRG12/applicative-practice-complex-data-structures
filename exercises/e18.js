/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const years = data.asteroids.map((asteroid) => asteroid.discoveryYear);
  const yearsWithMostDiscoveries = years.reduce((acc, val) => {
    const currCount = acc[val] ?? 0;
    return {
      ...acc,
      [val]: currCount + 1,
    };
  }, {});
  let max = 0;
  let yearWithMostDiscoveries = "";
  for (let year in yearsWithMostDiscoveries) {
    if (yearsWithMostDiscoveries[year] > max) {
      max = yearsWithMostDiscoveries[year];
      yearWithMostDiscoveries = year;
    }
  }
  return parseInt(yearWithMostDiscoveries);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
