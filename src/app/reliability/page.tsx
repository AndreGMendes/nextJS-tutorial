export default function ReliabilityPage() {
  const getPageName = (): string => {
    const pageName = "Reliability Page!";
    console.log(pageName);
    return pageName;
  };

  return <div>{getPageName()}</div>;
}
