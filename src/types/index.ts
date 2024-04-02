export type TagType = {
  text: string;
  type: "tag" | "price";
  color: "black-tag" | 'transparent-tag' | 'blue-tag' | "green-tag" | 'black' | 'grey-tag';
}

export type LinkType = {
  to: string;
  background?: "fill" | "transparent";
  color: 'dark-green-link' | 'green-link' | 'dark-blue-link' | 'grey-link';
}

export type ButtonType = {
  text: string;
  color: "black-link" | "blue-link" | "green-link" | "white";
  background: "fill" | "transparent";
  disabled?: boolean;
}