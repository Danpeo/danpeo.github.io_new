import {Link} from "react-router-dom";

interface ButtonProps {
  text: string;
  navigation: string;
}

export interface CardProps {
  imageSource: string;
  title: string;
  text: string;
  buttons: ButtonProps[];
}

export const Card = ({ imageSource, title, text, buttons }: CardProps) => {
  return (
    <>
      <div className="max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
        <a href={buttons[0].navigation}>
          <img className="rounded-t-lg" src={imageSource} alt="" />
        </a>
        <div className="p-5">
          <a href={buttons[0].navigation}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-400">
            {text}
          </p>
          <div className="grid grid-cols-3 gap-2">
            {buttons.map((button, index) => (
              <button key={index}
                className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700
               rounded-lg focus:ring-4 focus:outline-none dark:bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                <Link key={index} to={button.navigation}>{button.text}</Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
