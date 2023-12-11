/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

const sanityUrlImg = import.meta.env.SANITY_URL_IMG;
const sanityUrlFiles = import.meta.env.SANITY_URL_FILES;

export const getSanityImageURL = (ref) => {
  // example of an image ref
  // image-a0dd108b7c2dffae7dbca28da131aa3bb34be09b-381x381-png

  const lastDashIndex = ref.lastIndexOf('-');

  // replacing the last dash with a dot to get the file format
  const fileFormat = ref.slice(lastDashIndex).replace('-', '.');

  return sanityUrlImg + ref.slice(6, -4) + fileFormat;
};

export const getSanityFileURL = (ref) => {
  // example of a file ref
  // file-19eafda15ec9d11dad2752a2bb5d72b8c260a85b-m4v

  const lastDashIndex = ref.lastIndexOf('-');

  // replacing the last dash with a dot to get the file format
  const fileFormat = ref.slice(lastDashIndex).replace('-', '.');

  return sanityUrlFiles + ref.slice(5, -4) + fileFormat;
};