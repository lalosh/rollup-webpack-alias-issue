declare module "*.svg" {
    const content: string;
    export default content;
}
declare module "*.module.css" {
    const content: { [key: string]: string };
    export default content;
}
declare module "*.css" { }
