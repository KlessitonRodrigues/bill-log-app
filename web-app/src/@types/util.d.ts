declare namespace Utils {
  type TranslationFile = Record<string, string>;

  type ZodSchema<T> = Partial<Record<keyof T, any>>;

  type TextTags =
    | "b"
    | "span"
    | "small"
    | "strong"
    | "mark"
    | "em"
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
declare module "*.ttf";
declare module "*.woff";
declare module "*.woff2";
