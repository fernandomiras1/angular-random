export class ImagesUtils {
  static generateName(categoryName: string, separator: string) {

    const chars = {
      á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u',
      à: 'a', è: 'e', ì: 'i', ò: 'o', ù: 'u', ñ: 'n',
      Á: 'A', É: 'E', Í: 'I', Ó: 'O', Ú: 'U',
      À: 'A', È: 'E', Ì: 'I', Ò: 'O', Ù: 'U', Ñ: 'N',
    };

    const regEx = /[áàéèíìóòúùñ]/ig;

    let cleaned = categoryName.toLowerCase().replace(regEx, e => chars[e]);
    cleaned = cleaned.replace('%', '');
    return cleaned.trim().split(' ').join(separator);
  }
}
