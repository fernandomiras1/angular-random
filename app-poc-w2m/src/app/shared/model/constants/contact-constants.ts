import { environment } from '../../../../environments/environment'

export class ContactConstants {
  private static URL_CONTACT: string

  private static URL_POLICIES: string

  public static get urlContact(): string {
    return this.URL_CONTACT ? this.URL_CONTACT : environment.URL_CONTACT
  }

  public static get urlPolicies(): string {
    return this.URL_POLICIES ? this.URL_POLICIES : environment.URL_POLICIES
  }
}
