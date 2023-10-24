/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

const sanityURL = import.meta.env.SANITY_URL;

export const getSanityImageURL = (ref) => {
  // example of a file ref
  // image-a0dd108b7c2dffae7dbca28da131aa3bb34be09b-381x381-png

  const lastDashIndex = ref.lastIndexOf('-');

  // replacing the last dash with a dot to get the file format
  const fileFormat = ref.slice(lastDashIndex).replace('-', '.');

  return sanityURL + ref.slice(6, -4) + fileFormat;
};