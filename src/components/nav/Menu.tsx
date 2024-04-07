export interface Section {
  id: string;
  name: string;
}

interface MenuProps {
  sections: Section[];
}

export const Menu = ({sections}: MenuProps) => {
  const scrollToAnchor = (e: any) => {
    e.preventDefault();
    const anchorId = e.target.getAttribute("href").slice(1);
    const anchorElement = document.getElementById(anchorId);
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };
  return (
    <>
      <div className="menu flex flex-col">
        {sections.map((section, index) => (
          <a href={`#${section.id}`} onClick={scrollToAnchor} key={index} className="font-medium text-2xl text-blue-500 dark:text-blue-500 hover:underline">
            {index + 1}. {section.name}
          </a>
        ))}
      </div>
    </>
  );
};
