export const getAnamnesEn = (answer: string) => {
  switch (answer) {
    case '1':
      return (
        'There are areas of pronounced redness of the skin with or without weeping\n' +
        'accompanied by severe itching'
      );
    case '2':
      return 'There are local areas of slight redness of the skin, dryness, itching';
    case '3':
      return 'There are cracks, scratches, dryness, slight redness, and itching of the skin';
    case '4':
      return 'Very dry skin, peeling, pronounced itching, especially at night';
    case '5':
      return (
        'Visually normal skin, but periodically there is redness, dryness\n' +
        'irritation, and itching'
      );
    default:
      return 'Not specified';
  }
};
