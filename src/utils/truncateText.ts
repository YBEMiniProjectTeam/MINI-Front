export const truncateText = (text: string) => {
    const MAX_DISPLAY_LENGTH = 12;

    if (text.length > MAX_DISPLAY_LENGTH) {
      return `${text.substring(0, MAX_DISPLAY_LENGTH)}...`;
    }
    return text;
  };