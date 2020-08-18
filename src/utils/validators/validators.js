export const required = (value) =>
  value ? undefined : "Вы ни чего не написали!";

export const maxLengthCreator = (maxLength) => (value) =>
  value.length > maxLength ? `Не более ${maxLength} символов!` : undefined;
