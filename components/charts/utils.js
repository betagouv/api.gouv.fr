export const getLabel = m => {
  const d = new Date(
    new Date(ORIGIN).setMonth(new Date(ORIGIN).getMonth() + m)
  );
  var options = {
    year: 'numeric',
    month: 'long',
  };
  return new Intl.DateTimeFormat('fr-FR', options).format(d);
};

export const ORIGIN = '01/01/2020';

// returns the last update date or 01/01/2020 if older
export const getDate = api => {
  const createdAtArray = (api.last_update || ORIGIN).split('/');

  return new Date(
    parseInt(createdAtArray[2], 10),
    parseInt(createdAtArray[1], 10), // month is zero indexed,
    0
  );
};
