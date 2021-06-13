export interface AttributeI {
  name: string;
  value: string;
}

export interface ScriptStructure {
  src?: string;
  setAttribute?: AttributeI;
  append?: string;
  body?: string;
}
