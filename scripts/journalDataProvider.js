/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const journal = [
  {
    id: 1,
    date: "07/24/2025",
    concept: "HTML and CSS",
    entry: "we talked about HTML components and CSS",
    mood: "ok"
  },
  {
    id: 2,
    date: "07/25/2025",
    concept: "Flexbox",
    entry: "we talked about how to align stuff",
    mood: "broken"
  }
];

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) -Date.parse(nextEntry.date)
  );
  return sortedByDate;
} 