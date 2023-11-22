import { getGenericPageName } from "@/utilities/pageFunctions";

export default function PerformancePage() {
  // const getPageName = (): string => {
  //   const pageName = "Performance Page!";
  //   console.log(pageName);
  //   return pageName;
  // };



  return <div>{getGenericPageName("Performance Page!")}</div>;
}
