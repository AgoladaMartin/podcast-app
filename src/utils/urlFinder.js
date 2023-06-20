export const urlFinder = (string) => {
  var httpRegexG =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  let match = string.match(httpRegexG);
  if (match) {
    return (string = string.replace(
      match,
      `<a href=${match} target="_blank">${match}</a>`
    ));
  } else {
    return string;
  }
};
