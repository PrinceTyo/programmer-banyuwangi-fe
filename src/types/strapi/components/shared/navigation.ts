export interface Navigation<WithIcon extends boolean = false> {
  title: string;
  url: string;
  showIcon?: WithIcon extends true ? boolean : never;
}
