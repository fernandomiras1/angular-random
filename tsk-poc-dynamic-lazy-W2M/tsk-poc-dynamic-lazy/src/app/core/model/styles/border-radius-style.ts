export interface BorderRadiusStyleI {
  topLeft: boolean | false;

  topRight: boolean | false;

  bottomLeft: boolean | false;

  bottomRight: boolean | false;
}
export class BorderRadiusStyle {
  private readonly DEFAULT_RADIUS: number = 8

  private readonly DEFAULT_MINIMUM_RADIUS: number=0.625

  public setBorderRadiusStyle(borderRadius: BorderRadiusStyleI, border: number = this.DEFAULT_RADIUS): string {
    let borderRadiusStyle = ''
    borderRadiusStyle += borderRadius.topLeft ? `${border}rem ` : `${this.DEFAULT_MINIMUM_RADIUS}rem `
    borderRadiusStyle += borderRadius.topRight ? `${border}rem ` : `${this.DEFAULT_MINIMUM_RADIUS}rem `
    borderRadiusStyle += borderRadius.bottomRight ? `${border}rem ` : `${this.DEFAULT_MINIMUM_RADIUS}rem `
    borderRadiusStyle += borderRadius.bottomLeft ? `${border}rem ` : `${this.DEFAULT_MINIMUM_RADIUS}rem `
    return borderRadiusStyle
  }
}
