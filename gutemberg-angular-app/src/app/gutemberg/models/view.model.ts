import { Component } from "./component.model";


export interface View {
  domain: string;
  id: string;
  title?: string;
  subTitle?: string;
  components: Component[];
}
