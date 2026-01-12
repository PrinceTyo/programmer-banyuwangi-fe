export interface Navigation<WithIcon extends boolean = false> {
  id: number;
  title: string;
  url: string;
  showIcon?: WithIcon extends true ? boolean : never;
}
